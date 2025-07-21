// import Image from "next/image";
import SelectTopicButton from "@/components/home/SelectTopicButton";
import Hero from '@/components/home/Hero';

export default function Home() {


 

  



  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <Hero />
      <SelectTopicButton />
    </div>
  );
}
