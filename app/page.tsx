import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { TeamSection } from "@/components/team-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { site } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-black font-sans text-zinc-100 min-h-[100dvh]">
      <SiteHeader />
      <main className="w-full max-w-6xl mx-auto py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-zinc-800 mt-12 sm:mt-16 lg:mt-20 py-5 sm:py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-zinc-500">
          <Image
            src="/recursion-logo.png"
            alt=""
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
          />
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
