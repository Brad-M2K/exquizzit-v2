'use client'

import AnswerGrid from '@/components/quiz/AnswerGrid'
import Question from '@/components/quiz/Question'
import Timer from '@/components/quiz/Timer';
import { useState, useEffect } from 'react';
import { useQuizStore } from '@/store/quizStore'
import QuizSkeleton from '@/components/Skeletons/QuizSkeleton';

export default function QuestionCard() {
    const { topic, difficulty } = useQuizStore();
    const [questions, setQuestions] = useState([]);
    const [fetched, setFetched] = useState(false);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        if (!topic || !difficulty) return;
        if (fetched) return;

        console.log('Fetching questions for topic:', topic, 'difficulty:', difficulty)
        
        const fetchQuestions = async () => {
            
            try {
                
                await new Promise((res) => setTimeout(res, 1500));
                
                const response = await fetch(`/api/questions?category=${topic}&difficulty=${difficulty}`)
                
                setFetched(true);
                setLoading(false);
                
                if (!response.ok) {
                    console.error('API response not ok:', response.status, response.statusText)
                    return;
                }
                
                const data = await response.json()
                console.log('Fetched questions:', data)
                setQuestions(data)
                
            } catch (err) {
                console.error('Error fetching questions:', err)
            }

        };

        fetchQuestions();

    }, [topic, difficulty, fetched, setLoading]);

    return (
        <div className="w-full px-4 mt-5">

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-white/20 mx-auto w-[350px] sm:w-[400px] md:w-[500px] lg:w-[600px]">
                {loading ? (
                    <QuizSkeleton />
                ) : (
                    <>
                        <Timer />
                        <Question question={questions} />
                        <AnswerGrid answers={questions} />
                    </>
                )}
            </div>
        </div>
    )
}