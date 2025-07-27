export type TimerProps = {
    duration?: number;
    onComplete: () => void;
    
    
}

export type QuestionIntermissionProps = {
    setTimerEnded: React.Dispatch<React.SetStateAction<boolean>>;
};

export type AnswerGridProps = {
    timerEnded: boolean;
    answers: string[];
    correctAnswer?: string;
};