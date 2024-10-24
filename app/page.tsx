import Hero from "@/components/Hero";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="text-white w-full px-[90px] flex flex-col gap-5 ">
      <Hero />
      <Slider />
    </div>
  );
}
