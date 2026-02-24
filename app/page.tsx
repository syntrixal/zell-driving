"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Star,
  CheckCircle,
  ArrowRight,
  Calendar,
  Users,
  Award,
  Shield,
  Car,
  Clock,
  Target,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { HomeBookingForm } from "@/components/bookingfrom";
import { GoogleReviewsTestimonials } from "@/components/GoogleReviewsTestimonials"; // 👈 import

const containerClass = "px-6 sm:px-8 lg:px-12";

const features = [
  {
    icon: Users,
    title: "Expert Instructors",
    desc: "Accredited, professional, patient and encouraging instructors.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    desc: "Lessons 7 days a week - Weekend, Weekday and Evening courses available.",
  },
  {
    icon: TrendingUp,
    title: "High Pass Rate",
    desc: "Structured lesson plans with proven success across Liverpool.",
  },
  {
    icon: Car,
    title: "Modern Vehicles",
    desc: "Modern vehicles with air conditioning for everybody's comfort.",
  },
  {
    icon: Shield,
    title: "Automatic Only",
    desc: "We specialise in automatic driving lessons in Liverpool for a focused, stress-free learning experience.",
  },
  {
    icon: Award,
    title: "Liverpool Coverage",
    desc: "Automatic driving school Liverpool – we cover all Liverpool areas and pick you up from your location.",
  },
];

const drivingFeatures = [
  {
    icon: Target,
    title: "Mock Test Prep",
    desc: "Practice with test-style sessions to build confidence.",
    bullets: ["Intensive courses available", "Last-minute test cancellations"],
  },
  {
    icon: Shield,
    title: "Safe Learning",
    desc: "Dual-control vehicles with experienced instructors.",
    bullets: ["Test centre pickups available", "Residential pickups available"],
  },
  {
    icon: BookOpen,
    title: "Free Theory Training",
    desc: "Free unlimited online theory training included.",
    bullets: ["Highway Code resources", "Hazard perception practice"],
  },
  {
    icon: Award,
    title: "Student Discounts",
    desc: "Blue Light Card & Student discounts available.",
    bullets: ["£5 off every 2hr lesson", "Special offers for key workers"],
  },
];

const blogs = [
  {
    title:
      "7 Essential Driving Tips Every Beginner Should Know to Build Confidence on the Road",
    slug: "essential-driving-tips-for-beginners",
    img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop",
  },
  {
    title:
      "How to Prepare and Pass Your Driving Test on the First Attempt in Liverpool",
    slug: "how-to-pass-your-driving-test-first-time-liverpool",
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
  },
  {
    title: "Why Choose Automatic Driving Lessons in Liverpool",
    slug: "why-choose-automatic-driving-lessons-liverpool",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
  },
];

export default function HomePage() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-32 md:pt-40 md:pb-40 lg:pb-48">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&h=1080&fit=crop"
            alt="Driving instructor teaching student"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/70 to-gray-900/60" />
        </div>
        <Container className={`relative z-10 ${containerClass}`}>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-white" />
              <span className="text-sm font-semibold text-white">
                Professional Driving Instruction
              </span>
            </div>
            <h1 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              BEST <span className="text-[#ae2027]">DRIVING LESSONS</span>
              <br />
              IN LIVERPOOL
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
              Learn to drive with Zell Driving School, a trusted Liverpool driving
              school offering professional driving lessons across Liverpool. Our
              DVSA-approved instructors provide flexible lesson times, patient
              one-to-one tuition, and high first-time pass rates.
            </p>
          </div>
          <HomeBookingForm />
        </Container>
      </section>

      {/* About */}
      <section className="bg-white py-20 md:py-24">
        <Container className={containerClass}>
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                About Us
              </span>
              <h2 className="mt-6 mb-6 text-4xl font-black leading-tight sm:text-5xl">
                A friendly place to learn{" "}
                <span className="text-[#ae2027]">Driving</span>
              </h2>
              <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-600">
                Zell Driving School offers professional driving instruction across
                Liverpool and surrounding areas with expert instructors, modern
                vehicles, and flexible scheduling.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: Award,
                    title: "Expert Instructors",
                    desc: "Certified, professional, patient and encouraging instructors focused on your success.",
                  },
                  {
                    icon: Shield,
                    title: "Safety First Approach",
                    desc: "Professional guidance with modern dual-control vehicles for maximum safety and comfort.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-5 bg-gray-50 hover:bg-white border-2 border-gray-200 hover:border-[#ae2027] rounded-2xl p-6 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#ae2027] group-hover:bg-[#8a191f] transition-colors">
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-bold text-lg">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop"
                alt="Driving lesson"
                className="w-full rounded-3xl shadow-2xl"
              />
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {[
                  {
                    title: "All Liverpool Areas Covered",
                    desc: "Serving communities across Liverpool",
                  },
                  {
                    title: "100+ Instructors",
                    desc: "Large team of certified Liverpool professionals",
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="group bg-gray-50 hover:bg-white border-2 border-gray-200 hover:border-[#ae2027] rounded-2xl p-6 sm:p-7 shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    <h3 className="mb-2 font-bold text-base">{card.title}</h3>
                    <p className="text-xs leading-relaxed text-gray-600">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 md:py-24">
        <Container className={containerClass}>
          <div className="mb-20 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200">
              Why Choose Us?
            </span>
            <h2 className="mt-6 mb-6 text-4xl font-black leading-tight sm:text-5xl">
              Why Choose <span className="text-[#ae2027]">Zell Driving School</span>?
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
              Professional instruction, flexible scheduling, and a learning
              experience built to make you a confident, safe driver in
              Liverpool.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="group text-center bg-white border-2 border-gray-200 hover:border-[#ae2027] rounded-3xl p-8 transition-all duration-300 hover:shadow-xl"
                  onMouseEnter={() => setActiveFeature(i)}
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#ae2027] group-hover:bg-[#8a191f] transition-colors">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-3 font-bold text-lg">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#ae2027] py-20 md:py-24">
        <Container className={containerClass}>
          <div className="max-w-5xl mx-auto text-center text-white">
            <h2 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Get Started with Zell Driving School
            </h2>
            <p className="mb-10 text-base leading-relaxed text-white/90 sm:text-lg lg:text-xl max-w-3xl mx-auto">
              Start your driving journey today with professional instruction,
              flexible scheduling, and proven results across Liverpool.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/book-now"
                className="inline-flex items-center gap-3 px-10 py-4 bg-white hover:bg-gray-100 text-[#ae2027] font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-base"
              >
                Get Started
              </Link>
              <Link
                href="/driving-lessons/prices"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-10 py-4 text-base font-bold text-white transition hover:bg-white hover:text-[#ae2027]"
              >
                View Prices
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {[
                "Liverpool Driving School",
                "Automatic Lessons",
                "Intensive Courses",
                "Pass Plus Training",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-white" />
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex items-center justify-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <svg
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <p className="text-base text-white sm:text-lg">
                Ready to start your driving journey?{" "}
                <Link
                  href="/book-now"
                  className="font-bold underline hover:text-gray-200"
                >
                  Contact Us
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20 md:py-24">
        <Container className={containerClass}>
          <div className="mb-20 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200">
              Our Driving Features
            </span>
            <h2 className="mt-6 mb-6 text-4xl font-black leading-tight sm:text-5xl">
              Features that build{" "}
              <span className="text-[#ae2027]">confidence</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
              Our certified Liverpool programs are designed to provide
              structured, professional training that builds both driving skills
              and confidence.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {drivingFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="group bg-white border-2 border-gray-200 hover:border-[#ae2027] rounded-3xl p-8 shadow-lg lg:p-10 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="mb-5 flex items-center gap-2 text-xs font-bold text-[#ae2027]">
                    <span className="h-2 w-2 rounded-full bg-[#ae2027]" />
                    Our Driving Features
                  </div>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ae2027] group-hover:bg-[#8a191f] transition-colors">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-3 font-bold text-lg">{feature.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    {feature.desc}
                  </p>
                  <ul className="space-y-2">
                    {feature.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-xs text-gray-600"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#ae2027]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ✅ Google Reviews Testimonials - replaces hardcoded section */}
      <GoogleReviewsTestimonials />

      {/* Blog */}
      <section className="bg-gray-50 py-20 md:py-24">
        <Container className={containerClass}>
          <div className="mb-20 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200">
              Latest Blogs
            </span>
            <h2 className="mt-6 mb-6 text-4xl font-black leading-tight sm:text-5xl">
              Stay updated with our latest
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {blogs.map((blog, i) => (
              <article
                key={i}
                className="group overflow-hidden rounded-3xl border-2 border-gray-200 hover:border-[#ae2027] bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-8 lg:p-10">
                  <h3 className="mb-5 font-bold text-lg leading-tight">
                    {blog.title}
                  </h3>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="flex items-center gap-2 text-sm font-bold text-[#ae2027] transition hover:text-[#8a191f]"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
