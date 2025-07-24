'use client';

import QuizCard from '@/components/quiz/QuizCard';
import Header from '@/components/quiz/Header';
import { useQuizStore } from '@/store/quizStore';
import { useEffect } from 'react';
import { cleanQuestion } from '@/utils/cleanQuestion';
import { RawTriviaQuestion, CleanedQuestion } from '@/types';



export default function Quiz() {

    const { setLoading, setQuestions, setFetched, resetRefreshTimestamp, resetQuestionStartTimestamp } = useQuizStore();
    const topic = useQuizStore((state) => state.quizOptions.topic);
    const difficulty = useQuizStore((state) => state.quizOptions.difficulty);
    const fetched = useQuizStore((state) => state.status.fetched)

    

    useEffect(() => {
        if (!topic || !difficulty || fetched) return;

        const fetchQuestions = async (): Promise<void> => {
            try {
                await new Promise((res) => setTimeout(res, 3000));

                resetQuestionStartTimestamp();
                resetRefreshTimestamp();

                const url = new URL('https://opentdb.com/api.php');
                url.searchParams.set('amount', '10');
                url.searchParams.set('category', topic);
                if (difficulty !== 'mixed') {
                    url.searchParams.set('difficulty', difficulty);
                }
                url.searchParams.set('type', 'multiple');

                const res = await fetch(url.toString());
                if (!res.ok) throw new Error(`API error: ${res.status} ${res.statusText}`);

                const { results }: { results: RawTriviaQuestion[] } = await res.json();
                const cleaned: CleanedQuestion[] = results.map(cleanQuestion);

                setQuestions(cleaned);
                setFetched(true);
                setLoading(false);

                console.log('Answers for development purposes only:', cleaned.map(q => q.correctAnswer)); // TODO: Remove in production
            } catch (err) {
                console.error('Error fetching questions:', err);
            }
        };
        fetchQuestions();
    }, [topic, difficulty, fetched, setLoading, setFetched, setQuestions, resetQuestionStartTimestamp, resetRefreshTimestamp]);



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