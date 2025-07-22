// import Image from "next/image";
import SelectTopicButton from "@/components/home/SelectTopicButton";
import Hero from '@/components/home/Hero';
import { Gem } from 'lucide-react';

export default function Home() {



  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      <Gem className="absolute top-1 left-2 stroke-purple-900 w-4 animate-spin" />
      <Hero />
      <SelectTopicButton />
    </div>
  );
}
