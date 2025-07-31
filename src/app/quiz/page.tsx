'use client';

export const dynamic = 'force-dynamic';

import QuizCard from '@/components/quiz/QuizCard';
import Header from '@/components/quiz/Header';
import { useQuizStore } from '@/store/quizStore';
import { useEffect, Suspense, useState } from 'react';
import QuizSkeleton from '@/components/Skeletons/QuizSkeleton';
import { cleanQuestion } from '@/utils/cleanQuestion';
import { RawTriviaQuestion, CleanedQuestion } from '@/types';
import "@fontsource/bitcount-prop-double"; 
import { useSearchParams } from 'next/navigation';
import Lives from '@/components/quiz/Lives'
import GameOverModal from '@/components/quiz/GameOverModal';


function QuizContent() {
    const searchParams = useSearchParams();
    const [hasCheckedRefresh, setHasCheckedRefresh] = useState(false);
    const [timerEnded, setTimerEnded] = useState(false);
    

    const { setLoading, setQuestions, setFetched, resetRefreshTimestamp, resetQuestionStartTimestamp, setQuizOptions, setRefreshTimestamp } = useQuizStore();
    const storedTopic = useQuizStore((state) => state.quizOptions.topic);
    const storedDifficulty = useQuizStore((state) => state.quizOptions.difficulty);
    const fetched = useQuizStore((state) => state.status.fetched);
    const urlTopic = searchParams.get('category');
    const urlDifficulty = searchParams.get('difficulty');
    const resetLives = useQuizStore((state) => state.resetLives);
    const setHasProcessedAnswer = useQuizStore((state) => state.setHasProcessedAnswer);
    const setCurrentIndex = useQuizStore((state) => state.setCurrentIndex); 
    const resetScore = useQuizStore((state) => state.resetScore);

    const [showGameOver, setShowGameOver] = useState(false);
        
        
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
        
        
        setTimeout(() => {
            setHasCheckedRefresh(true);
        }, 150);
        
    }, [setRefreshTimestamp]);
    

    

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
                resetLives();
                setCurrentIndex(0);
                setHasProcessedAnswer(false);
                resetScore();

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


    return (
        <div className="flex-1 flex flex-col items-center min-h-screen">
            <header className='flex items-center justify-center'>
                <Header/>
            </header>
            <main className="flex-1 flex flex-col justify-center items-center w-full h-full md:justify-center justify-start pt-8 md:pt-0">
                {showGameOver && (
                    <GameOverModal
                        setShowGameOver={setShowGameOver}
                        setTimerEnded={setTimerEnded}
                    />
                )}
                <Lives/>
                {hasCheckedRefresh ? (<QuizCard
                    setShowGameOver={setShowGameOver}
                    setTimerEnded={setTimerEnded}
                    timerEnded={timerEnded}
                />) : (
                    <div className="w-full px-4">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 shadow-2xl border border-white/20 mx-auto w-[350px] sm:max-w-[400px] lg:max-w-160 w-auto h-auto">
                            <QuizSkeleton />
                        </div>
                    </div>
                )}
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
