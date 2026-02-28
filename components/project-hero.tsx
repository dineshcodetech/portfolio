"use client";

import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";
import { GlowingEffect } from "@/components/ui/glowing-effect";

type Project = {
  title: string;
  image: string;
  tags: readonly string[];
};

type Detail = {
  tagline: string;
};

export function ProjectHero({ project, detail }: { project: Project; detail: Detail }) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 mb-16 min-h-[280px]">
      <GlowingEffect
        spread={32}
        glow
        disabled={false}
        proximity={80}
        inactiveZone={0.15}
        borderWidth={2}
      />
      <Spotlight
        className="-top-20 left-1/2 -translate-x-1/2 md:left-1/3"
        fill="white"
      />
      <div className="relative flex flex-col gap-6 p-8 md:flex-row md:items-end md:justify-between md:p-10">
        <div className="relative z-10">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-2">
            Case study
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-2 text-lg text-zinc-400">{detail.tagline}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-md bg-zinc-800/80 text-zinc-400 border border-zinc-700/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="relative aspect-video w-full max-w-sm overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800 md:aspect-square md:max-w-[220px] ring-1 ring-zinc-700/50">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 220px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
