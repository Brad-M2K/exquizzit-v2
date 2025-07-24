import {QuestionIntermissionProps} from '@/types';

export default function QuestionIntermission({ nextQuestion, setTimerEnded }: QuestionIntermissionProps) {
    

    return (
        <div className='flex flex-col justify-center items center px-50'>
            <button
                onClick={() => {
                    setTimerEnded(false);
                    nextQuestion((prev: number) => prev + 1)

                }}
                className='bg-gray-300/70 text-purple-700 rounded-md items-center hover:bg-gray-400'
            >
                Next Question
            </button>
        </div>
    )
}