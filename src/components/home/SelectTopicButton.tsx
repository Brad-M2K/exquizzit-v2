'use client';

import { useRouter } from 'next/navigation';

export default function SelectTopicButton() {

    const router = useRouter();
    
    const handleTopicPage = () => {
        try {
            router.push('./select-topic');
        } catch (err) {
            console.error(err);
        };
    };

    return (
        <button
            onClick={handleTopicPage}
            className="bg-purple-800 hover:bg-purple-900 hover:scale-105 transition rounded-md px-4 py-2 text-white font-bold shadow-md"
        >
            Choose a Topic
        </button>
    )

}