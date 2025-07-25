'use client'

import AnswerGrid from '@/components/quiz/AnswerGrid'
import Question from '@/components/quiz/Question'
import Timer from '@/components/quiz/Timer';
import { useState, useEffect, useCallback } from 'react';
import { useQuizStore } from '@/store/quizStore'
import QuizSkeleton from '@/components/Skeletons/QuizSkeleton';
import { CleanedQuestion } from '@/types';
import QuestionIntermission from '@/components/quiz/QuestionIntermission';




export default function QuestionCard() {


    const loading = useQuizStore((state) => state.status.loading);
    const questions = useQuizStore((state) => state.gameplay.questions)
    const { setRefreshTimestamp } = useQuizStore();
    
    const [currentIndex, setCurrentIndex] = useState<number>(3)
    const currentQuestion: CleanedQuestion | undefined = questions[currentIndex]
    const [timerEnded, setTimerEnded] = useState(false);

    

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
        
        setTimerEnded(true);
        
    }, []);
    



    return (
        <div className="w-full px-4">

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 shadow-2xl border border-white/20 mx-auto w-[350px] sm:max-w-[400px]  lg:max-w-160 w-auto h-auto">
                {loading || !questions.length ? (
                    <QuizSkeleton />
                ) : (
                    <>
                        <Question question={currentQuestion?.questionText} />
                        {!timerEnded ? (
                            <Timer
                                key={currentIndex}
                                trigger={isTimerActive}
                                onComplete={handleTimerComplete}
                            />
                        
                        ) : (
                            
                            <QuestionIntermission
                                setCurrentIndex={setCurrentIndex}
                                setTimerEnded={setTimerEnded}
                            />
                        )}
                        <AnswerGrid
                            timerEnded={timerEnded}
                            answers={currentQuestion?.answers || []}
                            correctAnswer={currentQuestion?.correctAnswer}
                        />
                    </>
                )}
            </div>
        </div>
    )
}