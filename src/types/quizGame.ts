export type TimerProps = {
    duration?: number;
    trigger: boolean;
    onComplete: () => void;
    
    
}

export type QuestionIntermissionProps = {
    setTimerEnded: React.Dispatch<React.SetStateAction<boolean>>;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};

export type AnswerGridProps = {
    timerEnded: boolean;
    answers: string[];
    correctAnswer?: string;
};