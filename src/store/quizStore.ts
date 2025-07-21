import { create } from 'zustand'

type QuizState = {
    topic: string | null
    difficulty: string | null
    setQuizOptions: (topic: string, difficulty: string) => void
}

export const useQuizStore = create<QuizState>((set) => ({
    topic: null,
    difficulty: null,
    setQuizOptions: (topic, difficulty) => set({ topic, difficulty }),
}))