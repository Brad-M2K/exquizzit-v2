import { CleanedQuestion } from "./questions"

export type QuizState = {
    topic: string | null
    difficulty: string | null
    setQuizOptions: (topic: string, difficulty: string) => void
    questions: CleanedQuestion[]
    setQuestions: (questions: CleanedQuestion[]) => void
    loading: boolean;
    setLoading: (loading: boolean) => void;
    fetched: boolean;
    setFetched: (fetched: boolean) => void;
}