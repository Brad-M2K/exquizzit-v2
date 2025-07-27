// import Image from "next/image";
import SelectTopicButton from "@/components/home/SelectTopicButton";
import Hero from '@/components/home/Hero';
import Secret from '@/components/home/Secret';


export default function Home() {



  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      <Secret />
      <Hero />
      <SelectTopicButton />
    </div>
  );
}
