'use client'

import AnswerGrid from '@/components/quiz/AnswerGrid'
import Question from '@/components/quiz/Question'
import Timer from '@/components/quiz/Timer';
import { useState, useEffect, useCallback } from 'react';
import { useQuizStore } from '@/store/quizStore'
import QuizSkeleton from '@/components/Skeletons/QuizSkeleton';
import QuestionIntermission from '@/components/quiz/QuestionIntermission';



export default function QuestionCard() {
    
    
    const loading = useQuizStore((state) => state.status.loading);
    const questions = useQuizStore((state) => state.gameplay.questions)
    
    const currentIndex = useQuizStore((state) => state.gameplay.currentIndex);
    const currentQuestion = useQuizStore((state) => state.getCurrentQuestion());
    const [timerEnded, setTimerEnded] = useState(false);
    
    
    
    
    
    const handleTimerComplete = useCallback(() => {
        
        setTimerEnded(true);
        
    }, []);
    
    


    return (
        <div className="w-full px-4">

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 shadow-2xl border border-white/20 mx-auto w-[350px] sm:max-w-[400px]  lg:max-w-160 w-auto h-auto">
                {loading || !questions.length ? (
                    <QuizSkeleton />
                ) : (
                    <>
                        <Question question={currentQuestion?.questionText} />
                        {!timerEnded ? (
                            <Timer
                                key={currentIndex}
                                onComplete={handleTimerComplete}
                            />
                        
                        ) : (
                            
                            <QuestionIntermission
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