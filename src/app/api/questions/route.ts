import { NextResponse } from 'next/server';
import { cleanQuestion } from '@/utils/cleanQuestion';

export async function GET(request: Request) {
    
    const { searchParams } = new URL(request.url);

    const category = searchParams.get('category') || '9';
    const amount = searchParams.get('amount') || '10'

    const res = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&type=multiple`)

    if (!res.ok){
        return NextResponse.json({error: 'Failed to fetch trivia questions'}, {status: 500})
    }

    const rawData: {results: any[]} = await res.json()

    const cleanedQuestions = rawData.results.map(cleanQuestion);


    return NextResponse.json(cleanedQuestions);
}