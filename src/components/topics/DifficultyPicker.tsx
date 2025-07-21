import clsx from 'clsx';
import { useState } from 'react';

export type DifficultyPickerProps = {
    difficulty: string;
    setDifficulty: (value: string) => void;
};

export default function DifficultyPicker({ difficulty, setDifficulty }: DifficultyPickerProps) {
    const difficulties = ['mixed', 'easy', 'medium', 'hard'];
    const [selected, setSelected] = useState(difficulty || 'mixed');

    return (
        <div className="flex items-center justify-items-center rounded-xl p-1.5 bg-gray-300 shadow">
        {difficulties.map((diff) => (
            <button
                key={diff}
                onClick={() => {
                    setDifficulty(diff);
                    setSelected(diff);
                }}
                    className={clsx(
                        'px-4 py-2 font-semibold text-sm cursor-pointer transparent',
                        selected === diff
                            ? 'bg-fuchsia-900 text-white rounded-lg shadow'
                            : 'bg-transparent text-purple-800 hover:bg-fuchsia-800 hover:rounded-lg hover:text-white'
                )}
            >
            {diff}
            </button>
        ))}
        </div>
    );
}
