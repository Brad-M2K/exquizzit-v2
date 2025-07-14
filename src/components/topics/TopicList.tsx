'use client';
import { TopicListProps } from '@/types'
import styles from './TopicList.module.css'


export default function TopicsList({ topics, setTopic, setShowPopup}: TopicListProps) {
    
        return (
            <ul className={styles.listContainer}>
            <h1 className={styles.header}>pick your challenge</h1>
            {topics.map((t) => (
                <li
                    key={t.id}
                    className={styles.list}
                    onClick={() => {
                        setTopic(t.id)
                        setShowPopup(true)
                    }}
                >
                {t.name}
                </li>
            ))}
            </ul>
        );
    }