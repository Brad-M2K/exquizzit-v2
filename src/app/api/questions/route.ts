import { NextResponse } from 'next/server';
import { cleanQuestion } from '@/utils/cleanQuestion';
import { RawTriviaQuestion, CleanedQuestion } from '@/types';


export async function GET(request: Request) {
    console.log('API Activated')
    
    const { searchParams } = new URL(request.url);

    const category = searchParams.get('category') || '9';
    const amount = searchParams.get('amount') || '15';
    const difficulty = searchParams.get('difficulty');

    let url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&type=multiple`
    
    if (difficulty && difficulty !== "undefined" && difficulty !== "mixed") {
        url += `&difficulty=${difficulty}`
    }

    const res = await fetch(url)

    if (!res.ok) {
        console.error('Failed response:', res.status);
        return NextResponse.json({error: 'Failed to fetch trivia questions'}, {status: 500})
    }

    const rawData: {results: RawTriviaQuestion[]} = await res.json()

    const cleanedQuestions: CleanedQuestion[] = rawData.results.map(cleanQuestion);


    return NextResponse.json(cleanedQuestions);
}