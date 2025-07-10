import { topics } from '@/utils/topicList';
import { useState } from 'react';

export default function SelectTopicPage() {
    
    const [topic, setTopic] = useState<number | undefined>();
    
    return (
        <main>
            <h1>Select a topic</h1>
            {topics.map((t) => (
                <li key={t.id} onClick={()=> setTopic(t.id)}>{t.name}</li>
            )
            )}
        </main>
    )
}