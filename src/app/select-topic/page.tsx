'use client'

import { topics } from '@/utils/topicList';
import { useState } from 'react';
import TopicsList from '@/components/topics/TopicList';
import { useRouter } from 'next/navigation';
import Popup from '@/components/topics/Popup';
import { useQuizStore } from '@/store/quizStore';
import '@/styles/animations.css';



export default function SelectTopicPage() {

    const router = useRouter();
    
    const [topic, setTopic] = useState<number | undefined>();
    const [difficulty, setDifficulty] = useState<string | 'mixed'>('mixed');
    const [showPopup, setShowPopup] = useState(false);
    

    
    const { setQuizOptions, setQuestions, setFetched, setLoading } = useQuizStore();

    const handleGameSetup = async () => {
        setQuestions([]);
        setFetched(false);
        setLoading(true);
        setQuizOptions(String(topic), String(difficulty))
        const query = new URLSearchParams({
            category: String(topic),
            difficulty: String(difficulty),
        }).toString();

        setTimeout(() => {
            router.push(`/quiz?${query}`);

        }, 3000) //* 3 second timer before starting quiz load
    }
    
    return (
        <main
            className="flex min-h-screen items-center justify-center p-10"
        >
            {showPopup && (
                <div className="fixed inset-0 bg-transparent backdrop-blur-xs flex justify-center items-center z-50">
                    <Popup
                        topic={topics.find(t => t.id === topic)?.name || ''}
                        difficulty={difficulty}
                        setDifficulty={setDifficulty}
                        onStart={handleGameSetup}
                        setShowPopup={setShowPopup}
                    />
                </div>
            )}
            <div>
                <h1
                    className="md:text-4xl text-2xl font-bold magic-shimmer-text font-bitcount text-center pb-5 lg:text-7xl"
            >
                Pick Your Challenge
            </h1>
            <TopicsList
                topics={topics}
                setTopic={setTopic}
                setShowPopup={setShowPopup}
            />
            </div>
        </main>
    )
}