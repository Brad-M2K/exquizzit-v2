'use client'


import QuizLayout from '@/components/Skeletons/QuizLayout';
import QuizCard from '@/components/quiz/QuizCard';
import { Suspense } from 'react';

export default function Quiz(){



    return (
        <main className="flex justify-center items-center h-screen">
            <Suspense fallback={<QuizLayout />}>
                <QuizCard />
            </Suspense>
        </main>
    )
}