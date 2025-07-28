export default function QuizSkeleton() {
    return (
        <>
            {/* EXACT copy of Question component styling */}
            <div className="min-h-50 px-4 py-2 bg-white/40 shadow-lg rounded-3xl mb-5 text-center flex items-center justify-center font-bold lg:text-2xl text-md lg:h-80 animate-pulse" />
            
            {/* EXACT copy of Timer component styling */}
            <div className="h-2 bg-white/40 rounded overflow-hidden mb-8 shadow-lg animate-pulse" />

            {/* EXACT copy of AnswerGrid styling */}
            <div className="grid grid-cols-2 gap-4 mt-18">
                <div className="min-h-20 lg:min-h-30 lg:min-w-20 px-3 py-1 shadow-lg rounded-2xl lg:rounded-2xl text-center flex items-center justify-center text-gray-200 font-bold text-sm lg:text-xl bg-white/40 animate-pulse" />
                <div className="min-h-20 lg:min-h-30 lg:min-w-20 px-3 py-1 shadow-lg rounded-2xl lg:rounded-2xl text-center flex items-center justify-center text-gray-200 font-bold text-sm lg:text-xl bg-white/40 animate-pulse" />
                <div className="min-h-20 lg:min-h-30 lg:min-w-20 px-3 py-1 shadow-lg rounded-2xl lg:rounded-2xl text-center flex items-center justify-center text-gray-200 font-bold text-sm lg:text-xl bg-white/40 animate-pulse" />
                <div className="min-h-20 lg:min-h-30 lg:min-w-20 px-3 py-1 shadow-lg rounded-2xl lg:rounded-2xl text-center flex items-center justify-center text-gray-200 font-bold text-sm lg:text-xl bg-white/40 animate-pulse" />
            </div>
        </>
    );
}
