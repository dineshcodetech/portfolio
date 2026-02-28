import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/portfolio-data";
import {
  Smartphone,
  Server,
  Layout,
  Cloud,
  Sparkles,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  Server,
  Layout,
  Cloud,
  Sparkles,
};

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-16 sm:scroll-mt-20">
      <div className="mb-4 sm:mb-6">
        <p className="text-xs sm:text-sm font-medium text-zinc-500 uppercase tracking-widest">
          What we do
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-1">
          Services
        </h2>
        <p className="text-zinc-400 mt-1.5 sm:mt-2 max-w-2xl text-sm sm:text-base">
          Click a service for full details.
        </p>
      </div>
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {services.map((s) => {
          const Icon = iconMap[s.icon] ?? Smartphone;
          return (
            <Link key={s.id} href={`/services/${s.slug}`} className="min-h-[44px] sm:min-h-0 touch-manipulation">
              <Card className="h-full bg-zinc-900/80 border-zinc-800 text-zinc-100 overflow-hidden hover:border-zinc-600 transition-colors group rounded-xl sm:rounded-lg active:scale-[0.99] transition-transform">
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300 mb-3 sm:mb-4 group-hover:bg-zinc-700 transition-colors">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <h3 className="font-semibold text-white mb-1.5 sm:mb-2 text-sm sm:text-base">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed flex-1">
                    {s.summary}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 mt-3 sm:mt-4 group-hover:text-white transition-colors">
                    View details
                    <ChevronRight className="h-3.5 w-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
