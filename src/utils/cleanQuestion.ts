import { decode } from 'he';
import { shuffle } from '@/utils/shuffle';
import { RawTriviaQuestion, CleanedQuestion } from '@/types';


export function cleanQuestion(raw: RawTriviaQuestion): CleanedQuestion {

    const { question, correct_answer, incorrect_answers, category, difficulty } = raw;

    const allAnswers = [correct_answer, ...incorrect_answers];

    const shuffledAnswers = shuffle(allAnswers);

    return {
        questionText: decode(question),
        correctAnswer: decode(correct_answer),
        answers: shuffledAnswers.map((answer) => decode(answer)),
        category,
        difficulty
    };

}