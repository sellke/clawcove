import { FadeIn } from "@/components/animations/fade-in";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { FAQ } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { FinalCTA } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { OpenClawNative } from "@/components/sections/openclaw-native";
import { PainPoints } from "@/components/sections/pain-points";
import { Pricing } from "@/components/sections/pricing";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <FadeIn>
          <PainPoints />
        </FadeIn>
        <FadeIn delay={0.05}>
          <HowItWorks />
        </FadeIn>
        <FadeIn delay={0.05}>
          <Features />
        </FadeIn>
        <FadeIn delay={0.05}>
          <Pricing />
        </FadeIn>
        <FadeIn delay={0.05}>
          <OpenClawNative />
        </FadeIn>
        <FadeIn delay={0.05}>
          <FAQ />
        </FadeIn>
        <FadeIn delay={0.05}>
          <FinalCTA />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
