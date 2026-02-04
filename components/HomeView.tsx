import React, { useRef, useState, useEffect } from 'react';
import { Edit3, Loader2 } from 'lucide-react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HomeViewProps {
  avatar: string | null;
  nickname: string;
  onNicknameChange: (name: string) => void;
  profession: string;
  onProfessionChange: (val: string) => void;
  onImageSelect: (file: File) => void;
  onStart: () => void;
  isLoading: boolean;
}

export const HomeView: React.FC<HomeViewProps> = ({
  avatar,
  nickname,
  onNicknameChange,
  profession,
  onProfessionChange,
  onImageSelect,
  onStart,
  isLoading
}) => {
  const { t } = useTranslation();
  // State to manage Action Sheet Menu
  const [showMenu, setShowMenu] = useState(false);

  // State to manage edit mode for nickname
  const [isEditingNickname, setIsEditingNickname] = useState(false);
  const nicknameInputRef = useRef<HTMLInputElement>(null);

  // State to manage edit mode for profession
  const [isEditingProfession, setIsEditingProfession] = useState(false);
  const professionInputRef = useRef<HTMLInputElement>(null);

  // 组件级就绪状态 - 防止样式未加载时显示内容
  const [isComponentReady, setIsComponentReady] = useState(false);

  // 组件级就绪检测
  useEffect(() => {
    // 额外的组件级延迟，确保样式完全就绪
    const timer = setTimeout(() => {
      setIsComponentReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Auto-focus input when entering edit mode (Nickname)
  useEffect(() => {
    if (isEditingNickname && nicknameInputRef.current) {
      nicknameInputRef.current.focus();
    }
  }, [isEditingNickname]);

  // Auto-focus input when entering edit mode (Profession)
  useEffect(() => {
    if (isEditingProfession && professionInputRef.current) {
      professionInputRef.current.focus();
    }
  }, [isEditingProfession]);

  // 自动裁剪图片为正方形（优化版）
  const cropToSquare = async (dataUrl: string): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const size = Math.min(img.width, img.height);
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;

        // 禁用alpha通道加速渲染
        const ctx = canvas.getContext('2d', { alpha: false })!;

        const x = (img.width - size) / 2;
        const y = (img.height - size) / 2;

        ctx.drawImage(img, x, y, size, size, 0, 0, size, size);

        // 使用JPEG格式，质量85，极速处理
        resolve(canvas.toDataURL('image/jpeg', 0.85));
      };
      img.src = dataUrl;
    });
  };

  // 显示自定义选择菜单
  const handleAvatarClick = () => {
    console.log('=== 头像点击事件触发 ===');
    setShowMenu(true);
  };

  // 拍照
  const handleCamera = async () => {
    setShowMenu(false);
    console.log('开始调用相机...');
    try {
      const photo = await Camera.getPhoto({
        quality: 100,
        source: CameraSource.Camera,
        resultType: CameraResultType.DataUrl,
      });

      console.log('拍照完成:', photo);

      if (photo.dataUrl) {
        console.log('开始裁剪照片为正方形...');
        const croppedDataUrl = await cropToSquare(photo.dataUrl);
        console.log('裁剪完成，开始处理照片数据...');
        const response = await fetch(croppedDataUrl);
        const blob = await response.blob();
        const file = new File([blob], 'camera-photo.jpg', { type: 'image/jpeg' });
        console.log('照片处理完成，调用 onImageSelect');
        onImageSelect(file);
      }
    } catch (error) {
      console.error('拍照错误:', error);
    }
  };

  // 从相册选择
  const handleLibrary = async () => {
    setShowMenu(false);
    console.log('开始打开相册...');
    try {
      const photo = await Camera.getPhoto({
        quality: 100,
        source: CameraSource.Photos,
        resultType: CameraResultType.DataUrl,
      });

      console.log('照片选择完成:', photo);

      if (photo.dataUrl) {
        console.log('开始裁剪照片为正方形...');
        const croppedDataUrl = await cropToSquare(photo.dataUrl);
        console.log('裁剪完成，开始处理照片数据...');
        const response = await fetch(croppedDataUrl);
        const blob = await response.blob();
        const file = new File([blob], 'library-photo.jpg', { type: 'image/jpeg' });
        console.log('照片处理完成，调用 onImageSelect');
        onImageSelect(file);
      }
    } catch (error) {
      console.error('相册选择错误:', error);
    }
  };

  const handleNicknameSubmit = () => {
    setIsEditingNickname(false);
  };

  const handleProfessionSubmit = () => {
    setIsEditingProfession(false);
  };

  return (
    <div
      className={`flex flex-col h-screen overflow-hidden bg-white relative transition-opacity duration-300 ${isComponentReady ? 'opacity-100' : 'opacity-0'}`}
    >

      {/* Brand Header - Fixed height */}
      <div className="pt-[58px] pb-2 w-full flex justify-between items-center px-4 z-20 shrink-0">
        <h1 className="text-[20px] text-gray-400 font-light tracking-tight flex-1 text-center">
          {t('app.name')}
        </h1>
        <div className="absolute right-4">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Main Content Area - Fixed layout with robust height - 使用固定的 minHeight 而不是 calc()，避免 Tailwind 未加载时计算失败 */}
      <div className="flex-1 flex flex-col px-8 relative pb-2" style={{ minHeight: '600px', maxHeight: '100vh' }}>

        {/* Form Area: Nickname & Profession */}
        <div className="w-full flex flex-col items-start mt-4 pl-1 relative z-10 shrink-0">

          {/* Row 1: Nickname */}
          <div className="flex flex-row items-center gap-3 mb-[18px]" style={{ height: '32px', paddingLeft: '5px' }}>
            <span className="text-[14px] font-light text-gray-400">{t('home.nickname')}</span>

            <div className="flex items-center relative h-full">
              {isEditingNickname ? (
                <div className="relative flex items-center h-full">
                  <input
                    ref={nicknameInputRef}
                    type="text"
                    value={nickname}
                    onChange={(e) => onNicknameChange(e.target.value)}
                    onBlur={handleNicknameSubmit}
                    onKeyDown={(e) => e.key === 'Enter' && handleNicknameSubmit()}
                    placeholder={t('home.nicknamePlaceholder')}
                    className="text-[14px] font-light text-[#1C1C1E] placeholder:text-gray-300 bg-transparent outline-none w-[120px] p-0 border-none focus:ring-0 truncate font-sans tracking-tight"
                    style={{ letterSpacing: '-0.03em' }}
                  />
                </div>
              ) : (
                <div
                  onClick={() => setIsEditingNickname(true)}
                  className="flex items-center cursor-pointer h-full group py-1"
                >
                  <span className="text-[14px] font-light truncate max-w-[120px] text-[#1C1C1E] tracking-tight" style={{ letterSpacing: '-0.03em' }}>
                    {nickname}
                  </span>
                  <Edit3
                    className={`w-4 h-4 text-gray-300 ${nickname ? 'ml-2' : ''} group-hover:text-gray-400 transition-colors`}
                    strokeWidth={2}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Row 2: Profession */}
          <div className="flex flex-row items-center gap-3 mb-2" style={{ height: '32px', paddingLeft: '5px' }}>
            <span className="text-[14px] font-light text-gray-400">{t('home.profession')}</span>

            <div className="flex items-center relative h-full">
              {isEditingProfession ? (
                <div className="relative flex items-center h-full">
                  <input
                    ref={professionInputRef}
                    type="text"
                    value={profession}
                    onChange={(e) => onProfessionChange(e.target.value)}
                    onBlur={handleProfessionSubmit}
                    onKeyDown={(e) => e.key === 'Enter' && handleProfessionSubmit()}
                    placeholder={t('home.professionPlaceholder')}
                    className="text-[14px] font-light text-[#1C1C1E] placeholder:text-gray-300 bg-transparent outline-none w-[120px] p-0 border-none focus:ring-0 truncate font-sans tracking-tight"
                    style={{ letterSpacing: '-0.03em' }}
                  />
                </div>
              ) : (
                <div
                  onClick={() => setIsEditingProfession(true)}
                  className="flex items-center cursor-pointer h-full group py-1"
                >
                  <span className="text-[14px] font-light truncate max-w-[120px] text-[#1C1C1E] tracking-tight" style={{ letterSpacing: '-0.03em' }}>
                    {profession}
                  </span>
                  <Edit3
                    className={`w-4 h-4 text-gray-300 ${profession ? 'ml-2' : ''} group-hover:text-gray-400 transition-colors`}
                    strokeWidth={2}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Centered Avatar - 使用固定尺寸避免依赖动态计算 */}
        <div className="flex-grow flex flex-col items-center justify-center" style={{ minHeight: '300px', paddingBottom: '32px' }}>
          {/* Middle Content Wrapper - 使用absolute定位居中 */}
          <div className="absolute top-1/2 left-0 right-0 flex flex-col items-center" style={{ transform: 'translateY(calc(-50% - 70px))' }}>
            {/* Fixed 250px Container - 固定尺寸确保布局稳定并与结果页一致 */}
            <div className="relative flex items-center justify-center" style={{ width: '260px', height: '260px' }}>
              <div
                className="relative cursor-pointer group"
                style={{ width: '100%', height: '100%' }}
                onClick={handleAvatarClick}
              >
                {/* 统一的圆形容器 - 始终有边框和阴影，保持尺寸一致 */}
                <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden border-[8px] border-gray-50 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 ease-out">
                  {avatar ? (
                    <img
                      src={avatar}
                      alt="User Avatar"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out transform scale-100 group-hover:scale-105 animate-breathe"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center transition-all duration-500 ease-out">
                      <svg
                        viewBox="0 0 986.65 995.37"
                        className="w-full h-full transition-transform duration-500 ease-out transform scale-100 group-hover:scale-105 animate-breathe"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <style>{`
                            .cls-1 { fill: #fff; }
                            .cls-2 { fill: #0f52ba; }
                          `}</style>
                        </defs>
                        <path className="cls-1" d="M986.65,501.81c0,121.8-44.1,233.27-117.19,319.36-90.48,106.57-225.42,174.2-376.12,174.2-73.03,0-142.35-15.87-204.7-44.36C118.35,873.2,0,701.34,0,501.81,0,229.24,220.89,8.28,493.33,8.28s493.31,220.96,493.31,493.53Z" />
                        <path className="cls-2" d="M985.72,497.86c0,122.87-44.04,235.32-117.04,322.16-15.66-44.28-45.25-76.73-84.76-100.4-24.88-14.89-52.32-22.53-80.7-27.02-31.02-4.9-62.37-6.56-93.51-10.17-25.55-2.96-50.75-7.58-74.03-19.44-34.94-17.79-56.32-45.99-61.18-85.72-4.47-36.62,1.66-71.77,17.76-105,2.4-4.96,5.68-9.35,9.28-13.44,2.63-3,2.59-5.39,.2-8.56-9.36-12.4-14.33-26.31-13.32-42.13,.16-2.55,.57-5.11,1.01-8.88,8.81,32.62,27.16,55.29,57.58,67.03,12.59,4.86,25.79,7.13,39.15,6.88,28.42-.53,53.4,10.01,77.4,23.83,7.26,4.19,12.61,10.5,14.87,18.81,2.53,9.37,8.49,14.26,17.54,16.28,10.33,2.31,20.25,6.41,31.06,6.6,9.01,.16,16.45-3.29,22.7-9.56,2.93-2.92,5.86-5.62,9.94-6.74,2.73-.74,4.93-2.51,6.2-5,8-15.77,14.77-31.94,15-50.18,.1-7.33-2.38-13.56-7.46-18.5-33.57-32.72-59.07-71.69-83.81-111.29-2.08-3.31-3.27-6.54-2.1-10.62,.99-3.43,1.23-7.07,1.25-10.7,0-4.82-1.68-8.68-5.13-11.85-18.31-16.85-34.76-35.45-50.61-54.67-3.46-4.21-7.23-8.15-11.14-11.93-2.47-2.39-2.91-4.36-1.27-7.58,9.05-17.83,14.92-37.12,17.02-59.25,.01-.15,.06-.54,.1-1.02,0,0,.75-8.64-.73-10.19-2.41-2.51-10.93,2.15-12.08,2.79-25.87,14.39-54.34,53.51-54.34,53.51,0,0,7.62-60.37,4.79-75.04-1.54-7.94-4.4-9.65-10.49-4.7-19.08,15.52-37.65,34.55-53.9,59.41-1.7,2.61-2.83,4.6-6.37,4.76-39.81,1.9-76.58,14.83-111.94,32.6-11.96,6.02-23.3,13.13-34.07,21.18-1.29,.96-3.09,1.51-3.72,4.57,23.46-5.64,46.7-9.93,70.51-9.35-65.22,29.33-121.18,71.4-168.65,125.24-23.28,26.43-58.89,87.11-58.89,87.11,0,0,56.69-39.87,89.69-55.12-7.26,8.88-14.57,17.71-21.75,26.65-33.22,41.42-62.17,85.51-81.34,135.67-5.31,13.93-10,28.06-12.91,42.75-.44,2.27,47.84-52.39,78.15-76.04,.36,.27-4.85,10.82-7.86,15.81-22.72,37.54-42.91,76.28-54.26,119.17-4.49,16.95-8.08,55.96-6.16,56.39,2.1,.51,32.84-63.03,53.33-89.41,1.03-1.31,2.18-2.55,3.21-3.76-17.89,111.78-29.6,228.17,50.69,317.2-13.45-5.67-26.57-12.01-39.33-18.97-14.33-7.82-28.21-16.44-41.58-25.78C81.81,818.25,.38,665.48,.38,497.86,.38,222.9,220.98,0,493.06,0s492.66,222.9,492.66,497.86Z" />
                      </svg>
                    </div>
                  )}
                </div>

                {!avatar && (
                  <div className="absolute bottom-[45px] left-0 right-0 flex justify-center opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <span className="text-sm font-light text-gray-400">{t('home.uploadHint')}</span>
                  </div>
                )}

                {avatar && <div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center" />}

                {avatar && (
                  <div
                    className="absolute bottom-2 right-2 w-9 h-9 bg-[#F2F2F7] text-gray-500 rounded-full shadow-sm flex items-center justify-center ring-4 ring-white z-20"
                  >
                    <Edit3 className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Start Button Section - Fixed at bottom of flex area */}
          <div className="w-full flex flex-col items-center shrink-0 mt-[376px]">
            <button
              onClick={onStart}
              disabled={!avatar || isLoading}
              className={`
                        w-full max-w-[260px] h-[56px] rounded-full flex items-center justify-center text-[18px] font-medium tracking-wide transition-all duration-300
                        ${avatar && !isLoading
                  ? 'bg-gray-100 text-[#1C1C1E] hover:bg-gray-200 active:scale-[0.98] shadow-sm'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none'
                }
                    `}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{t('home.generating')}</span>
                </div>
              ) : (
                t('home.startButton')
              )}
            </button>

            <p className="mt-4 text-[14px] text-gray-400 font-light tracking-wide">
              {t('home.bottomHint')}
            </p>
          </div>

        </div>
      </div>

      {/* Action Sheet Menu (iOS Style) */}
      {showMenu && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px] animate-in fade-in duration-200"
            onClick={() => setShowMenu(false)}
          />
          <div className="relative z-10 w-full max-w-[480px] bg-[#F2F2F7] rounded-t-2xl p-4 space-y-2 animate-in slide-in-from-bottom duration-300">
            <div className="bg-white/90 backdrop-blur-xl rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={handleCamera}
                className="w-full h-[56px] flex items-center justify-center text-[14px] font-light text-black active:bg-gray-100 transition-colors border-b border-gray-100/50"
              >
                {t('home.camera')}
              </button>
              <button
                onClick={handleLibrary}
                className="w-full h-[56px] flex items-center justify-center text-[14px] font-light text-black active:bg-gray-100 transition-colors"
              >
                {t('home.chooseFromLibrary')}
              </button>
            </div>
            <button
              onClick={() => setShowMenu(false)}
              className="w-full h-[56px] bg-white rounded-xl flex items-center justify-center text-[14px] font-normal text-black shadow-sm active:bg-gray-100 transition-colors"
            >
              {t('home.cancel')}
            </button>
          </div>
        </div>
      )}

    </div>
  );
};