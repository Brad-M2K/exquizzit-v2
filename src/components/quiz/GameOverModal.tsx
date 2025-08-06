import { useRouter } from 'next/navigation';
import { GameOverModalProps } from '@/types/quizGame';
import { useQuizStore } from '@/store/quizStore';
import '@/styles/animations.css';

export default function GameOverModal({setShowGameOver, setTimerEnded}: GameOverModalProps) {

    const router = useRouter();
    const score = useQuizStore((state) => state.gameplay.score);
    const { setFetched } = useQuizStore();



    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm'>
            <div className="bg-gray-900/50 backdrop-blur-2xl border border-gray-400/30 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center gap-6 min-h-80 max-w-sm w-[90%] lg:max-w-lg lg:max-h-lg">
                <div >
                    <div className=' bg-gray-900 border border-gray-700 magic-shimmer-text font-bold text-3xl rounded-lg px-6 py-2 mb-4'>
                        You Scored: {score}
                    </div>
                </div>
                <div className='flex flex-row gap-4'>
                    <button
                        onClick={() => {
                            router.push('./')
                            setShowGameOver(false);
                        }}
                        className="bg-purple-900 rounded-xl items-center lg:px-8 lg:py-2 px-4 py-2 font-bold text-white lg:text-xl shadow cursor-pointer"
                    >
                        Go Home
                    </button>
                    <button
                        onClick={() => {
                            setShowGameOver(false);
                            setFetched(false);
                            setTimerEnded(false);
                        }}
                        className='magic-shimmer-bg lg:px-8 lg:py-2 px-4 py-2 rounded-xl font-bold text-white lg:text-xl cursor-pointer'
                    >
                        Try Again?
                    </button>
                </div>
            </div>
        </div>
    )
}