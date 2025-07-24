import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import { QuizState } from '@/types';


export const useQuizStore = create<QuizState>()(
    persist(
        (set) => ({
            quizOptions: {
                topic: null,
                difficulty: null,
            },
            setQuizOptions: (topic, difficulty) => set((state) => ({
                quizOptions: {
                    ...state.quizOptions,
                    topic,
                    difficulty,
                },
            })),

            gameplay: {
                questions: [],
                lives: 3,
                questionStartTimestamp: null,
                selectedAnswer: null,
            },
            setQuestions: (questions) => set((state) => ({
                gameplay: { ...state.gameplay, questions }
            })),
            setLives: (lives) => set((state) => ({
                gameplay: { ...state.gameplay, lives }
            })),
            resetLives: () => set((state) => ({
                gameplay: { ...state.gameplay, lives: 3 }
            })),
            setQuestionStartTimestamp: (timestamp) => set((state) => ({
                gameplay: { ...state.gameplay, questionStartTimestamp: timestamp }
            })),
            resetQuestionStartTimestamp: () => set((state) => ({
                gameplay: { ...state.gameplay, questionStartTimestamp: null }
            })),
            setSelectedAnswer: (selectedAnswer) => set((state) => ({
                gameplay: { ...state.gameplay, selectedAnswer }
            })),
            status: {
                loading: false,
                fetched: false,
                refreshTimestamp: null,
            },
            setLoading: (loading) => set((state) => ({
                status: { ...state.status, loading }
            })),
            setFetched: (fetched) => set((state) => ({
                status: { ...state.status, fetched }
            })),
            setRefreshTimestamp: (ts) => set((state) => ({
                status: { ...state.status, refreshTimestamp: ts }
            })),
            resetRefreshTimestamp: () => set((state) => ({
                status: { ...state.status, refreshTimestamp: null }
            })),
        }),
        {
            name: 'quiz-storage',
            partialize: (state) => ({
                gameplay: state.gameplay,
                status: state.status.refreshTimestamp,
            }),
            
        }
    )
);
