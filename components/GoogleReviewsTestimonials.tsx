"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";

interface Review {
  author: string;
  rating: number;
  text: string;
  time: string;
  profilePhoto?: string;
  authorUrl?: string;
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div
      className="flex items-center gap-0.5 text-[#FFD700]"
      aria-label={`${count} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < count ? "text-[#FFD700]" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="min-w-[260px] flex-1 animate-pulse rounded-2xl bg-[#F7F7F7] p-6">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-4 w-4 rounded bg-gray-200" />
        ))}
      </div>
      <div className="mt-4 space-y-2">
        <div className="h-3 w-full rounded bg-gray-200" />
        <div className="h-3 w-5/6 rounded bg-gray-200" />
        <div className="h-3 w-4/6 rounded bg-gray-200" />
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4">
        <div className="h-3 w-24 rounded bg-gray-200" />
        <div className="h-3 w-12 rounded bg-gray-200" />
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex min-h-[200px] w-full items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50">
      <div className="text-center">
        <div className="text-3xl">⭐</div>
        <p className="mt-2 text-sm font-medium text-gray-600">No reviews yet</p>
        <p className="mt-1 text-xs text-gray-400">
          Be the first to leave a review on Google!
        </p>
      </div>
    </div>
  );
}

export function GoogleReviewsTestimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  const CARDS_PER_PAGE = 2;

  useEffect(() => {
    fetch("/api/google-reviews")
      .then((r) => r.json())
      .then((data) => {
        setReviews(data.reviews ?? []);
      })
      .catch(() => setReviews([]))
      .finally(() => setLoading(false));
  }, []);

  const totalPages = Math.ceil(reviews.length / CARDS_PER_PAGE);
  const visibleReviews = reviews.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE,
  );

  const handleNext = () => setPage((p) => (p + 1) % totalPages);
  const handlePrev = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  return (
    <section className="bg-white">
      <Container className="py-14">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800">
            <span className="size-1.5 shrink-0 rounded-full bg-black" />
            Our Testimonials
          </div>
          <h2 className="mt-6 max-w-2xl text-left text-4xl font-bold tracking-tight text-black md:text-center">
            What our learners say about their experience
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

          {/* Review cards */}
          <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:gap-6">
            {loading ? (
              <>
                <SkeletonCard />
                <SkeletonCard />
              </>
            ) : reviews.length === 0 ? (
              <EmptyState />
            ) : (
              visibleReviews.map((review, i) => (
                <article
                  key={`${review.author}-${i}`}
                  className="min-w-[260px] flex-1 rounded-2xl bg-[#F7F7F7] p-6"
                >
                  <Stars count={review.rating} />
                  <p className="mt-4 text-base leading-relaxed text-gray-800">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="flex items-center gap-2">
                      {review.profilePhoto && (
                        <img
                          src={review.profilePhoto}
                          alt={review.author}
                          width={28}
                          height={28}
                          className="rounded-full"
                        />
                      )}
                      <span className="text-sm font-semibold text-[#CC0000]">
                        {review.author}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                      <span className="text-sm font-medium text-blue-600">
                        Google
                      </span>
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-gray-400">{review.time}</p>
                </article>
              ))
            )}
          </div>

          {/* Navigation arrows - only show if there are multiple pages */}
          {!loading && reviews.length > CARDS_PER_PAGE && (
            <div className="flex flex-col items-center justify-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="flex size-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                aria-label="Previous reviews"
              >
                ↑
              </button>
              <span className="text-xs text-gray-400">
                {page + 1}/{totalPages}
              </span>
              <button
                type="button"
                onClick={handleNext}
                className="flex size-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                aria-label="Next reviews"
              >
                ↓
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
