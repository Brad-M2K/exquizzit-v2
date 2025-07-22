'use client';

import QuizCard from '@/components/quiz/QuizCard';
import Header from '@/components/quiz/Header';
import { useQuizStore } from '@/store/quizStore';
import { useEffect } from 'react';



export default function Quiz() {

    const { setLoading, setQuestions, setFetched } = useQuizStore();
    const { topic, difficulty } = useQuizStore();
    const { fetched } = useQuizStore();
    

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
        <div className="flex-1 flex flex-col items-center min-h-screen">
            <header className='flex items-center justify-center'>
                <Header/>
            </header>
            <main className="flex-1 flex flex-col justify-center items-center w-full">
                <QuizCard />
            </main>
        </div>
    )
}