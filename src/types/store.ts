import { CleanedQuestion } from "./questions"

export type QuizState = {
    quizOptions: {
        topic: string | null;
        difficulty: string | null;
    };
    setQuizOptions: (topic: string, difficulty: string) => void;

    gameplay: {
        questions: CleanedQuestion[];
        lives: number;
        questionStartTimestamp: number | null;
    };
    setQuestions: (questions: CleanedQuestion[]) => void;
    setLives: (lives: number) => void;
    resetLives: () => void;
    setQuestionStartTimestamp: (ts: number | null) => void;
    resetQuestionStartTimestamp: () => void;

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