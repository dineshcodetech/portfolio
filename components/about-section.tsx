import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { profile } from "@/lib/portfolio-data";
import { Check } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 sm:scroll-mt-20">
      <Card className="w-full bg-zinc-900/80 border-zinc-800 text-zinc-100 overflow-hidden rounded-xl sm:rounded-lg">
        <CardHeader className="p-4 sm:p-6">
          <p className="text-xs sm:text-sm font-medium text-zinc-400 uppercase tracking-widest">
            About
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-1">
            {profile.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-0.5">
            {profile.experience} in {profile.focus}
          </p>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
          <p className="text-zinc-300 leading-relaxed max-w-3xl text-sm sm:text-base">
            {profile.bio}
          </p>
          <ul className="space-y-2.5 sm:space-y-3">
            {profile.highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm sm:text-base">
                <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
