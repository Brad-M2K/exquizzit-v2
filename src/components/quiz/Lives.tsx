import { useQuizStore } from '@/store/quizStore';
import { Heart } from 'lucide-react';

export default function Lives() {
    const lives = useQuizStore((state) => state.gameplay.lives);

    // Create array of 3 hearts and conditionally render them
    const renderHearts = () => {
        return Array.from({ length: 3 }, (_, index) => {
            const isAlive = index < lives;
            return (
                <Heart 
                    key={index} 
                    size={24} 
                    className={isAlive ? `text-red-500 fill-red-500 ${lives === 1 && 'animate-pulse'}` : 'text-gray-400 fill-gray-400'}
                />
            );
        });
    };

    return (
        <div className="bg-white/20 border border-gray-500 rounded-xl font-bold text-3xl p-2 mb-2 md:mb-4 flex items-center justify-center gap-2 ">
            {renderHearts()}
        </div>
    )
}
