import styles from './Popup.module.css';
import { useState } from 'react';

export type DifficultyPickerProps = {
    difficulty: string;
    setDifficulty: (value: string) => void;
};

export default function DifficultyPicker({ difficulty, setDifficulty }: DifficultyPickerProps) {
    const difficulties = ['mixed', 'easy', 'medium', 'hard'];
    const [selected, setSelected] = useState(difficulty || 'mixed');

    return (
        <div className={styles.difficultyButtons}>
        {difficulties.map((diff) => (
            <button
            className={`${styles.difficultyButton} ${selected === diff ? styles.active : ''}`}
            key={diff}
            onClick={() => {
                setDifficulty(diff);
                setSelected(diff);
            }}
            >
            {diff}
            </button>
        ))}
        </div>
    );
}
