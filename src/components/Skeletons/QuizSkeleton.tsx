export default function QuizSkeleton() {
    return (
        <>
            
                {/* Fake question line */}
                <div className="h-50 bg-white/40 rounded-md animate-pulse mb-5" />
            
                {/* Timer */}
                <div className="h-2 bg-white/40 rounded-md animate-pulse mb-2"/>

                {/* Fake answers in 2x2 grid */}
                <div className="grid grid-cols-2 gap-4 mt-18">
                    <div className="h-20 bg-white/40 rounded-md animate-pulse" />
                    <div className="h-20 bg-white/40 rounded-md animate-pulse" />
                    <div className="h-20 bg-white/40 rounded-md animate-pulse" />
                    <div className="h-20 bg-white/40 rounded-md animate-pulse" />
                </div>
            
        </>
    );
}