import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects, projectDetails, contact } from "@/lib/portfolio-data";
import { ProjectHero } from "@/components/project-hero";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ArrowLeft,
  CheckCircle2,
  Code2,
  ExternalLink,
  Layers,
  Sparkles,
  Wrench,
} from "lucide-react";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
  return projects
    .filter((p): p is typeof p & { slug: string } => "slug" in p && !!p.slug)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => "slug" in p && p.slug === slug);
  const detail = projectDetails[slug];
  if (!project || !detail)
    return { title: "Project not found" };
  return {
    title: `${project.title} — ${detail.tagline}`,
    description: detail.overview[0]?.slice(0, 160) ?? undefined,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => "slug" in p && p.slug === slug);
  const detail = projectDetails[slug];

  if (!project || !detail) notFound();

  const overview = detail.overview;
  const { techStack, features, contributions } = detail;

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      {/* Back nav */}
      <div className="sticky top-0 z-10 border-b border-zinc-800/80 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-4xl items-center px-4 sm:px-6 lg:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        {/* Hero */}
        <ProjectHero
          project={{
            title: project.title,
            image: project.image,
            tags: project.tags,
          }}
          detail={{ tagline: detail.tagline }}
        />

        <div className="mb-12 flex flex-wrap items-center gap-3">
          {"link" in project && project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-600 bg-zinc-800/50 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:border-zinc-500 hover:text-white transition-colors"
            >
              Visit live site
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
          {slug === "rakshak" && (
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/60 bg-[#25D366]/20 px-5 py-2.5 text-sm font-medium text-[#25D366] hover:bg-[#25D366]/30 hover:border-[#25D366] transition-colors"
            >
              Would you want to join?
            </a>
          )}
        </div>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="flex items-center gap-2 text-sm font-medium text-zinc-500 uppercase tracking-widest mb-4">
            <Layers className="h-4 w-4" />
            Overview
          </h2>
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            {overview.map((para, i) => (
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
            Tech stack
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="border-zinc-800 bg-zinc-900/50">
              <CardHeader className="pb-2">
                <h3 className="font-semibold text-white">Frontend (Mobile & Web)</h3>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 text-sm text-zinc-400">
                  {techStack.frontend.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/80" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-zinc-800 bg-zinc-900/50">
              <CardHeader className="pb-2">
                <h3 className="font-semibold text-white">Backend (API & DB)</h3>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 text-sm text-zinc-400">
                  {techStack.backend.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500/80" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key features */}
        <section className="mb-16">
          <h2 className="flex items-center gap-2 text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">
            <Sparkles className="h-4 w-4" />
            Key features
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f, i) => (
              <Card
                key={i}
                className={cn(
                  "border-zinc-800 bg-zinc-900/50 transition-colors hover:border-zinc-700",
                  "hover:bg-zinc-900/80"
                )}
              >
                <CardContent className="p-5">
                  <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {f.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our contributions */}
        <section>
          <h2 className="flex items-center gap-2 text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">
            <Wrench className="h-4 w-4" />
            Our contributions & technical highlights
          </h2>
          <ul className="space-y-4">
            {contributions.map((item, i) => (
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
