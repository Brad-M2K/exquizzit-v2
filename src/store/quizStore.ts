import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import { QuizState } from '@/types';


export const useQuizStore = create<QuizState>()(
    persist(
        (set, get) => ({

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
                currentIndex: 0,
                lives: 3,
                questionStartTimestamp: null,
                selectedAnswer: null,
                score: 0,
            },
            getCurrentQuestion: () => {
                const state = get().gameplay;
                return state.questions[state.currentIndex] || null;
            },
            setQuestions: (questions) => set((state) => ({
                gameplay: { ...state.gameplay, questions }
            })),
            setCurrentIndex: (currentIndex) => set((state) => ({
                gameplay: { ...state.gameplay, currentIndex }
            })) ,
            decrementLives: () => set((state) => ({
                gameplay: { ...state.gameplay, lives: state.gameplay.lives - 1 }
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
            incrementScore: () => set((state) => ({
                gameplay: { ...state.gameplay, score: state.gameplay.score + 1}
            })),
            resetScore: () => set((state) => ({
                gameplay: { ...state.gameplay, score: 0}
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
                quizOptions: state.quizOptions,
                gameplay: state.gameplay,
                status: state.status,
            }),
            
        }
    )
);
