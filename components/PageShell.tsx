"use client";

import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight, Car } from "lucide-react";

type Props = {
  title: string;
  intro: string;
  sections?: { title: string; body: string }[];
  children?: React.ReactNode;
};

export function PageShell({ title, intro, sections, children }: Props) {
  const hasSections = Boolean(sections && sections.length > 0);

  return (
    <div className="min-h-screen bg-[#FAFAF9] pt-10">
      <section className="bg-white py-20 md:py-24">
        <Container className="max-w-4xl px-6 sm:px-8 lg:px-12">
          <span className="inline-block rounded-full border-2 border-gray-200 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-wider text-gray-600">
            {title.toUpperCase()}
          </span>
          <h1
            className="mt-8 text-4xl font-black leading-tight gradient-text sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-600">
            {intro}
          </p>
        </Container>
      </section>

      {hasSections ? (
        <Container className="py-20 md:py-24 px-6 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:gap-20 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="space-y-20">
                {sections!.map((s) => (
                  <section key={s.title}>
                    <h2 className="mb-5 text-xl sm:text-2xl font-bold text-gray-900">
                      {s.title}
                    </h2>
                    <p className="text-base leading-relaxed text-gray-600">
                      {s.body}
                    </p>
                    <div className="mt-8 h-px w-full bg-gray-200" />
                  </section>
                ))}
              </div>
            </div>
            <aside className="lg:col-span-4">
              {children ? (
                <div className="rounded-3xl border border-gray-100 bg-white p-8 lg:p-10 shadow-lg">
                  {children}
                </div>
              ) : (
                <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5861a]">
                    <Car className="h-7 w-7 text-gray-900" />
                  </div>
                  <div className="mb-3 font-bold text-gray-900">Get Started</div>
                  <p className="mb-6 text-sm leading-relaxed text-gray-600">
                    Ready to begin your driving journey? Book your first lesson today.
                  </p>
                  <Link href="/book-now" className="btn-primary">
                    Book Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </aside>
          </div>
        </Container>
      ) : (
        children || null
      )}
    </div>
  );
}
