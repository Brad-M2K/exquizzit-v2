import {QuestionIntermissionProps} from '@/types';

export default function QuestionIntermission({ nextQuestion, setTimerEnded }: QuestionIntermissionProps) {
    

    return (
        <button onClick={() => {
            setTimerEnded(false);
            nextQuestion((prev: number) => prev + 1)

        }}>Next Question</button>
    )
}