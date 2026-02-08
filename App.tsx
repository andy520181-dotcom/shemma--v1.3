import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AppView, DiagnosisResult } from './types';
import { analyzeAvatar } from './services/geminiService';
import { HomeView } from './components/HomeView';
import { ResultView } from './components/ResultView';
import { Toast } from './components/Toast';
import { SplashView } from './components/SplashView';
import { AdView } from './components/AdView';
import { SettingsView } from './components/SettingsView';
import { AgreementView } from './components/AgreementView';
import { getAdConfig } from './services/adService';
import { AdConfig } from './types/ad';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  // i18n 初始化状态
  const [i18nReady, setI18nReady] = useState<boolean>(false);

  // 启动页状态
  const [showSplash, setShowSplash] = useState<boolean>(true);

  // 广告页状态
  const [showAd, setShowAd] = useState<boolean>(false);
  const [adConfig, setAdConfig] = useState<AdConfig | null>(null);

  // 资源加载状态
  const [isReady, setIsReady] = useState<boolean>(false);

  // 当前视图
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);

  // 应用状态
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [nickname, setNickname] = useState<string>("");
  const [profession, setProfession] = useState<string>("");
  const [diagnosis, setDiagnosis] = useState<DiagnosisResult | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("已保存到相册");
  const [isLoading, setIsLoading] = useState(false);

  // 用户协议同意状态
  const [hasAgreed, setHasAgreed] = useState<boolean>(() => {
    // 从localStorage读取用户是否已同意
    const agreed = localStorage.getItem('userAgreementAccepted');
    return agreed === 'true';
  });

  // 检测 i18n 初始化完成
  useEffect(() => {
    if (i18n.isInitialized) {
      setI18nReady(true);
    } else {
      i18n.on('initialized', () => {
        setI18nReady(true);
      });
    }
  }, [i18n]);

  // 检测关键资源加载完成
  useEffect(() => {
    const checkResources = async () => {
      try {
        // 等待 i18n 初始化
        if (!i18nReady) {
          return;
        }

        // 只检测真正必要的资源
        if (document.readyState !== 'complete') {
          await new Promise<void>(resolve => {
            window.addEventListener('load', () => resolve(), { once: true });
          });
        }

        if (document.fonts) {
          await document.fonts.ready;
        }

        // 简短延迟确保稳定
        await new Promise<void>(resolve => setTimeout(() => resolve(), 50));

        console.log('✓ 基础资源加载完成');
        setIsReady(true);
      } catch (error) {
        console.error('资源加载失败:', error);
        setTimeout(() => setIsReady(true), 500);
      }
    };

    checkResources();
  }, [i18nReady]);

  const handleImageSelect = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleStartAnalysis = async () => {
    if (!selectedImage) {
      setToastMessage(t('home.uploadAvatarFirst'));
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
      return;
    }

    try {
      setIsLoading(true);

      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
      audio.volume = 0.6;
      audio.load();

      const result = await analyzeAvatar(selectedImage, profession);

      const newDiagnosis: DiagnosisResult = {
        id: Date.now().toString(),
        date: new Date().toISOString().split('T')[0],
        image: selectedImage,
        type: result.type || "未知",
        fullTitle: result.fullTitle || "未知马",
        quote: result.quote || "神秘的力量让你无法被定义。",
        nickname: nickname.trim() || t('home.defaultNickname'),
        profession: profession.trim() || t('home.defaultProfession')
      };

      audio.play().catch(e => console.log("Audio play failed", e));

      setDiagnosis(newDiagnosis);
      setCurrentView(AppView.RESULT);
      setIsLoading(false);

    } catch (e) {
      console.error("Error processing image", e);
      setIsLoading(false);
      setCurrentView(AppView.HOME);
    }
  };

  const handleUpdateDiagnosis = (newData: DiagnosisResult) => {
    setDiagnosis(newData);
  };

  // 渲染当前视图
  const renderCurrentView = () => {
    switch (currentView) {
      case AppView.AGREEMENT:
        return <AgreementView onAgree={handleAgreementAccept} />;
      case AppView.HOME:
        return (
          <HomeView
            avatar={selectedImage}
            nickname={nickname}
            onNicknameChange={setNickname}
            profession={profession}
            onProfessionChange={setProfession}
            onImageSelect={handleImageSelect}
            onStart={handleStartAnalysis}
            isLoading={isLoading}
          />
        );
      case AppView.RESULT:
        return diagnosis ? (
          <ResultView
            data={diagnosis}
            onUpdateData={handleUpdateDiagnosis}
            onBack={() => {
              setDiagnosis(null);
              setCurrentView(AppView.HOME);
            }}
            onRetry={() => {
              setDiagnosis(null);
              setCurrentView(AppView.HOME);
            }}
          />
        ) : null;
      case AppView.SETTINGS:
        return (
          <SettingsView
            onBack={() => setCurrentView(AppView.HOME)}
          />
        );
      default:
        return null;
    }
  };

  // 资源未加载完成时显示加载动画
  if (!isReady) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-white">
      </div>
    );
  }

  // 启动页完成处理
  const handleSplashComplete = async () => {
    setShowSplash(false);

    // 检查用户是否已同意协议
    if (!hasAgreed) {
      // 如果未同意，显示协议页面
      setCurrentView(AppView.AGREEMENT);
      return;
    }

    // 如果已同意，加载广告配置
    try {
      const config = await getAdConfig();
      console.log('广告配置:', config);

      if (config.enabled) {
        setAdConfig(config);
        setShowAd(true);
      }
    } catch (error) {
      console.error('加载广告配置失败:', error);
      // 失败直接进入主页
    }
  };

  // 用户同意协议处理
  const handleAgreementAccept = async () => {
    // 保存同意状态到localStorage
    localStorage.setItem('userAgreementAccepted', 'true');
    setHasAgreed(true);

    // 加载广告配置
    try {
      const config = await getAdConfig();
      console.log('广告配置:', config);

      if (config.enabled) {
        setAdConfig(config);
        setShowAd(true);
      } else {
        setCurrentView(AppView.HOME);
      }
    } catch (error) {
      console.error('加载广告配置失败:', error);
      // 失败直接进入主页
      setCurrentView(AppView.HOME);
    }
  };

  // 如果启动页还在显示
  if (showSplash) {
    return <SplashView onComplete={handleSplashComplete} />;
  }

  // 如果广告页在显示
  if (showAd && adConfig) {
    return <AdView config={adConfig} onComplete={() => setShowAd(false)} />;
  }

  return (
    <div className="w-full h-full max-w-[480px] mx-auto bg-white shadow-xl relative min-h-screen">
      {renderCurrentView()}
      <Toast show={showToast} message={toastMessage} />
    </div>
  );
};

export default App;