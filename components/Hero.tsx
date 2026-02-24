import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

type Props = {
  title: string;
  subtitle: string;
};

export function Hero({ title, subtitle }: Props) {
  return (
    <section className="relative">
      {/* Hero background image (car learner photo) */}
      <div
        className="relative h-[520px] w-full bg-cover bg-center sm:h-[560px]"
        style={{
          backgroundImage: 'url("https://placehold.co/1600x700")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <Container className="relative flex h-full flex-col items-center justify-center text-center text-white">
          <div className="mb-4 inline-flex items-center rounded-full bg-white/80 px-4 py-1 text-xs font-semibold text-gray-800 shadow">
            Learn Driving With Confidence &amp; Safety
          </div>
          <p className="text-xs font-semibold tracking-[0.22em] text-[#ae2027]/90">
            PROFESSIONAL DRIVING
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-snug sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-100 sm:text-base">
            {subtitle}
          </p>
          <div className="mt-6">
            <ButtonLink
              href="/useful-info/videos"
              variant="primary"
              className="btn-primary"
            >
              Watch Video
            </ButtonLink>
          </div>
        </Container>
      </div>
    </section>
  );
}

