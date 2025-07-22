'use client'

import { topics } from '@/utils/topicList';
import { useState } from 'react';
import TopicsList from '@/components/topics/TopicList';
import { useRouter } from 'next/navigation';
import Popup from '@/components/topics/Popup';
import { useQuizStore } from '@/store/quizStore'



export default function SelectTopicPage() {
    
    const [topic, setTopic] = useState<number | undefined>();
    const [difficulty, setDifficulty] = useState<string | 'mixed'>();
    const [showPopup, setShowPopup] = useState(false);
    

    const router = useRouter();
    const setQuizOptions = useQuizStore((state) => state.setQuizOptions)

    const handleGameSetup = async () => {
        console.log('Starting quiz with:', topic, difficulty)
        setQuizOptions(String(topic), difficulty || 'mixed')
        setTimeout(() => {
            router.push(`/quiz`);
        }, 800)
        

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
                    className="text-2xl font-bold text-[#00ffee] text-center pb-5"
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