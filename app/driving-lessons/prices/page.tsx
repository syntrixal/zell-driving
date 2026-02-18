"use client";

import { PageShell } from "@/components/PageShell";
import { PAGE_CONTENT } from "@/lib/pageContent";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

const pricingPlans = [
  {
    id: "hourly",
    name: "Hourly Pay",
    subtitle: "Pay as you go",
    price: 35,
    per: "per hour",
    description:
      "Perfect if you want flexibility with no commitment. Book lessons as and when you need them.",
    features: [
      "No long-term commitment",
      "Book lessons anytime",
      "Flexible scheduling",
      "DVSA-approved instructor",
      "Modern dual-control vehicle",
      "Liverpool-wide coverage",
    ],
    highlight: false,
    cta: "Book a Lesson",
  },
  {
    id: "weekly",
    name: "Weekly Pay",
    subtitle: "Most popular",
    price: 120,
    per: "per week",
    description:
      "Ideal for learners who want consistent progress. Get regular lessons each week at a reduced rate.",
    features: [
      "4 hours of lessons per week",
      "Save vs hourly rate",
      "Priority scheduling",
      "Same instructor every week",
      "Progress tracking included",
      "Liverpool-wide coverage",
      "Free theory support",
    ],
    highlight: true,
    cta: "Get Started",
  },
  {
    id: "monthly",
    name: "Monthly Pay",
    subtitle: "Best value",
    price: 420,
    per: "per month",
    description:
      "Our best value plan. Ideal for committed learners who want to pass as quickly as possible.",
    features: [
      "16 hours of lessons per month",
      "Maximum savings",
      "Priority scheduling",
      "Dedicated instructor",
      "Full progress tracking",
      "Liverpool-wide coverage",
      "Free theory support",
      "Mock test included",
      "Test day support available",
    ],
    highlight: false,
    cta: "Get Started",
  },
];

const liverpoolAreas = [
  "Aigburth",
  "Anfield",
  "Belle Vale",
  "Bootle",
  "Broadgreen",
  "Childwall",
  "City Centre",
  "Clubmoor",
  "Croxteth",
  "Dingle",
  "Dovecot",
  "Edge Hill",
  "Everton",
  "Fazakerley",
  "Garston",
  "Gateacre",
  "Grassendale",
  "Hunts Cross",
  "Kensington",
  "Kirkby",
  "Knotty Ash",
  "Litherland",
  "Mossley Hill",
  "Netherton",
  "Norris Green",
  "Old Swan",
  "Princes Park",
  "Sandymount",
  "Speke",
  "Stoneycroft",
  "Tuebrook",
  "Toxteth",
  "Vauxhall",
  "Walton",
  "Wavertree",
  "West Derby",
  "Whiston",
  "Woolton",
  "Aintree",
  "Allerton",
];

export default function PricesPage() {
  const content = PAGE_CONTENT.prices;
  const [activePlan, setActivePlan] = useState("weekly");

  return (
    <PageShell title={content.title} intro={content.intro}>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Red Banner */}
        <section className="bg-[#c41e3a] py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Simple, Transparent Pricing — Liverpool Only
              </h2>
              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                At Zell Driving, our prices are carefully set to reflect
                Liverpool's local driving school rates — keeping your lessons
                fair, transparent, and great value. Choose the plan that suits
                you best.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Plan Toggle */}
              <div className="flex justify-center mb-12">
                <div className="inline-flex bg-gray-100 rounded-full p-1 gap-1">
                  {pricingPlans.map((plan) => (
                    <button
                      key={plan.id}
                      onClick={() => setActivePlan(plan.id)}
                      className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                        activePlan === plan.id
                          ? "bg-[#c41e3a] text-white shadow"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {plan.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cards */}
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                {pricingPlans.map((plan) => (
                  <div
                    key={plan.id}
                    onClick={() => setActivePlan(plan.id)}
                    className={`relative rounded-3xl p-8 border-2 cursor-pointer transition-all duration-300 flex flex-col ${
                      plan.highlight
                        ? "bg-gradient-to-br from-[#c41e3a] to-[#a01830] border-[#c41e3a] text-white shadow-2xl scale-105"
                        : activePlan === plan.id
                          ? "bg-white border-[#c41e3a] shadow-xl"
                          : "bg-white border-gray-200 hover:border-[#c41e3a] hover:shadow-lg"
                    }`}
                  >
                    {plan.highlight && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-1.5 rounded-full shadow">
                          ⭐ Most Popular
                        </span>
                      </div>
                    )}

                    <div className="mb-6">
                      <p
                        className={`text-sm font-semibold mb-1 ${plan.highlight ? "text-yellow-300" : "text-[#c41e3a]"}`}
                      >
                        {plan.subtitle}
                      </p>
                      <h3
                        className={`text-2xl font-black mb-2 ${plan.highlight ? "text-white" : "text-gray-900"}`}
                      >
                        {plan.name}
                      </h3>
                      <div className="flex items-end gap-2 mb-3">
                        <span
                          className={`text-5xl font-black ${plan.highlight ? "text-white" : "text-[#c41e3a]"}`}
                        >
                          £{plan.price}
                        </span>
                        <span
                          className={`text-sm mb-2 ${plan.highlight ? "text-white/70" : "text-gray-500"}`}
                        >
                          {plan.per}
                        </span>
                      </div>
                      <p
                        className={`text-sm leading-relaxed ${plan.highlight ? "text-white/80" : "text-gray-600"}`}
                      >
                        {plan.description}
                      </p>
                    </div>

                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check
                            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-yellow-400" : "text-green-500"}`}
                          />
                          <span
                            className={`text-sm ${plan.highlight ? "text-white" : "text-gray-700"}`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/book-now"
                      className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                        plan.highlight
                          ? "bg-yellow-400 hover:bg-yellow-300 text-gray-900"
                          : "bg-[#c41e3a] hover:bg-[#a01830] text-white"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Liverpool Coverage */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                  Areas We Cover in Liverpool
                </h2>
                <p className="text-gray-600 text-base sm:text-lg">
                  Zell Driving operates exclusively across Liverpool. Find your
                  area below.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {liverpoolAreas.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700 hover:border-[#c41e3a] hover:text-[#c41e3a] transition-colors"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Our Pricing */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
                Why Choose Zell Driving's Pricing?
              </h2>
              <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    title: "Fair & Transparent",
                    desc: "No hidden fees. What you see is what you pay — straightforward Liverpool rates.",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    ),
                  },
                  {
                    title: "Special Discounts",
                    desc: "Blue Light Card holders and students save on every lesson with Zell Driving.",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    ),
                  },
                  {
                    title: "Flexible Plans",
                    desc: "Pay hourly, weekly or monthly — whatever works best for your lifestyle and budget.",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    ),
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="text-center p-6 bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-[#c41e3a] transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-[#c41e3a] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {item.icon}
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Ready to get started? Choose the plan that suits you and book
                your first lesson with Zell Driving in Liverpool today.
              </p>
              <Link
                href="/book-now"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Book Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
