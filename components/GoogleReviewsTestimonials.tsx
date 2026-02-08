import Image from "next/image";
import { Container } from "@/components/ui/Container";

const testimonialQuote =
  "After a few years off the road, I needed to regain confidence. The refresher course was perfect focused, professional, and very practical. Now I drive every day without any stress.";

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-[#FFD700]" aria-label="5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export function GoogleReviewsTestimonials() {
  return (
    <section className="bg-white">
      <Container className="py-14">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800">
            <span className="size-1.5 shrink-0 rounded-full bg-black" />
            Our Testimonials
          </div>
          <h2 className="mt-6 max-w-2xl text-left text-4xl font-bold tracking-tight text-black md:text-center">
            What our learners say about their
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap items-stretch justify-center gap-6">
          {/* Testimonial image - left */}
          <div className="relative h-[320px] w-full min-w-[280px] max-w-[340px] overflow-hidden rounded-xl">
            <Image
              src="https://placehold.co/600x400"
              alt="Learner with driving license"
              width={340}
              height={320}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Two testimonial cards */}
          <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:gap-6">
            {[1, 2].map((i) => (
              <article
                key={i}
                className="min-w-[260px] flex-1 rounded-2xl bg-[#F7F7F7] p-6"
              >
                <Stars />
                <p className="mt-4 text-base leading-relaxed text-gray-800">
                  &ldquo;{testimonialQuote}&rdquo;
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4">
                  <span className="text-sm font-semibold text-[#CC0000]">
                    Stephen Carey
                  </span>
                  <span className="text-sm font-medium text-blue-600">Google</span>
                </div>
              </article>
            ))}
          </div>

          {/* Navigation arrow - right */}
          <button
            type="button"
            className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </Container>
    </section>
  );
}

