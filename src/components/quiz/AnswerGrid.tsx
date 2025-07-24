import { AnswerGridProps } from '@/types';
import '@/styles/animations.css';
import { useQuizStore } from '@/store/quizStore';

export default function AnswerGrid({ answers, timerEnded }: AnswerGridProps) {

        const selectedAnswer = useQuizStore((state) => state.gameplay.selectedAnswer);
        const setSelectedAnswer = useQuizStore((state) => state.setSelectedAnswer);

    
    const colourClasses = [
        `bg-red-600/40 ${!timerEnded && 'hover:bg-red-700/40'}`,
        `bg-blue-600/40 ${!timerEnded && 'hover:bg-blue-700/40'}`,
        `bg-yellow-600/40 ${!timerEnded && 'hover:bg-yellow-700/40'}`,
        `bg-green-600/40 ${!timerEnded && 'hover:bg-green-700/40'}`,
    ];
    

    return (
        <div className="grid grid-cols-2 gap-4 mt-18">
            {answers.map((answer: string, idx: number) => (
                <button
                    key={idx}
                    onClick={() => setSelectedAnswer(answer)}
                    disabled={timerEnded}
                    className={`min-h-20 lg:min-h-30 lg:min-w-20 px-3 py-1 shadow-lg rounded-xl lg:rounded-2xl text-center flex items-center justify-center text-gray-200 font-bold text-sm lg:text-xl cursor-pointer ${!timerEnded && selectedAnswer !== answer ? 'hover:scale-105 ' : ''}  ${colourClasses[idx]} ${selectedAnswer === answer ? 'ring-3 ring-[#00ffff]/80 selected-throb-button'  : ''}`}
                >
                    {answer}
                </button>
            ))}
        </div>
    )
}
