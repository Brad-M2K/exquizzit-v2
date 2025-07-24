export type TimerProps = {
    duration?: number;
    trigger: boolean;
    onComplete: () => void;
    
    
}

export type QuestionIntermissionProps = {
    setTimerEnded: React.Dispatch<React.SetStateAction<boolean>>;
    nextQuestion: React.Dispatch<React.SetStateAction<number>>;
};

export type AnswerGridProps = {
    answers: string[];
    setAnswer: React.Dispatch<React.SetStateAction<string | null | undefined>>;
    userChoice: string | null | undefined;
};