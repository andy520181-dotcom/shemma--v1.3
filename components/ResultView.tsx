import React, { useState, useRef } from 'react';
import { DiagnosisResult } from '../types';
import { ChevronLeft } from 'lucide-react';
import { ResultCard } from './ResultCard';
import { Toast } from './Toast';
import html2canvas from 'html2canvas';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';
import { Media } from '@capacitor-community/media';

interface ResultViewProps {
  data: DiagnosisResult;
  onUpdateData: (newData: DiagnosisResult) => void;
  onBack: () => void;
  onRetry: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({
  data, onUpdateData, onBack, onRetry
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const captureRef = useRef<HTMLDivElement>(null);

  // Generic handler for menu actions (closes menu first)
  const handleAction = (action: () => void) => {
    setShowMenu(false);
    setTimeout(action, 150);
  };



  const handleSaveImage = async () => {
    setShowMenu(false);

    setTimeout(async () => {
      if (!captureRef.current) return;

      try {
        // 生成截图
        const canvas = await html2canvas(captureRef.current, {
          useCORS: true,
          scale: 2,
          backgroundColor: '#ffffff',
          logging: false,
        });

        // 转换为 base64
        const base64Data = canvas.toDataURL('image/png').split(',')[1];

        if (Capacitor.isNativePlatform()) {
          // 在原生平台（iOS/Android）上保存到相册
          try {
            // 直接从 canvas 获取完整的 data URL
            const dataUrl = canvas.toDataURL('image/png');

            console.log('开始保存到相册...');

            // 使用 Media.savePhoto 直接从 base64 保存
            await Media.savePhoto({
              path: dataUrl
            });

            console.log('图片已成功保存到相册');

            // 成功后才显示Toast
            setToastMessage('图片已保存到相册');
            setShowToast(true);
            setTimeout(() => setShowToast(false), 2000);
          } catch (error) {
            console.error('保存失败，详细错误:', error);
            setToastMessage('保存失败，请检查相册权限');
            setShowToast(true);
            setTimeout(() => setShowToast(false), 2000);
          }
        } else {
          // 在 Web 浏览器上下载
          const link = document.createElement('a');
          link.download = `SHEMMA_Result_${Date.now()}.png`;
          link.href = canvas.toDataURL('image/png');
          link.click();

          setToastMessage('图片已下载');
          setShowToast(true);
          setTimeout(() => setShowToast(false), 2000);
        }
      } catch (error) {
        console.error('截图失败:', error);
        setToastMessage('生成图片失败');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
      }
    }, 100);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#F2F2F7] text-black relative">
      {/* Header with extra top padding for notch */}
      <header className="shrink-0 z-30 bg-[#F2F2F7]/80 backdrop-blur-md px-4 pt-12 pb-3 flex items-center justify-between">

        <button
          onClick={onBack}
          className="text-ios-blue flex items-center gap-1 active:opacity-50 transition-opacity relative z-10"
        >
          <ChevronLeft className="w-7 h-7 -ml-2" strokeWidth={1.5} />
          <span className="text-lg font-light">返回</span>
        </button>

        <div className="w-10"></div>
      </header>

      {/* Main Content - Flex Fill */}
      <main className="flex-1 flex flex-col items-center w-full px-6 pb-6 min-h-0">

        {/* Result Card Wrapper - Flex 1 to take available space */}
        <div className="w-full max-w-[360px] flex-1 min-h-0 relative mb-4 flex flex-col">
          <ResultCard
            data={data}
            onUpdateData={onUpdateData}
            onShareClick={() => setShowMenu(true)}
            className="h-full" // Ensure card takes full height of the wrapper
          />
        </div>

      </main>


      {/* Action Sheet Menu */}
      {showMenu && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px] animate-in fade-in duration-200"
            onClick={() => setShowMenu(false)}
          />
          <div className="relative z-10 w-full max-w-[480px] bg-[#F2F2F7] rounded-t-2xl p-4 space-y-2 animate-in slide-in-from-bottom duration-300">
            <div className="bg-white/90 backdrop-blur-xl rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={handleSaveImage}
                className="w-full h-[56px] flex items-center justify-center text-[14px] font-light text-black active:bg-gray-100 transition-colors border-b border-gray-100/50"
              >
                保存图片
              </button>
              <button
                onClick={() => handleAction(onRetry)}
                className="w-full h-[56px] flex items-center justify-center text-[14px] font-light text-black active:bg-gray-100 transition-colors"
              >
                重新测试
              </button>
            </div>
            <button
              onClick={() => setShowMenu(false)}
              className="w-full h-[56px] bg-white rounded-xl flex items-center justify-center text-[14px] font-normal text-black shadow-sm active:bg-gray-100 transition-colors"
            >
              取消
            </button>
          </div>
        </div>
      )}



      <div style={{ position: 'fixed', left: '-9999px', top: 0, zIndex: -1 }}>
        <div
          ref={captureRef}
          style={{
            width: '1080px',
            height: '1920px',
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '60px',
            paddingLeft: '60px',
            paddingRight: '60px',
            paddingBottom: '60px'
          }}
        >
          {/* 直接渲染缩放的ResultCard */}
          <div style={{
            width: '360px',
            height: '675px',
            transform: 'scale(2.667)',
            transformOrigin: 'center'
          }}>
            <ResultCard
              data={data}
              readOnly={true}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      <Toast show={showToast} message={toastMessage} />

    </div>
  );
};
