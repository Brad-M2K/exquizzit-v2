import { CleanedQuestion } from "./questions"

export type QuizState = {
    quizOptions: {
        topic: string | null;
        difficulty: string | null;
    };
    setQuizOptions: (topic: string, difficulty: string) => void;

    gameplay: {
        questions: CleanedQuestion[];
        currentIndex: number;
        lives: number;
        questionStartTimestamp: number | null;
        selectedAnswer: string | null;
        score: number;
    };
    getCurrentQuestion: () => CleanedQuestion | null;
    setQuestions: (questions: CleanedQuestion[]) => void;
    setCurrentIndex: (currentIndex: number) => void;
    decrementLives: () => void;
    resetLives: () => void;
    setQuestionStartTimestamp: (ts: number | null) => void;
    resetQuestionStartTimestamp: () => void;
    setSelectedAnswer: (answer: string | null) => void;
    incrementScore: () => void;
    resetScore: () => void;

    status: {
        loading: boolean;
        fetched: boolean;
        refreshTimestamp: number | null;
    };
    setLoading: (loading: boolean) => void;
    setFetched: (fetched: boolean) => void;
    setRefreshTimestamp: (ts: number) => void;
    resetRefreshTimestamp: () => void;
};