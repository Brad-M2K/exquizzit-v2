'use client'

import AnswerGrid from '@/components/quiz/AnswerGrid'
import Question from '@/components/quiz/Question'
import Timer from '@/components/quiz/Timer';
import { useState, useEffect, useCallback } from 'react';
import { useQuizStore } from '@/store/quizStore'
import QuizSkeleton from '@/components/Skeletons/QuizSkeleton';
import { CleanedQuestion } from '@/types';




export default function QuestionCard() {


    const [questions, setQuestions] = useState<CleanedQuestion[]>([]);
    
    const [currentIndex, setCurrentIndex] = useState<number>(3)
    const currentQuestion: CleanedQuestion | undefined = questions[currentIndex]
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>();
    
    
    
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
    
    //? Question fetching
    const { topic, difficulty } = useQuizStore();
    const [fetched, setFetched] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!topic || !difficulty) return;
        if (fetched) return;

        console.log('Fetching questions for topic:', topic, 'difficulty:', difficulty)
        
        const fetchQuestions = async (): Promise<void> => {
            
            try {
                
                await new Promise((res) => setTimeout(res, 3000));
                
                const response = await fetch(`/api/questions?category=${topic}&difficulty=${difficulty}`)
                
                setFetched(true);
                setLoading(false);
                
                if (!response.ok) {
                    console.error('API response not ok:', response.status, response.statusText)
                    return;
                }
                
                const data = await response.json()

                setQuestions(data)

                console.log('Answers for development purposes only:', data.map(q => q.correctAnswer))
                
            } catch (err: unknown) {
                console.error('Error fetching questions:', err)
            }

        };

        fetchQuestions();

    }, [topic, difficulty, fetched, setLoading]);



    return (
        <div className="w-full px-4">

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 shadow-2xl border border-white/20 mx-auto w-[350px] sm:w-[400px] md:w-[500px] lg:w-[600px]">
                {loading ? (
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