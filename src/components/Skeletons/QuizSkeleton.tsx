export default function QuizSkeleton() {
    return (
        <>
            
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
            
        </>
    );
}