import { NextResponse } from 'next/server';
import { cleanQuestion } from '@/utils/cleanQuestion';
import { RawTriviaQuestion, CleanedQuestion } from '@/types';


export async function GET(request: Request) {
    console.log('API Activated')
    
    const { searchParams } = new URL(request.url);

    const category = searchParams.get('category') || '9';
    const amount = searchParams.get('amount') || '10';
    const difficulty = searchParams.get('difficulty');

    let url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&type=multiple`
    

    if (difficulty !== "undefined") {
        url += `&difficulty=${difficulty}`
    }

    const res = await fetch(url)

    if (!res.ok) {
        const errorText = await res.text();
        console.error('Failed response:', res.status, errorText);
        return NextResponse.json({error: 'Failed to fetch trivia questions'}, {status: 500})
    }

    const rawData: {results: RawTriviaQuestion[]} = await res.json()

    const cleanedQuestions: CleanedQuestion[] = rawData.results.map(cleanQuestion);


    return NextResponse.json(cleanedQuestions);
}