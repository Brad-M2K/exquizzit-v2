'use client';

import '@/styles/animations.css';
import clsx from 'clsx';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SelectTopicButton() {

    const [shouldPing, setShouldPing] = useState(false);

    const router = useRouter();
    
    const handleTopicPage = () => {
        try {
            setShouldPing(true);

            setTimeout(() => {
                router.push('./select-topic');
            }, 500)

        } catch (err) {
            console.error(err);
        };
    };

    return (
        <button
            onClick={handleTopicPage}
            className={clsx("text-[#00ffee] hover:bg-purple-900 hover:scale-105 transition rounded-xl px-4 py-2 text-white font-bold shadow-md flex justify-center items-center border border-white/30 lg:border-transparent lg:text-2xl",
                !shouldPing && 'throb-button',
                shouldPing && 'animate-ping'
            )}
        >
            Get Started and Choose a Topic
        </button>
    )

}