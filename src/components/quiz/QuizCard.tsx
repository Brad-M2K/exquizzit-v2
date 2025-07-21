'use client'

import AnswerGrid from '@/components/quiz/AnswerGrid'
import Question from '@/components/quiz/Question'
import Timer from '@/components/quiz/Timer';
import { useState, useEffect } from 'react';
import { useQuizStore } from '@/store/quizStore'

export default function QuestionCard() {
    const { topic, difficulty } = useQuizStore();
    const [questions, setQuestions] = useState([]);
    const [fetching, setFetching] = useState(false);
    const [fetched, setFetched] = useState(false);



    useEffect(() => {
        if (!topic || !difficulty) return;
        if (fetched || fetching) return;
        console.log(topic, difficulty)

        let cancelled = false;

        const fetchQuestions = async () => {
            setFetching(true);
            try {
                const response = await fetch(`/api/questions?category=${topic}&difficulty=${difficulty}`);
                console.log(response)
                const data = await response.json();
                if (!cancelled) {
                    setQuestions(data);
                    setFetched(true);
                }
            } catch (err) {
                if (!cancelled) {
                    console.error('Error fetching quiz questions:', err);
                }
            } finally {
                if (!cancelled) {
                    setFetching(false);
                }
            }
        };

        fetchQuestions();

        return () => {
            cancelled = true;
        };
    }, [topic, difficulty, fetched, fetching]);

    return (
        <div className="w-full px-4 mt-5">

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-white/20 mx-auto w-[350px] sm:w-[400px] md:w-[500px] lg:w-[600px]">
                
                <Timer />
                
                <Question question={questions} />

                <AnswerGrid answers={questions}/>
            </div>
        </div>
    )
}