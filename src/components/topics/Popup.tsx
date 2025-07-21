import { PopupProps } from '@/types';
import { topics } from '@/utils/topicList';
import DifficultyPicker from './DifficultyPicker';
import '@/styles/animations.css';

export default function Popup({ topic, difficulty, setDifficulty, onStart, setShowPopup }: PopupProps) {
    // Find the topic object by name
    const selectedTopic = topics.find((t) => t.name === topic);
    const message = selectedTopic?.message;

    return (
        <div
            className="backdrop-blur-3xl border border-[rgba(168,85,247,0.15)] rounded-xl shadow-lg p-6 flex flex-col items-center gap-6 min-h-80 max-w-sm w-[90%]"
        >
            <h1
                className="font-semibold text-[#00ffee] text-xl "
            >
                {selectedTopic?.name}
            </h1>
            <p
                
                className="text-xl font-semibold px-3 text-center magic-shimmer-text"
            >
                {message}
            </p>
            <DifficultyPicker
                difficulty={difficulty || 'mixed'}
                setDifficulty={setDifficulty}
            />
            <div
                className="flex justify-between gap-4"
            >
                <button
                onClick={() => setShowPopup(false)}
                className="bg-fuchsia-900 hover:bg-fuchsia-800 text-white px-4 py-2 rounded-lg shadow font-semibold cursor-pointer"
                >
                    Back
                </button>
                <button
                    onClick={onStart}
                    className="bg-fuchsia-900 hover:bg-fuchsia-800 text-white px-4 py-2 rounded-lg shadow font-semibold cursor-pointer"
                >
                    confirm and let&#39;s go!
                </button>
            </div>
        </div>
    );
}