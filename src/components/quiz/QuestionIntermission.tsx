import { useState, useEffect } from 'react';
import { QuestionIntermissionProps } from '@/types';
import { useQuizStore } from '@/store/quizStore';
// import { useHydrated } from "@/hooks/useHydrated";



export default function QuestionIntermission({ setTimerEnded }: QuestionIntermissionProps) {
    
    // const hydrated = useHydrated();
    
    const setSelectedAnswer = useQuizStore((state) => state.setSelectedAnswer);
    const setCurrentIndex = useQuizStore((state) => state.setCurrentIndex);
    const currentIndex = useQuizStore((state) => state.gameplay.currentIndex);
    const [shouldSpin, setShouldSpin] = useState(true);
    const [shouldBounce, setShouldBounce] = useState(true);
    const [questionWrong, setQuestionWrong] = useState(false);
    const [shouldPulse, setShouldPulse] = useState(true);
    
    useEffect(() => {
        
        setTimeout(() => {
            setShouldSpin(false)
        }, 1000)
        
        setTimeout(() => {
            setShouldBounce(false)
        }, 4000)
        
        setTimeout(() => {
            setQuestionWrong(true);
        }, 5000)
        
        if (questionWrong) {
            setTimeout(() => {
                setShouldPulse(false)
            }, 2000)
        }
        
        setTimeout(() => {
            setQuestionWrong(false);
        }, 8000)
        
    }, [questionWrong])
    
    // if (!hydrated) return null;

    return (
        <div className='flex flex-col justify-center items-center px-4'>
            {!questionWrong ? (
                <button
                    onClick={() => {
                        setTimerEnded(false);
                        setSelectedAnswer(null);
                        setCurrentIndex(currentIndex + 1)
                    }}
                    className={`bg-purple-900/60 text-white text-sm rounded-2xl hover:text-gray-300 px-6 py-2 font-semibold text-lg shadow transition-colors duration-150 w-auto min-w-[140px] max-w-full lg:text-xl  cursor-pointer ${shouldBounce && 'animate-bounce'} ${shouldSpin && 'animate-spin'}`}
                    
                >
                    <span className='magic-shimmer-text'>
                        Next Question
                    </span>
                </button>
            ) : (
                <button
                    onClick={() => {
                        // setShowEndGame(true);
                    }}
                    className={`bg-red-900/60 text-white text-sm rounded-2xl hover:text-gray-300 px-6 py-2 font-semibold text-lg shadow transition-colors duration-150 w-auto min-w-[140px] max-w-full lg:text-xl cursor-pointer  ${shouldPulse && 'red-throb-button'}`}
                    >
                        <span className={`${shouldPulse && 'animate-fast-pulse'}`}>Unlucky! End Game</span>
                </button>
            )}
        </div>
    )
}