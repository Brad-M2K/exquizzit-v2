'use client'

import { topics } from '@/utils/topicList';
import { useState } from 'react';
import TopicsList from '@/components/topics/TopicList';
import { useRouter } from 'next/navigation';
import Popup from '@/components/topics/Popup';
import styles from '@/components/topics/Popup.module.css'



export default function SelectTopicPage() {
    
    const [topic, setTopic] = useState<number | undefined>();
    const [difficulty, setDifficulty] = useState<string | 'mixed'>();
    const [showPopup, setShowPopup] = useState(false);

    const router = useRouter();


    const handleStartQuiz = async () => {
        const query = `?category=${topic}&difficulty=${difficulty}`;
        router.push(`/quiz${query}`);
    }
    
    return (
        <main>
            {showPopup && (
                <div className={styles.popupOverlay}>
                    <Popup
                        topic={topics.find(t => t.id === topic)?.name || ''}
                        difficulty={difficulty}
                        setDifficulty={setDifficulty}
                        onStart={handleStartQuiz}
                        setShowPopup={setShowPopup}
                    />
                </div>
            )}
            <TopicsList
                topics={topics}
                setTopic={setTopic}
                setShowPopup={setShowPopup}
            />
        </main>
    )
}