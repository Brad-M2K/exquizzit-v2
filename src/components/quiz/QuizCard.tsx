'use client'

import AnswerGrid from '@/components/quiz/AnswerGrid'
import Question from '@/components/quiz/Question'
import Timer from '@/components/quiz/Timer';
import { useState, useEffect, useCallback } from 'react';
import { useQuizStore } from '@/store/quizStore'
import QuizSkeleton from '@/components/Skeletons/QuizSkeleton';
import { CleanedQuestion } from '@/types';




export default function QuestionCard() {


    const loading = useQuizStore((state) => state.status.loading);
    const questions = useQuizStore((state) => state.gameplay.questions)
    
    const [currentIndex, setCurrentIndex] = useState<number>(3)
    const currentQuestion: CleanedQuestion | undefined = questions[currentIndex]
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>();

    const { setRefreshTimestamp } = useQuizStore();
    

    useEffect(() => {
        const timestamp = Date.now();

        const navType = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;

        const isRefresh = navType.type === 'reload';

        if (isRefresh) {
            localStorage.setItem("quiz-refresh-timestamp", timestamp.toString());
        }

        const saved = localStorage.getItem("quiz-refresh-timestamp");
        if (saved) {
            const savedTime = parseInt(saved, 10);

            setRefreshTimestamp(savedTime);
        }
        
    }, [setRefreshTimestamp]);

    
    
    //* Timer reset on next question

    const [isTimerActive, setIsTimerActive] = useState<boolean>(true);
    useEffect(() => {

        setIsTimerActive(false);
        const timeout = setTimeout(() => setIsTimerActive(true), 10)
        return () => clearTimeout(timeout);
    }, [currentIndex]);

    const handleTimerComplete = useCallback(() => {
        setSelectedAnswer(null);
        setCurrentIndex((prev) => prev + 1);
    }, []);
    



    return (
        <div className="w-full px-4">

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 shadow-2xl border border-white/20 mx-auto w-[350px] sm:w-[400px] md:w-[500px] lg:w-[600px]">
                {loading || !questions.length ? (
                    <QuizSkeleton />
                ) : (
                    <>
                        <Question question={currentQuestion?.questionText} />
                            
                        <Timer
                            key={currentIndex}
                            trigger={isTimerActive}
                            onComplete={handleTimerComplete}
                            
                        />
                            
                        <AnswerGrid
                            answers={currentQuestion?.answers || []}
                            setAnswer={setSelectedAnswer}
                            userChoice={selectedAnswer}
                        />
                    </>
                )}
            </div>
        </div>
    )
}