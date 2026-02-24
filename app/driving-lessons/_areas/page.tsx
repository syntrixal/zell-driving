import { AreasCarousel } from "@/components/AreasCarousel";
import { PageShell } from "@/components/PageShell";
import { PAGE_CONTENT } from "@/lib/pageContent";

export default function AreasPage() {
  const content = PAGE_CONTENT.areas;

  return (
    <>
      <PageShell title={content.title} intro={content.intro} compactHero />
      <AreasCarousel />
    </>
  );
}