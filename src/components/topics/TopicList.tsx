'use client';
import { TopicListProps } from '@/types'



export default function TopicsList({ topics, setTopic, setShowPopup}: TopicListProps) {
    
    return (
        <div>
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-2 rounded-2xl items-center">
            {topics.map((t) => (
                <li
                    key={t.id}
                    tabIndex={0}
                    onClick={() => {
                        setTopic(t.id)
                        setShowPopup(true)
                    }}
                    className="transition cursor-pointer bg-gray-900/30 hover:bg-purple-800 active:bg-purple-900 p-6 rounded-2xl shadow-lg font-semibold text-purple-100 text-lg border-2 border-transparent hover:border-purple-500 focus:border-purple-500 outline-none focus:outline-none text-center"
                >
                {t.name}
                </li>
            ))}
            </ul>
        </div>
        );
    }