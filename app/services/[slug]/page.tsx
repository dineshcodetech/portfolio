import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { services, serviceDetails } from "@/lib/portfolio-data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { ArrowLeft, CheckCircle2, Code2, Layers, Zap } from "lucide-react";
import {
  Smartphone,
  Server,
  Layout,
  Cloud,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  Server,
  Layout,
  Cloud,
  Sparkles,
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];
  if (!service || !detail)
    return { title: "Service not found" };
  return {
    title: `${service.title} — ${detail.tagline}`,
    description: detail.overview[0]?.slice(0, 160) ?? undefined,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];

  if (!service || !detail) notFound();

  const Icon = iconMap[service.icon] ?? Sparkles;

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      {/* Back nav */}
      <div className="sticky top-0 z-10 border-b border-zinc-800/80 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-4xl items-center px-4 sm:px-6 lg:px-8">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All services
          </Link>
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 mb-16">
          <Spotlight
            className="-top-20 left-1/2 -translate-x-1/2 md:left-1/3"
            fill="white"
          />
          <div className="relative flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="relative z-10">
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-2">
                Service
              </p>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-zinc-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                  {service.title}
                </h1>
              </div>
              <p className="text-lg text-zinc-400">{detail.tagline}</p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="flex items-center gap-2 text-sm font-medium text-zinc-500 uppercase tracking-widest mb-4">
            <Layers className="h-4 w-4" />
            Overview
          </h2>
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            {detail.overview.map((para, i) => (
              <p key={i} className="text-base md:text-lg">
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section className="mb-16">
          <h2 className="flex items-center gap-2 text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">
            <Code2 className="h-4 w-4" />
            Technologies
          </h2>
          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardContent className="p-6">
              <ul className="flex flex-wrap gap-2">
                {detail.techStack.map((tech, i) => (
                  <li
                    key={i}
                    className="rounded-lg border border-zinc-700 bg-zinc-800/50 px-3 py-2 text-sm text-zinc-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Highlights */}
        <section>
          <h2 className="flex items-center gap-2 text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">
            <Zap className="h-4 w-4" />
            What you get
          </h2>
          <ul className="space-y-4">
            {detail.highlights.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/30 px-5 py-4"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                <span className="text-zinc-300 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
