
import '@/styles/animations.css';
import { useState, useEffect } from 'react';
import { TimerProps } from '@/types';
import clsx from 'clsx';
import { useQuizStore } from '@/store/quizStore';

export default function Timer({ duration = 15000, trigger, onComplete }: TimerProps) {

    
    

    const [timer, setTimer] = useState<number>(0);
    const { refreshTimestamp, resetRefreshTimestamp, setQuestionStartTimestamp, questionStartTimestamp } = useQuizStore();


    
    

    useEffect(() => {
        console.log(refreshTimestamp)

        if (!trigger) return;

        const elapsed = refreshTimestamp && questionStartTimestamp ? refreshTimestamp - questionStartTimestamp : 0;
        
        const initialTimer = Math.max(100 - (elapsed / duration) * 100, 0);
        setTimer(initialTimer);

        if (refreshTimestamp) {
            resetRefreshTimestamp();
        } else {
            setQuestionStartTimestamp(Date.now())
        }

        

        const interval = setInterval(() => {
            setTimer((prev) => {
            const next = prev - 1;
                if (next <= 0) {
                    clearInterval(interval);
                    setTimeout(onComplete, 0); // ! stops useEffect on render issue
                    
                    return 0;
                }


                    
                return next;
            });
        }, duration / 100);

        return () => clearInterval(interval);

    }, [trigger, duration, onComplete]);




    return (
        <div className={clsx("h-2 bg-white/20 rounded overflow-hidden mb-2 shadow-lg",
            timer < 44 && 'animate-fast-pulse'
        )}
        >
            <div
                className={clsx("h-full magic-shimmer-timer transition-all duration-100",
                timer < 44 && 'animate-fast-pulse'
                )}
                style={{ width: `${timer}%` }}
            />
        </div>
    );
}