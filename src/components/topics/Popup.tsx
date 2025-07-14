import { PopupProps } from '@/types';
import styles from './Popup.module.css';
import { topics } from '@/utils/topicList';
import DifficultyPicker from './DifficultyPicker';

export default function Popup({ topic, difficulty, setDifficulty, onStart, setShowPopup }: PopupProps) {
    // Find the topic object by name
    const selectedTopic = topics.find((t) => t.name === topic);
    const message = selectedTopic?.message;

    return (
        <div className={styles.popup}>
            <DifficultyPicker difficulty={difficulty || 'mixed'} setDifficulty={setDifficulty} />
            <p className={styles.message}>{message}</p>
            <button className={styles.back} onClick={()=> setShowPopup(false)}>
                ⬅︎
            </button>
            <button className={styles.startButton} onClick={onStart}>
                let&#39;s go!
            </button>
        </div>
    );
}