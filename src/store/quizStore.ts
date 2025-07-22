import { create } from 'zustand'
import { QuizState } from '@/types';


export const useQuizStore = create<QuizState>((set) => ({
    topic: null,
    difficulty: null,
    setQuizOptions: (topic, difficulty) => set({ topic, difficulty }),
    questions: [],
    setQuestions: (questions) => set({ questions }),
    loading: false,
    setLoading: (loading) => set({ loading }),
    fetched: false,
    setFetched: (fetched) => set({ fetched }),
}))

