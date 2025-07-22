export default function AnswerGrid({ answers, setAnswer, userChoice }) {
    
    const colourClasses = [
        "bg-red-600/40 hover:bg-red-700/40",
        "bg-blue-600/40 hover:bg-blue-700/40",
        "bg-yellow-600/40 hover:bg-yellow-700/40",
        "bg-green-600/40 hover:bg-green-700/40",
    ];
    

    return (
        <div className="grid grid-cols-2 gap-4 mt-18">
            {answers.map((answer: string, idx: number) => (
                <div
                    key={idx}
                    onClick={() => setAnswer(answer)}
                    className={`min-h-20 px-4 py-2 shadow-lg rounded-xl text-center flex items-center justify-center text-gray-200 font-bold text-sm cursor-pointer hover:scale-105 transition ${colourClasses[idx]} ${userChoice === answer ? 'ring-3 ring-[#00ffff]/80 scale-105'  : ''}`}
                >
                    {answer}
                </div>
            ))}
        </div>
    )
}

