
import '@/styles/animations.css';
import { useState, useEffect } from 'react';
import { TimerProps } from '@/types';
import clsx from 'clsx';

export default function Timer({duration = 15000, trigger, onComplete}: TimerProps) {
    
    const [timer, setTimer] = useState<number>(0);
    useEffect(() => {

        if (!trigger) return;

        setTimer(100);

        const interval = setInterval(() => {
            setTimer((prev) => {
            if (prev <= 0) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 0); // ! stops useEffect on render issue
                
                return 0;
            }
            return prev - 1;
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