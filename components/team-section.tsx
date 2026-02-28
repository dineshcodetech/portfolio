import { Card, CardContent } from "@/components/ui/card";
import { team } from "@/lib/portfolio-data";
import { Users } from "lucide-react";

export function TeamSection() {
  return (
    <section id="team" className="scroll-mt-16 sm:scroll-mt-20">
      <div className="mb-4 sm:mb-6">
        <p className="text-xs sm:text-sm font-medium text-zinc-500 uppercase tracking-widest">
          Our team
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-1">
          Cross-functional expertise
        </h2>
        <p className="text-zinc-400 mt-1.5 sm:mt-2 max-w-2xl text-sm sm:text-base">
          App, backend, frontend, and AI developers working together to deliver your product.
        </p>
      </div>
      <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((t, i) => (
          <Card
            key={i}
            className="bg-zinc-900/80 border-zinc-800 text-zinc-100 overflow-hidden rounded-xl sm:rounded-lg"
          >
            <CardContent className="p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300">
                <Users className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-white text-sm sm:text-base">{t.role}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">{t.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
