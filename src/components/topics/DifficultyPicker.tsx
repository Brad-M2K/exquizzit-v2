import clsx from 'clsx';
import { useState } from 'react';
import '@/styles/animations.css'

export type DifficultyPickerProps = {
    difficulty: string;
    setDifficulty: (value: string) => void;
};

export default function DifficultyPicker({ difficulty, setDifficulty }: DifficultyPickerProps) {
    const difficulties = ['mixed', 'easy', 'medium', 'hard'];
    const [selected, setSelected] = useState(difficulty || 'mixed');

    return (
        <div className="flex items-center justify-items-center rounded-xl p-1 bg-gray-300 shadow lg:min-w-90  lg:text-xl">
        {difficulties.map((diff) => (
            <button
                key={diff}
                onClick={() => {
                    setDifficulty(diff);
                    setSelected(diff);
                }}
                    className={clsx(
                        'px-4 py-2 font-semibold text-sm cursor-pointer transparent lg:text-xl',
                        selected === diff
                            ? 'magic-shimmer-bg text-white rounded-lg shadow font-bitcount font-bold'
                            : 'bg-transparent text-purple-700 hover:bg-gray-400/30 hover:rounded-lg'
                )}
            >
            {diff}
            </button>
        ))}
        </div>
    );
}
