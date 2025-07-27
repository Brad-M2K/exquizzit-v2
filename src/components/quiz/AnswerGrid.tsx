import { AnswerGridProps } from '@/types';
import '@/styles/animations.css';
import { useQuizStore } from '@/store/quizStore';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { useHydrated } from "@/hooks/useHydrated";

export default function AnswerGrid({ answers, timerEnded, correctAnswer }: AnswerGridProps) {

        const hydrated = useHydrated();
        
        const selectedAnswer = useQuizStore((state) => state.gameplay.selectedAnswer);
        const setSelectedAnswer = useQuizStore((state) => state.setSelectedAnswer);
        const incrementScore = useQuizStore((state) => state.incrementScore);
        const decrementLives = useQuizStore((state) => state.decrementLives);
        const score = useQuizStore((state) => state.gameplay.score);
        
        
        
        useEffect(() => {
            if (timerEnded) {
                
                console.log(score)
                
                if (selectedAnswer === correctAnswer) {
                    incrementScore();
                    toast.success('Correct!')
                    console.log(score)
                }
                
                if (selectedAnswer !== correctAnswer && selectedAnswer !== null) {
                    decrementLives();
                    toast('Wrong answer!')
                }
            }
            
            if (timerEnded && selectedAnswer === null) {
                toast.error('Time ran out! No answer selected')
            }
            
        }, [timerEnded]);
        
        
        const colourClasses = [
            `bg-red-600/40 ${!timerEnded && 'hover:bg-red-700/40'}`,
            `bg-blue-600/40 ${!timerEnded && 'hover:bg-blue-700/40'}`,
            `bg-yellow-600/40 ${!timerEnded && 'hover:bg-yellow-700/40'}`,
            `bg-green-600/40 ${!timerEnded && 'hover:bg-green-700/40'}`,
        ];
        
        if (!hydrated) return null;

    return (
        <div className="grid grid-cols-2 gap-4 mt-18">
            {answers.map((answer: string, idx: number) => (
                <button
                    key={idx}
                    onClick={() => setSelectedAnswer(answer)}
                    disabled={timerEnded}
                    className={`min-h-20 lg:min-h-30 lg:min-w-20 px-3 py-1 shadow-lg rounded-2xl lg:rounded-2xl text-center flex items-center justify-center text-gray-200 font-bold text-sm lg:text-xl cursor-pointer ${!timerEnded && selectedAnswer !== answer ? 'hover:scale-105 ' : ''}  ${colourClasses[idx]} ${selectedAnswer === answer && !timerEnded ? 'ring-3 ring-[#00ffff]/80 selected-throb-button'  : ''} ${timerEnded && selectedAnswer === answer && selectedAnswer !== correctAnswer  ? 'ring-3 ring-red-500' : ''} ${timerEnded && answer === correctAnswer ? 'ring-3 ring-green-500' : ''} ${selectedAnswer === answer && 'scale-105'} ${timerEnded && selectedAnswer === null && answer !== correctAnswer ? 'ring-3 ring-red-500 opacity-50' : ''} ${timerEnded && selectedAnswer !== answer ? 'opacity-50' : ''}`}
                >
                    {answer}
                </button>
            ))}
        </div>
    )
}
