import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PAGE_CONTENT } from "@/lib/pageContent";
import { ArrowRight } from "lucide-react";

export default function DrivingLessonsPage() {
  const content = PAGE_CONTENT.drivingLessons;

  return (
    <PageShell title={content.title} intro={content.intro}>
      <div className="space-y-2 py-20 md:py-24 px-6 sm:px-8 lg:px-12">
        {[
          // { label: "Areas", href: "/driving-lessons/areas" },
          {
            label: "Automatic Driving Lessons",
            href: "/driving-lessons/automatic-driving-lessons",
          },
          { label: "Prices", href: "/driving-lessons/prices" },
          { label: "FAQ", href: "/driving-lessons/faq" },
        ].map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="flex items-center justify-between rounded-2xl border-2 border-gray-200 bg-white px-5 py-4 text-sm font-semibold text-gray-800 transition hover:border-[var(--primary)] hover:shadow-lg"
          >
            {l.label}
            <ArrowRight className="h-4 w-4 text-gray-500" />
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
