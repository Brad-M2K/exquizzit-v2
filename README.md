# 🧠✨ **ExQuizzit** - The Ultimate Trivia Experience

> *Show off exquisite knowledge.*

A blazingly fast, beautifully animated trivia quiz app built with Next.js 15, featuring 18 different categories, intelligent timer persistence, and smooth user experience across all devices.

## 🚀 **Live Demo**

🌐 **[Play ExQuizzit Now!](https://exquizzit-v2.vercel.app/)** 

## 🎮 **Features**

### 🧩 **Core Gameplay**
- **18 Quiz Categories**: From General Knowledge to Mythology, Computers to Celebrities
- **3 Difficulty Levels**: Easy, Medium, Hard + Mixed mode for ultimate challenge
- **20 Questions Per Game**: Perfectly balanced for engagement without fatigue
- **Smart Timer System**: 17-second countdown with intelligent refresh persistence
- **Lives System**: 3 lives to keep the pressure on
- **Real-time Scoring**: Track your performance as you play

### ✨ **UI/UX Excellence**
- **Magical Shimmer Animations**: Eye-catching gradient text effects
- **Smooth Loading States**: Custom skeleton loaders for seamless experience
- **Responsive Design**: Perfect on mobile, tablet, and desktop
- **Custom Animations**: Pulsing timers, throb effects, and smooth transitions
- **Modern Glassmorphism**: Beautiful backdrop-blur cards and interfaces

### 🔧 **Technical Excellence**
- **Zero Flicker Loading**: Advanced hydration handling for production stability
- **Persistent State**: Zustand with localStorage - resume where you left off
- **Race Condition Prevention**: Solved production-only timing issues
- **SEO Optimized**: Server-side rendering with client-side interactivity
- **Type Safety**: Full TypeScript implementation with proper typing

## 🛠️ **Tech Stack**

### **Frontend**
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Lightweight state management

### **Styling & Animation**
- **Custom CSS Animations** - Shimmer effects, pulsing, and throb animations
- **[Fontsource](https://fontsource.org/)** - Bitcount Prop Double font for that retro feel
- **[Clsx](https://github.com/lukeed/clsx)** - Conditional className utility
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### **Data & Utils**
- **[Open Trivia Database API](https://opentdb.com/)** - Free trivia questions
- **[HE](https://github.com/mathiasbynens/he)** - HTML entity decoder
- **Custom Utils** - Question cleaning, shuffling algorithms

### **Future Ready**
- **[Prisma](https://www.prisma.io/)** - Database ORM (prepared for user features)
- **[NextAuth.js](https://next-auth.js.org/)** - Authentication (ready for implementation)
- **[Supabase](https://supabase.com/)** - Backend as a service (configured)

## 🎯 **How It Works**

### **1. Topic Selection**
```typescript
// 18 carefully curated categories with personality
const topics = [
  { id: 9, name: "General Knowledge", message: "Ah, the catch-all of trivia..." },
  { id: 18, name: "Computers", message: "01110011 01110100 01100001..." },
  // ... and 16 more!
]
```

### **2. Smart Question Processing**
```typescript
export function cleanQuestion(raw: RawTriviaQuestion): CleanedQuestion {
  // Decodes HTML entities, shuffles answers, maintains integrity
  const allAnswers = [correct_answer, ...incorrect_answers];
  const shuffledAnswers = shuffle(allAnswers);
  
  return {
    questionText: decode(question),
    correctAnswer: decode(correct_answer),
    answers: shuffledAnswers.map(answer => decode(answer)),
    category,
    difficulty
  };
}
```

### **3. Persistent Timer Magic**
The crown jewel - a timer that survives page refreshes:
- Detects page refreshes vs. fresh loads
- Calculates elapsed time accurately
- Seamlessly resumes countdown
- Prevents race conditions in production

### **4. State Management**
```typescript
// Zustand store with localStorage persistence
const useQuizStore = create(persist((set, get) => ({
  quizOptions: { topic: null, difficulty: null },
  gameplay: { questions: [], currentIndex: 0, lives: 3, score: 0 },
  status: { loading: false, fetched: false, refreshTimestamp: null }
})))
```

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+ 
- npm/yarn/pnpm

### **Installation**
```bash
# Clone the repository
git clone https://github.com/yourusername/exquizzit-v2.git
cd exquizzit-v2

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to play!

### **Build for Production**
```bash
# Create optimized build
npm run build

# Start production server
npm run start
```

## 📁 **Project Structure**

```
src/
├── app/                    # Next.js 15 App Router
│   ├── page.tsx           # Home page with hero
│   ├── select-topic/      # Topic selection page
│   ├── quiz/              # Main quiz game
│   └── api/questions/     # API route (future feature)
├── components/
│   ├── home/              # Landing page components
│   ├── quiz/              # Quiz game components
│   ├── topics/            # Topic selection UI
│   ├── Skeletons/         # Loading state components
│   └── notifications/     # Toast notifications
├── store/                 # Zustand state management
├── types/                 # TypeScript definitions
├── utils/                 # Helper functions
└── styles/                # Custom CSS animations
```

## 🎨 **Design Philosophy**

### **Color Palette**
- **Primary**: Magical shimmer gradients (`#ff00c8`, `#00ffee`, `#a855f7`)
- **Background**: Deep space vibes with glassmorphism
- **Interactive**: Smooth hover states and feedback

### **Typography**
- **Headers**: Bitcount Prop Double (retro gaming aesthetic)
- **Body**: Inter (clean, readable)

### **Animation Strategy**
- **Purposeful**: Every animation serves UX (loading, feedback, delight)
- **Performance**: CSS-based animations for 60fps smoothness
- **Accessibility**: Respects prefers-reduced-motion

## 🔮 **Upcoming Features**

### **Phase 2 - Social Features**
- [ ] User authentication and profiles
- [ ] Leaderboards and achievements
- [ ] Custom quiz creation
- [ ] Multiplayer challenges

### **Phase 3 - Enhanced Gameplay**
- [ ] Power-ups and lifelines
- [ ] Streak bonuses
- [ ] Category mastery tracking
- [ ] Daily challenges

### **Phase 4 - Community**
- [ ] Quiz sharing
- [ ] Comments and ratings
- [ ] Tournament system

## 🐛 **Known Issues & Solutions**

### **Production Hydration** ✅ **SOLVED**
- **Issue**: Timer reset on refresh in production
- **Solution**: Implemented refresh detection with controlled component mounting
- **Result**: Seamless timer persistence across all environments

### **Race Conditions** ✅ **SOLVED**  
- **Issue**: useEffect execution order differences between dev/prod
- **Solution**: Sequential state initialization with loading gates
- **Result**: Consistent behavior across environments

## 🤝 **Contributing**

We welcome contributions! Here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### **Development Guidelines**
- Follow TypeScript best practices
- Maintain component purity where possible
- Add animations thoughtfully
- Test across multiple devices
- Keep accessibility in mind

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 **Acknowledgments**

- **[Open Trivia Database](https://opentdb.com/)** - Free trivia questions API
- **[Vercel](https://vercel.com/)** - Deployment platform
- **[Tailwind CSS](https://tailwindcss.com/)** - CSS framework
- **Northcoders Bootcamp** - Learning foundation

## 📊 **Stats**

- **🏗️ Built with**: Next.js 15, React 19, TypeScript
- **📱 Responsive**: Mobile-first design
- **⚡ Performance**: Lighthouse score 95+
- **🎯 Categories**: 18 different quiz topics
- **⏱️ Average Game**: 5-8 minutes
- **🎮 Questions**: 20 per game session

---

**Made with ❤️ and lots of ☕ by Brad**

*Ready to test your exquisite knowledge? [Play Now!](https://exquizzit-v2.vercel.app/)*
