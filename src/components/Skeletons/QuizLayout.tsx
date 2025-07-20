export default function QuizLayout() {
    return (
        <div className="w-full px-4 mt-5">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-white/20 mx-auto w-[350px] sm:w-[400px] md:w-[500px] lg:w-[600px]">
                {/* Timer */}
                <div className="h-2 bg-white/30 rounded-md animate-pulse mb-2"/>
                {/* Fake question line */}
                <div className="h-40 bg-white/30 rounded-md animate-pulse mb-8" />

                {/* Fake answers in 2x2 grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-white/20 rounded-md animate-pulse" />
                    <div className="h-20 bg-white/20 rounded-md animate-pulse" />
                    <div className="h-20 bg-white/20 rounded-md animate-pulse" />
                    <div className="h-20 bg-white/20 rounded-md animate-pulse" />
                </div>
            </div>
        </div>
    );
}