"use client";

import { PageShell } from "@/components/PageShell";
import { PAGE_CONTENT } from "@/lib/pageContent";
import Link from "next/link";
import { ArrowRight, CheckCircle, ChevronDown, Info } from "lucide-react";
import { useState } from "react";

const whyChooseReasons = [
  {
    text: "Accredited, professional, patient and encouraging instructors.",
  },
  {
    text: "Lessons 7 days a week, Weekend, Weekday and Evening courses available.",
  },
  {
    text: "Free unlimited online theory training.",
  },
  {
    text: "Modern vehicles with air conditioning for everybody's comfort.",
  },
  {
    text: "Intensive courses and last-minute test cancellations available.",
  },
  {
    text: "Test centre and residential pickups available.",
  },
  {
    text: "No hidden fees",
  },
  {
    text: "Prompt response - We will normally return your call/message within the hour (although can be longer at busy times)",
  },
];

const faqItems = [
  {
    id: 1,
    question: "DO YOU OFFER 'BLUE LIGHT' DISCOUNTS?",
    answer: "Yes! We are proud to support our Emergency and armed services and offer a £5 discount off our 2hr lessons. This also applies to students."
  },
  {
    id: 2,
    question: "HOW CAN I PAY FOR THE COURSE?",
    answer: "We accept various payment methods including cash, bank transfer, and card payments. Payment is typically required before or at the start of each lesson. For block bookings, we offer flexible payment plans."
  },
  {
    id: 3,
    question: "WHAT IF I NEED TO CANCEL MY LESSON?",
    answer: "We require at least 48 hours notice for cancellations. If you cancel with less notice, you may be charged for the lesson. However, we understand emergencies happen and will work with you on a case-by-case basis."
  },
  {
    id: 4,
    question: "DO I NEED ANY EXPERIENCE BEFORE MY FIRST LESSON?",
    answer: "No experience is necessary! Our instructors are trained to work with complete beginners. We'll start from the basics and progress at a pace that's comfortable for you."
  },
  {
    id: 5,
    question: "WHAT WILL I NEED TO BRING TO MY FIRST LESSON?",
    answer: "You'll need to bring your provisional driving licence (both the photocard and paper counterpart if you have one). We also recommend wearing comfortable shoes and bringing glasses if you need them for driving."
  },
  {
    id: 6,
    question: "HOW MANY LESSONS WILL I NEED?",
    answer: "The number of lessons varies for each person. On average, learners need between 40-50 hours of professional instruction, plus additional private practice. Your instructor will assess your progress and give you a realistic estimate."
  },
  {
    id: 7,
    question: "CAN I USE YOUR CAR FOR MY DRIVING TEST?",
    answer: "Yes! We offer test day packages where you can use our vehicle for your test. This includes the car hire and an instructor to accompany you to the test centre."
  },
  {
    id: 8,
    question: "DO YOU OFFER INTENSIVE COURSES?",
    answer: "Yes, we offer intensive driving courses for those who want to learn quickly. These courses typically run over 1-2 weeks with multiple lessons per day. Contact us to discuss the best intensive course for your needs."
  },
];

export default function FaqPage() {
  const content = PAGE_CONTENT.faq;
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <PageShell title={content.title} intro={content.intro}>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Why Choose Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
                Why choose Drive4Pass Driving School over another school?
              </h2>

              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                {whyChooseReasons.map((reason, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-4 sm:p-6 bg-gray-50 hover:bg-white border-2 border-gray-100 hover:border-[#c41e3a] rounded-xl transition-all duration-300 hover:shadow-lg"
                  >
                    {/* Check Icon */}
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#c41e3a] group-hover:bg-[#a01830] rounded-lg flex items-center justify-center transition-colors duration-300">
                      <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>

                    {/* Text */}
                    <div className="flex-1 pt-2">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {reason.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blue Light Discount Banner */}
        <section className="py-8 sm:py-12 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 sm:gap-4 justify-center text-center">
                <Info className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                    DO YOU OFFER 'BLUE LIGHT' DISCOUNTS?
                  </h3>
                </div>
              </div>
              <div className="mt-4 sm:mt-6 text-center space-y-3">
                <p className="text-base sm:text-lg text-gray-800 font-semibold">
                  Yes! We are proud to support our Emergency and armed services and offer a £5 discount off our 2hr lessons.
                </p>
                <p className="text-sm sm:text-base text-gray-700">
                  This also applies to students
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-base sm:text-lg text-gray-600">
                  Find answers to common questions about our driving lessons
                </p>
              </div>

              <div className="space-y-4">
                {faqItems.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#c41e3a]"
                  >
                    {/* Question Button */}
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-3 sm:gap-4 flex-1">
                        <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                          openFaqId === faq.id ? 'bg-[#c41e3a]' : 'bg-gray-200'
                        }`}>
                          <Info className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                            openFaqId === faq.id ? 'text-white' : 'text-gray-600'
                          }`} />
                        </div>
                        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 sm:w-6 sm:h-6 text-[#c41e3a] flex-shrink-0 transition-transform duration-300 ${
                          openFaqId === faq.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Answer */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaqId === faq.id ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="p-4 sm:p-6 pt-0 sm:pl-20">
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Have a question about booking, payments, or how our lessons run? Contact us and we'll be happy to talk things through.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/book-now"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#c41e3a]/30 hover:scale-105"
                >
                  Contact Us
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="tel:03333357000"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-bold rounded-full border-2 border-gray-300 hover:border-[#c41e3a] transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-[#c41e3a]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  0333 335 7000
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Info Cards */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 sm:p-8 bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-[#c41e3a] transition-all duration-300">
                <div className="w-16 h-16 bg-[#c41e3a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Response</h3>
                <p className="text-gray-600 text-sm">
                  We'll get back to you within an hour during business hours
                </p>
              </div>

              <div className="text-center p-6 sm:p-8 bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-[#c41e3a] transition-all duration-300">
                <div className="w-16 h-16 bg-[#c41e3a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">No Hidden Fees</h3>
                <p className="text-gray-600 text-sm">
                  Transparent pricing with no surprise charges
                </p>
              </div>

              <div className="text-center p-6 sm:p-8 bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-[#c41e3a] transition-all duration-300">
                <div className="w-16 h-16 bg-[#c41e3a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Scheduling</h3>
                <p className="text-gray-600 text-sm">
                  7 days a week, including evenings and weekends
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}