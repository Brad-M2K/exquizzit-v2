export type RawTriviaQuestion = {
    question: string
    correct_answer: string
    incorrect_answers: string[]
    category: string
    difficulty: string
}

export type CleanedQuestion = {
    questionText: string
    correctAnswer: string
    answers: string[]
    category: string
    difficulty: string
}