export type TimerProps = {
    duration?: number;
    trigger: boolean;
    onComplete: () => void;
    
    
}

export type QuestionIntermissionProps = {
    setTimerEnded: React.Dispatch<React.SetStateAction<boolean>>;
    nextQuestion: React.Dispatch<React.SetStateAction<number>>;
};