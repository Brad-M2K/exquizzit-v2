import '@/styles/animations.css'

export default function Hero() {
    

    return (
        <>
            <h1 className="text-4xl font-bold mb-4 text-[#00ffee] animate-bounce">Welcome to <span className='magic-shimmer-text'>ExQuizzit</span></h1>
            <p className="text-lg text-white/70 p-2">Test your brain across categories and challenge yourself!</p>
            <p className="text-lg text-white/70 p-3 mb-8">Show off exquisite knowledge.</p>
        </>
    )
}