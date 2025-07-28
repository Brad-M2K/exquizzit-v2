
import '@/styles/animations.css';
import { useState, useEffect } from 'react';
import { TimerProps } from '@/types';
import clsx from 'clsx';
import { useQuizStore } from '@/store/quizStore';

export default function Timer({ duration = 17000, onComplete }: TimerProps) {
    const [timer, setTimer] = useState<number>(0);
    const { resetRefreshTimestamp, setQuestionStartTimestamp } = useQuizStore();
    const questionStartTimestamp = useQuizStore((state) => state.gameplay.questionStartTimestamp)
    const refreshTimestamp = useQuizStore((state) => state.status.refreshTimestamp)
    
    // Vercel debugging
    const isProduction = process.env.NODE_ENV === 'production';
    const debugLog = (message: string, data?: any) => {
        if (isProduction) {
            console.log(`[VERCEL-DEBUG] Timer: ${message}`, data);
        }
    };
    
    
    
    
    
    useEffect(() => {
        debugLog('Timer useEffect triggered', {
            refreshTimestamp,
            questionStartTimestamp,
            duration,
            componentMountTime: Date.now()
        });
        
        const elapsed = refreshTimestamp && questionStartTimestamp ? refreshTimestamp - questionStartTimestamp : 0;
        debugLog('Calculated elapsed time', { elapsed, refreshTimestamp, questionStartTimestamp });
        
        const initialTimer = Math.max(100 - (elapsed / duration) * 100, 0);
        debugLog('Setting initial timer', { initialTimer, calculatedFromElapsed: elapsed });
        setTimer(initialTimer);
        
        if (refreshTimestamp) {
            debugLog('Found refresh timestamp, resetting it', { refreshTimestamp });
            resetRefreshTimestamp();
        } else {
            const now = Date.now();
            debugLog('No refresh timestamp, setting question start', { now });
            setQuestionStartTimestamp(now);
        }
        
        
        
        const interval = setInterval(() => {
            setTimer((prev) => {
                const next = prev - 1;
                if (next <= 0) {
                    clearInterval(interval);
                    setTimeout(onComplete, 0); 
                    
                    return 0;
                }
                
                
                
                return next;
            });
        }, duration / 100);
        
        return () => clearInterval(interval);
        
    }, [duration, onComplete]);
    



    return (
        <div className={clsx("h-2 bg-white/20 rounded overflow-hidden mb-8 shadow-lg",
            timer < 33 && timer > 0 && 'animate-fast-pulse'
        )}
        >
            <div
                className={clsx("h-full magic-shimmer-timer transition-all duration-100",
                timer < 33 && timer > 0 && 'animate-fast-pulse'
                )}
                style={{ width: `${timer}%` }}
            />
        </div>
    );
}