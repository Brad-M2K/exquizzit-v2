import { useState, useEffect } from 'react';
import { QuestionIntermissionProps } from '@/types';
import { useQuizStore } from '@/store/quizStore';



export default function QuestionIntermission({ setTimerEnded }: QuestionIntermissionProps) {
    
    
    const setSelectedAnswer = useQuizStore((state) => state.setSelectedAnswer);
    const setCurrentIndex = useQuizStore((state) => state.setCurrentIndex);
    const currentIndex = useQuizStore((state) => state.gameplay.currentIndex);
    const lives = useQuizStore((state) => state.gameplay.lives);
    const setHasProcessedAnswer = useQuizStore((state) => state.setHasProcessedAnswer);
    const [shouldSpin, setShouldSpin] = useState(true);
    const [shouldBounce, setShouldBounce] = useState(true);
    const [shouldPulse, setShouldPulse] = useState(true);
    const gameOver = lives <= 0;
    
    useEffect(() => {
        
        if (gameOver) {

            setTimeout(() => {
                setShouldPulse(false)
            }, 2000);

        };

        setTimeout(() => {
            setShouldSpin(false)
        }, 1000)
        
        setTimeout(() => {
            setShouldBounce(false)
        }, 4000)
        
        
        

        
    }, [gameOver, lives])
    

    return (
        <div className='flex flex-col justify-center items-center px-4'>
            {gameOver ? (
                <button
                    onClick={() => {
                        // setShowEndGame(true);
                    }}
                    className={`bg-red-900/60 text-white text-sm rounded-2xl hover:text-gray-300 px-6 py-2 font-semibold text-lg shadow transition-colors duration-150 w-auto min-w-[140px] max-w-full lg:text-xl cursor-pointer  ${shouldPulse && 'red-throb-button'}`}
                    >
                        <span className={`${shouldPulse && 'animate-fast-pulse'}`}>Unlucky! End Game</span>
                </button>
            ) : (
                <button
                    onClick={() => {
                        setTimerEnded(false);
                        setSelectedAnswer(null);
                        setHasProcessedAnswer(false); // Reset for next question
                        setCurrentIndex(currentIndex + 1)
                    }}
                    className={`bg-purple-900/60 text-white text-sm rounded-2xl hover:text-gray-300 px-6 py-2 font-semibold text-lg shadow transition-colors duration-150 w-auto min-w-[140px] max-w-full lg:text-xl  cursor-pointer ${shouldBounce && 'animate-bounce'} ${shouldSpin && 'animate-spin'}`}
                    
                >
                    <span className='magic-shimmer-text'>
                        Next Question
                    </span>
                </button>
            )}
        </div>
    )
}