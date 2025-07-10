
type RawTriviaQuestion = {
    question: string
    correct_answer: string
    incorrect_answers: string[]
    category: string
    difficulty: string
}
  
type CleanedQuestion = {
    questionText: string
    correctAnswer: string
    answers: string[]
    category: string
    difficulty: string
}

export function cleanQuestion(raw: RawTriviaQuestion): CleanedQuestion {

    const { question, correct_answer, incorrect_answers, category, difficulty } = raw;

    const allAnswers = [correct_answer, ...incorrect_answers];

    const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

    return {
        questionText: question,
        correctAnswer: correct_answer,
        answers: shuffledAnswers,
        category,
        difficulty
    };

}