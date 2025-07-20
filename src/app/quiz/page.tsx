'use client'
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import QuizLayout from '@/components/Skeletons/QuizLayout';
import QuestionCard from '@/components/quiz/QuestionCard';

export default function Quiz(){

    const searchParams = useSearchParams();

    const [questions, setQuestions] = useState();
    const [fetched, setFetched] = useState(false);

    if (fetched) {
        //? cheats for questions to be able to test gameplay and features
        console.log(questions?.map(question => question.correctAnswer))
    }

    const handleStartQuiz = async () => {
        if (fetched) return;
        try {
            const res = await fetch(`/api/questions?${searchParams}`)
            const data = await res.json()
            setFetched(true);
            setQuestions(data);
        } catch (err) {
            console.log('Failed to fetch questions:', err);
        }
    }

    return (
        <main className="flex justify-center items-center h-screen">
            
                {!fetched && (
                    <button
                        onClick={handleStartQuiz}
                        className="bg-white text-purple-500 px-4 py-2 rounded shadow hover:scale-105 transition"
                    >
                        StartQuiz
                    </button>
                )}
            {fetched && (
                <div>
                    <QuizLayout />
                </div>
            )}
            
        </main>
    )
}