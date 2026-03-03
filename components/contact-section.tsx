import { Card, CardContent } from "@/components/ui/card";
import { contact } from "@/lib/portfolio-data";
import { Mail, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-16 sm:scroll-mt-20">
      <Card className="w-full bg-zinc-900/80 border-zinc-800 text-zinc-100 overflow-hidden rounded-xl sm:rounded-lg">
        <CardContent className="p-5 sm:p-8 md:p-12 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            {contact.cta}
          </h2>
          <p className="text-zinc-400 mt-1.5 sm:mt-2 max-w-md mx-auto text-sm sm:text-base">
            {contact.subtext}
          </p>
          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 sm:px-6 py-3.5 sm:py-3 min-h-[48px] text-black font-medium hover:bg-zinc-200 transition-colors touch-manipulation active:scale-[0.98] text-sm sm:text-base"
            >
              <Mail className="h-4 w-4 shrink-0" />
              <span className="truncate">{contact.email}</span>
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-600 px-5 sm:px-6 py-3.5 sm:py-3 min-h-[48px] text-white font-medium hover:bg-zinc-800 transition-colors touch-manipulation active:scale-[0.98] text-sm sm:text-base"
            >
              <Phone className="h-4 w-4 shrink-0" />
               {contact.phone}
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
