import { Suspense } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { PainPoints } from "@/components/sections/pain-points";
import { Pricing } from "@/components/sections/pricing";
import { UseCases } from "@/components/sections/use-cases";
import { WhyClawCove } from "@/components/sections/why-clawcove";
import { ConfirmationToast } from "@/components/ui/confirmation-toast";

export default function Home() {
  return (
    <>
      <Suspense>
        <ConfirmationToast />
      </Suspense>
      <Navigation />
      <main>
        <Hero />
        <FadeIn>
          <UseCases />
        </FadeIn>
        <FadeIn delay={0.05}>
          <PainPoints />
        </FadeIn>
        <FadeIn delay={0.05}>
          <HowItWorks />
        </FadeIn>
        <FadeIn delay={0.05}>
          <WhyClawCove />
        </FadeIn>
        <FadeIn delay={0.05}>
          <Pricing />
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
