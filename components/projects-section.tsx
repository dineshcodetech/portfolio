"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { projects, contact } from "@/lib/portfolio-data";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const whatsappUrl = `https://wa.me/${contact.whatsapp}`;

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-16 sm:scroll-mt-20">
      <div className="mb-4 sm:mb-6">
        <p className="text-xs sm:text-sm font-medium text-zinc-500 uppercase tracking-widest">
          Recent work
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-1">
          Projects
        </h2>
        <p className="text-zinc-400 mt-1.5 sm:mt-2 max-w-2xl text-sm sm:text-base">
          Add your recent project details in{" "}
          <code className="text-zinc-500 bg-zinc-800 px-1 rounded text-xs sm:text-sm">
            lib/portfolio-data.ts
          </code>{" "}
          — title, description, tags, link, and image.
        </p>
      </div>
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} floatDelay={i * 0.5} />
        ))}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[number];
  floatDelay: number;
}

function ProjectCard({ project: p, floatDelay }: ProjectCardProps) {
  const projectHref = "slug" in p && p.slug ? `/projects/${p.slug}` : "#";
  const isRakshak = p.id === "rakshak";

  return (
    <div
      className={cn(
        "relative min-h-[16rem] sm:min-h-[18rem] rounded-xl sm:rounded-[1.25rem] border-[0.75px] border-zinc-800 p-2 sm:p-3 md:rounded-[1.5rem] animate-float-lr"
      )}
      style={{ animationDelay: `${floatDelay}s` }}
    >
      <GlowingEffect
        spread={40}
        glow
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
      />
      <Card className="relative h-full overflow-hidden rounded-lg sm:rounded-xl border-[0.75px] border-zinc-800 bg-zinc-900/80 text-zinc-100 shadow-sm transition-colors group dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] hover:border-zinc-700 active:scale-[0.99] transition-transform">
        <Link
          href={projectHref}
          className="block relative aspect-video w-full overflow-hidden bg-zinc-800 min-h-[44px] touch-manipulation active:opacity-95"
        >
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </Link>
        <CardContent className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-2">
            <Link
              href={projectHref}
              className="font-semibold text-white text-sm sm:text-base min-w-0 hover:underline underline-offset-2"
            >
              {p.title}
            </Link>
            <Link
              href={projectHref}
              className="shrink-0 flex items-center gap-1 text-zinc-400 group-hover:text-white transition-colors text-xs font-medium"
            >
              {"slug" in p && p.slug ? "View details" : "View"}
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
          <Link href={projectHref} className="block mt-1.5 sm:mt-2">
            <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 hover:text-zinc-300 transition-colors">
              {p.description}
            </p>
          </Link>
          {isRakshak && (
            <div className="mt-3 sm:mt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#25D366]/50 bg-[#25D366]/10 px-3 py-2 text-sm font-medium text-[#25D366] hover:bg-[#25D366]/20 hover:border-[#25D366]/70 transition-colors"
              >
                Want to join?
              </a>
            </div>
          )}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
            {p.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded bg-zinc-800 text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
