'use client';
import { useEffect, useState } from 'react';

const Preloader = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    const totalTime = 2000;
    const intervalTime = 20;
    const steps = totalTime / intervalTime;
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(newProgress);
      if (currentStep >= steps) {
        clearInterval(timer);
        setIsLoaded(true);
        setTimeout(() => {
          setAnimationFinished(true);
          setTimeout(() => { finishLoading(); }, 800);
        }, 500);
      }
    }, intervalTime);
    return () => clearInterval(timer);
  }, [finishLoading]);

  return (
    <div className={`fixed inset-0 z-[100] bg-dark flex flex-col items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${animationFinished ? '-translate-y-full opacity-0 pointer-events-none' : 'opacity-100 translate-y-0'}`}>

      <div className={`relative flex items-center justify-center transition-all duration-700 ease-out ${isLoaded ? 'scale-110' : 'scale-100'}`}>
        <div className="absolute inset-0 rounded-full bg-beige/5 blur-3xl scale-150 animate-pulse"></div>
        <div className="relative w-[70vw] h-[70vw] max-w-[320px] max-h-[320px] md:w-96 md:h-96 rounded-full shadow-2xl animate-[spin_3s_linear_infinite] will-change-transform border border-white/5">
          <div className="absolute inset-0 rounded-full overflow-hidden bg-[#111]">
            <div className="absolute inset-0 opacity-80" style={{ background: 'repeating-radial-gradient(#111 0, #111 2px, #1a1a1a 3px, #1a1a1a 4px)' }} />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-50 rounded-full pointer-events-none"></div>
            <div className="absolute inset-0 rounded-full opacity-30 bg-[conic-gradient(from_0deg,transparent_0deg,white_45deg,transparent_90deg,transparent_180deg,white_225deg,transparent_270deg)] mix-blend-overlay"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-[#D8C3A5] rounded-full flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] border-2 border-[#111]">
            <div className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]">
              <svg className="w-full h-full p-1" viewBox="0 0 100 100">
                <defs>
                  <path id="circlePath" d="M 50,50 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" />
                </defs>
                <text style={{ fontSize: '9px', fill: '#050505', fontFamily: 'sans-serif', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                  <textPath xlinkHref="#circlePath" startOffset="0%">
                    • Gennady Litvin • DJ • Producer&nbsp;
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-black rounded-full border border-grey/50 z-20"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 md:bottom-16 flex flex-col items-center">
        <span className="font-header text-beige text-6xl md:text-8xl font-bold tracking-tighter tabular-nums leading-none">{progress}%</span>
        <span className="text-white/40 text-xs uppercase tracking-[0.4em] mt-2 animate-pulse">Loading...</span>
      </div>
    </div>
  );
};

export default Preloader;
