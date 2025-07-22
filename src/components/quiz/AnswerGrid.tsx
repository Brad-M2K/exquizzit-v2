export default function AnswerGrid(answers) {
    

    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="h-20 bg-white/40 shadow-lg rounded-md text-center flex items-center justify-center">
                Answer 1
            </div>
            <div className="h-20 bg-white/40 shadow-lg rounded-md text-center flex items-center justify-center">
                Answer 2
            </div>
            <div className="h-20 bg-white/40 shadow-lg rounded-md text-center flex items-center justify-center">
                Answer 3
            </div>
            <div className="h-20 bg-white/40 shadow-lg rounded-md text-center flex items-center justify-center">
                Answer 
            </div>
        </div>
    )
}