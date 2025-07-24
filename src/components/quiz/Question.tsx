

export default function Question({question}: {question: string}) {
    
    return (
        <div className="min-h-50 px-4 py-2 bg-blue-900/10 shadow-lg rounded-md mb-5 text-center flex items-center justify-center font-bold lg:text-xl text-md text-[#C0C0C0]">
            {question}
        </div>

    )
}