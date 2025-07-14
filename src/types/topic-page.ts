export type Topic = {
    id: number;
    name: string;
};

export type TopicListProps = {
    topics: Topic[];
    setTopic: (id: number) => void;
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export type SelectDifficultyProps = {
    difficulty: string | undefined
    setDifficulty: React.Dispatch<React.SetStateAction<string | undefined>>
}

export type PopupProps = {
    topic: string;
    difficulty: string | undefined;
    setDifficulty: (value: string) => void;
    onStart: () => void;
    setShowPopup: (value: boolean) => void;

};