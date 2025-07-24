import '@/styles/animations.css'
import "@fontsource/bitcount-prop-double"; 



export default function Hero() {
    

    return (
        <>
            <h1 className="text-2xl font-bold mb-4 text-[#00ffee] animate-bounce lg:text-4xl">Welcome to <span className={`magic-shimmer-text text-7xl lg:text-8xl block font-bitcount`}>ExQuizzit</span></h1>
            <p className="text-lg text-white/70 p-2 lg:text-3xl">Test your brain across categories and challenge yourself!</p>
            <p className="text-lg text-white/70 p-3 mb-8 lg:text-3xl">Show off exquisite knowledge.</p>
        </>
    )
}