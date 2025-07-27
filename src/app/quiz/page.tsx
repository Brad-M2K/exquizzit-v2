'use client';

// import { useHydrated } from "@/hooks/useHydrated";
import QuizCard from '@/components/quiz/QuizCard';
import Header from '@/components/quiz/Header';
import { useQuizStore } from '@/store/quizStore';
import { useEffect, Suspense } from 'react';
import { cleanQuestion } from '@/utils/cleanQuestion';
import { RawTriviaQuestion, CleanedQuestion } from '@/types';
import "@fontsource/bitcount-prop-double"; 
import { useSearchParams } from 'next/navigation';

function QuizContent() {

    // const hydrated = useHydrated();

    const searchParams = useSearchParams();

    const { setLoading, setQuestions, setFetched, resetRefreshTimestamp, resetQuestionStartTimestamp, setQuizOptions } = useQuizStore();
    const storedTopic = useQuizStore((state) => state.quizOptions.topic);
    const storedDifficulty = useQuizStore((state) => state.quizOptions.difficulty);
    const fetched = useQuizStore((state) => state.status.fetched);
    

    const urlTopic = searchParams.get('category');
    const urlDifficulty = searchParams.get('difficulty');
    

    useEffect(() => {
        if (urlTopic && urlDifficulty && (!storedTopic || !storedDifficulty)) {
            setQuizOptions(urlTopic, urlDifficulty);
        }
    }, [urlTopic, urlDifficulty, storedTopic, storedDifficulty, setQuizOptions]);

    useEffect(() => {
        if (!storedTopic || !storedDifficulty || fetched) {
            return;
        }
        const fetchQuestions = async (): Promise<void> => {
            
            try {
                // await new Promise((res) => setTimeout(res, 3000)); //TODO remove when mvp hit but here just in case need it to test skeleton loader

                resetQuestionStartTimestamp();
                resetRefreshTimestamp();

                const url = new URL('https://opentdb.com/api.php');
                url.searchParams.set('amount', '20');
                url.searchParams.set('category', storedTopic);
                url.searchParams.set('type', 'multiple');
                if (storedDifficulty !== 'mixed') {
                    url.searchParams.set('difficulty', storedDifficulty);
                }
                
                const res = await fetch(url.toString());
                if (!res.ok) throw new Error(`API error: ${res.status} ${res.statusText}`);

                const { results }: { results: RawTriviaQuestion[] } = await res.json();

                if (!results.length) {
                    throw new Error('No questions returned from API');
                }

                const cleaned: CleanedQuestion[] = results.map(cleanQuestion);

                setQuestions(cleaned);
                setFetched(true);
                setLoading(false);

                if (cleaned) {
                    console.info('Questions & Answers for development purposes only:')
                    console.table(cleaned); // TODO: Remove in production
                }

            } catch (err) {
                console.error('Error fetching questions:', err);
            }
        };
        fetchQuestions();
    }, [storedTopic, storedDifficulty, fetched]);


    // if (!hydrated) return null;



    return (
        <div className="flex-1 flex flex-col items-center min-h-screen">
            <header className='flex items-center justify-center'>
                <Header/>
            </header>
            <main className="flex-1 flex flex-col justify-center items-center w-full h-full">
                <QuizCard />
            </main>
        </div>
    )
}

export default function Quiz() {
    return (
        <Suspense>
            <QuizContent />
        </Suspense>
    );
}
