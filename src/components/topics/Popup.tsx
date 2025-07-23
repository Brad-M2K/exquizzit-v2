import { PopupProps } from '@/types';
import { topics } from '@/utils/topicList';
import DifficultyPicker from './DifficultyPicker';
import '@/styles/animations.css';
import { useState } from 'react';
import clsx from 'clsx';

export default function Popup({ topic, difficulty, setDifficulty, onStart, setShowPopup }: PopupProps) {

    const [shouldBounce, setShouldBounce] = useState(false);
    const [countdown, setCountdown] = useState<number | null>(null);

    // Find the topic object by name
    const selectedTopic = topics.find((t) => t.name === topic);
    const message = selectedTopic?.message;


    const handleLetsGo = () => {
        let seconds = 3;
        setCountdown(seconds);
        setShouldBounce(true);
        onStart();

        const interval = setInterval(() => {
            seconds--;
            if (seconds === 0) {
                clearInterval(interval);
                setCountdown(null)
            } else {
                setCountdown(seconds);
            }
        }, 1000)
    };


    return (
        <div
            className="bg-gray-900/50 backdrop-blur-3xl border border-[rgba(168,85,247,0.15)] rounded-xl shadow-lg p-6 flex flex-col items-center gap-6 min-h-80 max-w-sm w-[90%] lg:max-w-lg lg:max-height-lg"
        >
            <div className="flex flex-col items-center justify-center">
                <h1
                className="font-semibold magic-shimmer-text text-3xl"
                >
                    {selectedTopic?.name}
                </h1>
                <p
                    
                    className="text-lg font-semibold px-3 text-center text-[#00ffee]"
                >
                    {message}
                </p>
            </div>

            <DifficultyPicker
                difficulty={difficulty || 'mixed'}
                setDifficulty={setDifficulty}
            />
            <div
                className="flex justify-between gap-4"
            >
                <button
                onClick={() => setShowPopup(false)}
                className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg shadow font-semibold cursor-pointer"
                >
                    Back
                </button>
                <button
                    onClick={handleLetsGo}
                    disabled={countdown !== null}
                    className={clsx("bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg shadow font-semibold cursor-pointer",
                        shouldBounce && 'animate-bounce'
                    )}
                >
                    {countdown !== null ? countdown : "Let's go!"}
                </button>
            </div>
        </div>
    );
}