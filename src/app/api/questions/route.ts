import { NextResponse } from 'next/server';
import { cleanQuestion } from '@/utils/cleanQuestion';
import { RawTriviaQuestion, CleanedQuestion } from '@/types';


export async function GET(request: Request) {
    console.log('API Activated')
    
    const { searchParams } = new URL(request.url);

    const category = searchParams.get('category') || '9';
    const amount = searchParams.get('amount') || '15';
    const difficulty = searchParams.get('difficulty');

    console.log('API Activated:', { category, amount, difficulty });

    let url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&type=multiple`
    
    if (difficulty && difficulty !== "undefined" && difficulty !== "mixed") {
        url += `&difficulty=${difficulty}`
    }

    let res;

    try {
        res = await fetch(url, { cache: 'no-store' });
    } catch (err) {
        console.error('Fetch failed:', err);
        return NextResponse.json({ error: 'Fetch threw error' }, { status: 500 });
    }

    
    if (!res.ok) {
        console.error('Failed response:', res.status);
        return NextResponse.json({error: 'Failed to fetch trivia questions'}, {status: 500})
    }
    
    const rawData: {results: RawTriviaQuestion[]} = await res.json()
    
    if (rawData.results.length === 0) {
        return NextResponse.json({ error: 'No questions found' }, { status: 404 });
    }

    const cleanedQuestions: CleanedQuestion[] = rawData.results.map(cleanQuestion);


    return NextResponse.json(cleanedQuestions);
}