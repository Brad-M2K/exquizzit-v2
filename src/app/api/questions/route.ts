import { NextResponse } from 'next/server';
import { cleanQuestion } from '@/utils/cleanQuestion';
import { RawTriviaQuestion, CleanedQuestion } from '@/types';


export async function GET(request: Request) {
    console.log('API Activated')
    
    const { searchParams } = new URL(request.url);

    const category = searchParams.get('category') || '9';
    const amount = searchParams.get('amount') || '10';
    const difficulty = searchParams.get('difficulty');

    console.log('API params:', { category, amount, difficulty })

    let url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&type=multiple`
    
    // Only add difficulty if it's not null, undefined, or "mixed"
    if (difficulty && difficulty !== "undefined" && difficulty !== "mixed") {
        url += `&difficulty=${difficulty}`
    }

    console.log('Fetching from URL:', url)

    const res = await fetch(url)

    if (!res.ok) {
        console.error('Failed response:', res.status);
        return NextResponse.json({error: 'Failed to fetch trivia questions'}, {status: 500})
    }

    const rawData: {results: RawTriviaQuestion[]} = await res.json()

    const cleanedQuestions: CleanedQuestion[] = rawData.results.map(cleanQuestion);
    console.log(cleanedQuestions)


    return NextResponse.json(cleanedQuestions);
}