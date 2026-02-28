"use client";

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { FloatingPaths } from "@/components/ui/background-paths";
import { site } from "@/lib/portfolio-data";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <Card className="w-full min-h-[380px] sm:min-h-[440px] lg:min-h-[500px] bg-black/96 relative overflow-hidden border-0 rounded-xl sm:rounded-2xl">
      {/* Moving path background - this section only */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-xl sm:rounded-2xl dark">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 z-[1]"
        fill="white"
      />
      <div className="flex flex-col lg:flex-row h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[500px] relative z-10">
        <div className="flex-1 p-5 sm:p-6 lg:p-8 xl:p-12 relative z-10 flex flex-col justify-center order-2 lg:order-1">
          <p className="text-xs sm:text-sm font-medium text-neutral-400 uppercase tracking-widest mb-1.5 sm:mb-2">
            {site.tagline}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 tracking-tight">
            {site.name}
          </h1>
          <p className="mt-3 sm:mt-4 text-neutral-300 max-w-lg text-base sm:text-lg leading-relaxed">
            Full-stack development, cloud solutions & AI. We build products that scale — with a team of app, backend, frontend, and AI developers.
          </p>
          <a
            href="#contact"
            className="mt-6 sm:mt-8 inline-flex items-center gap-2 text-white font-medium hover:text-neutral-200 transition-colors min-h-[44px] py-2.5 px-4 rounded-lg -translate-y-0.5 active:translate-y-0 touch-manipulation"
          >
            Get in touch
            <ArrowDown className="h-4 w-4 rotate-[-90deg]" />
          </a>
        </div>
        <div className="flex-1 relative min-h-[220px] sm:min-h-[260px] lg:min-h-[500px] order-1 lg:order-2">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full absolute inset-0"
          />
        </div>
      </div>
    </Card>
  );
}
