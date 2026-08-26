import Hero from "@/components/home/Hero";
import FeaturedWork from "@/components/home/FeaturedWork";
import Approach from "@/components/home/Approach";
import StudioReel from "@/components/home/StudioReel";
import TeamTeaser from "@/components/home/TeamTeaser";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Approach />
      <StudioReel />
      <TeamTeaser />
      <CtaBanner />
    </>
  );
}
