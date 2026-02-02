import React, { useState, useEffect } from 'react';
import { AppView, DiagnosisResult } from './types';
import { analyzeAvatar } from './services/geminiService';
import { HomeView } from './components/HomeView';
import { ResultView } from './components/ResultView';
import { Toast } from './components/Toast';
import { SplashView } from './components/SplashView';

const App: React.FC = () => {
  // 启动页状态
  const [showSplash, setShowSplash] = useState<boolean>(true);

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

  // 检测关键资源加载完成
  useEffect(() => {
    const checkResources = async () => {
      try {
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
        console.error('资源加载检测失败:', error);
        setTimeout(() => setIsReady(true), 500);
      }
    };

    checkResources();
  }, []);

  const handleImageSelect = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleStartAnalysis = async () => {
    if (!selectedImage) {
      setToastMessage("请先上传头像");
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
        nickname: nickname.trim() || "马吐吐",
        profession: profession.trim() || "自由职业"
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

  // 如果启动页还在显示
  if (showSplash) {
    return <SplashView onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="w-full h-full max-w-[480px] mx-auto bg-white shadow-xl relative min-h-screen">
      {renderCurrentView()}
      <Toast show={showToast} message={toastMessage} />
    </div>
  );
};

export default App;