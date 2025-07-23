import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import { QuizState } from '@/types';


export const useQuizStore = create<QuizState>()(
    persist(
        (set) => ({
            topic: null,
            difficulty: null,
            setQuizOptions: (topic, difficulty) => set({ topic, difficulty }),
            questions: [],
            setQuestions: (questions) => set({ questions }),
            loading: false,
            setLoading: (loading) => set({ loading }),
            fetched: false,
            setFetched: (fetched) => set({ fetched }),
            refreshTimestamp: null,
            setRefreshTimestamp: (ts) => set({ refreshTimestamp: ts }),
            resetRefreshTimestamp: () => set({ refreshTimestamp: null }),
            questionStartTimestamp: null,
            setQuestionStartTimestamp: (timestamp: number | null) => set({ questionStartTimestamp: timestamp }),
            resetQuestionStartTimestamp: () => set({ questionStartTimestamp: null})
            
        }),
        {
            name: 'quiz-storage',
        }
        
    )

);
