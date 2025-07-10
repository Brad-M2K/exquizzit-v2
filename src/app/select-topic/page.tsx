'use client'

import { topics } from '@/utils/topicList';
import { useState } from 'react';

export default function SelectTopicPage() {
    
    const [topic, setTopic] = useState<number | undefined>();
    const [questions, setQuestions] = useState < QuestionType[] || null > (null);

    const fetchQuestions = async (topicId: number) => {
        const res = await fetch(`/api/questions?category=${topicId}`);
        const data = await res.json();
        console.log(data);
    }
    
    return (
        <main>
            <h1>Select a topic</h1>
            {topics.map((t) => (
                <li key={t.id} onClick={() => {
                    setTopic(t.id);
                    fetchQuestions(t.id);
                }}>{t.name}</li>
            )
            )}
        </main>
    )
}