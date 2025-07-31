export type TimerProps = {
    duration?: number;
    onComplete: () => void;
    
    
}

export type QuestionIntermissionProps = {
    setTimerEnded: React.Dispatch<React.SetStateAction<boolean>>;
    setShowGameOver: React.Dispatch<React.SetStateAction<boolean>>;
};

export type AnswerGridProps = {
    timerEnded: boolean;
    answers: string[];
    correctAnswer?: string;
};

export type QuizCardProps = {
    setShowGameOver: React.Dispatch<React.SetStateAction<boolean>>;
    setTimerEnded: React.Dispatch<React.SetStateAction<boolean>>;
    timerEnded: boolean;
};

export type GameOverModalProps = {
    setShowGameOver: React.Dispatch<React.SetStateAction<boolean>>;
    setTimerEnded: React.Dispatch<React.SetStateAction<boolean>>;
};