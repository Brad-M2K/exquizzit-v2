'use client';

import '@/styles/animations.css';

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
            className="text-[#00ffee] hover:bg-purple-900 hover:scale-105 transition rounded-xl px-4 py-2 text-white font-bold shadow-md flex justify-center items-center throb-button border border-white/30 lg:border-transparent"
        >
            Get Started and Choose a Topic
        </button>
    )

}