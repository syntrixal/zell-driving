"use client";

import { PageShell } from "@/components/PageShell";
import { PAGE_CONTENT } from "@/lib/pageContent";
import Link from "next/link";
import { ArrowRight, CheckCircle, Users, TrendingUp, Clock, Briefcase, Headphones, GraduationCap, Target, Award, Star, Phone, Mail } from "lucide-react";
import { useState } from "react";

const franchiseBenefits = [
  {
    icon: Briefcase,
    title: "Flexible and Affordable Packages",
    description: "Enjoy the freedom to grow your own business without being tied down by long-term contracts. Our flexible franchise packages are designed to fit your needs and budget."
  },
  {
    icon: Users,
    title: "Expert Support and Guidance",
    description: "Our experienced team provides ongoing support and guidance, helping you become the best driving instructor you can be. We're with you every step of the way – from filling the diary to enhancing your personal goals."
  },
  {
    icon: GraduationCap,
    title: "Modern Teaching Tools",
    description: "Stay ahead of the competition with the latest teaching tools. We equip all our instructors with iPads, ensuring up-to-date, modern training tailored to today's learners."
  },
  {
    icon: Target,
    title: "Exclusive Training",
    description: "Partner with the best in the industry. Our exclusive collaboration with Knowledgeable Instructor Training keeps your skills sharp and relevant, helping you meet client needs and maintain a full diary."
  },
  {
    icon: Clock,
    title: "Work-Life Balance and Earning Potential",
    description: "Build your own schedule and achieve the work-life balance you desire, all while maximizing your earning potential. Our franchise model lets you grow at your own pace."
  }
];

const whatYouGet = [
  {
    title: "No Long-Term Contracts",
    description: "Stay in control of your career. Our flexible terms mean you're not locked into lengthy commitments, giving you the freedom to grow at your own pace."
  },
  {
    title: "Marketing and Student Leads",
    description: "Receive high-quality student leads through our targeted marketing campaigns, ensuring your diary stays full without the hassle of finding clients yourself."
  },
  {
    title: "Professional Development and Training",
    description: "Access exclusive training programs from Zell Driving School Instructor Training to keep your skills sharp and relevant to today's driving standards."
  },
  {
    title: "Modern Teaching Tools",
    description: "All instructors are equipped with iPads to deliver interactive, client-centered learning, enhancing the student experience and boosting your success rate."
  },
  {
    title: "Dedicated Support Team",
    description: "Our expert support team is always on hand to help you with administrative tasks, lesson planning, and marketing strategies – so you can focus on teaching."
  },
  {
    title: "Competitive Franchise Fees",
    description: "Transparent pricing with no hidden costs. Our franchise packages are designed to provide excellent value while supporting your business growth."
  }
];

const testimonials = [
  {
    name: "Michael Johnson",
    role: "Franchise Partner",
    text: "Joining Zell Driving School was the best decision for my career. The support and leads keep my diary full, and I have complete control over my schedule.",
    rating: 5
  },
  {
    name: "Emma Williams",
    role: "Franchise Partner",
    text: "The modern tools and training have made me a better instructor. My students love the iPad-based learning, and my business has grown significantly.",
    rating: 5
  },
  {
    name: "David Brown",
    role: "Franchise Partner",
    text: "Flexible terms, great support, and consistent leads. I'm earning more than I ever did as an employed instructor while enjoying better work-life balance.",
    rating: 5
  }
];

export default function FranchisePage() {
  const content = PAGE_CONTENT.franchise;
  const [postcode, setPostcode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/book-now?postcode=${postcode}`;
  };

  return (
    <PageShell title={content.title} intro={content.intro}>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section with Image */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ae2027] to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-white">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                    Join our Successful Driving Instructor Franchise - Grow your career today
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                    Are you an Approved Driving Instructor looking to grow your business without the hassle of long-term commitments? Join Zell Driving School and benefit from flexible franchise packages, expert support, and modern teaching tools that help you succeed. Start filling your diary and achieve the work-life balance you desire.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/book-now"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#ae2027] hover:bg-[#8a191f] text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Get Started Today
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                    <a
                      href="tel:03333357000"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border-2 border-white transition-all duration-300"
                    >
                      <Phone className="h-5 w-5" />
                      0333 335 7000
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-[#ae2027] to-[#8a191f] rounded-3xl p-8 shadow-2xl">
                    <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                          <Briefcase className="w-12 h-12 text-[#ae2027]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          Franchise Opportunities
                        </h3>
                        <p className="text-white/90">
                          Flexible packages designed for your success
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Yellow CTA Banner */}
        <section className="py-8 sm:py-12 bg-gradient-to-r from-yellow-400 to-yellow-500">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Advance your Driving Instructor career and join a fast growing franchise offering driving lessons & intensive driving courses in Manchester
              </h3>
              <p className="text-lg text-gray-800 mb-8 max-w-4xl mx-auto">
                Partner with a trusted brand and gain access to modern teaching tools, dedicated support, and a steady stream of student leads.
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Franchise Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Why Join Zell Driving School Franchise?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Build a successful driving instruction business with our proven franchise model
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {franchiseBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-gray-50 hover:bg-white border-2 border-gray-200 hover:border-[#ae2027] rounded-2xl p-8 transition-all duration-300 hover:shadow-xl"
                    >
                      <div className="w-16 h-16 bg-[#ae2027] group-hover:bg-[#8a191f] rounded-full flex items-center justify-center mb-6 transition-colors">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Postcode CTA */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white border-y border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border-2 border-gray-200">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6">
                  Ready to pass your test fast? Book your intensive driving course now!
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Enter your postcode"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-lg focus:border-[#ae2027] focus:outline-none text-lg"
                    required
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-[#ae2027] hover:bg-[#8a191f] text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                  >
                    Start Here
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  What You Get with Our Franchise
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Comprehensive support and resources to help you build a thriving business
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {whatYouGet.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-6 bg-gray-50 hover:bg-white border-2 border-gray-200 hover:border-[#ae2027] rounded-xl transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#ae2027] rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Success Stories from Our Franchise Partners
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Hear from instructors who've grown their careers with Zell Driving School
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-gray-200 hover:border-[#ae2027] rounded-2xl p-8 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#ae2027] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-[#ae2027] mb-2">500+</div>
                  <p className="text-gray-600 font-medium">Active Instructors</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-[#ae2027] mb-2">95%</div>
                  <p className="text-gray-600 font-medium">Partner Satisfaction</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-[#ae2027] mb-2">10K+</div>
                  <p className="text-gray-600 font-medium">Students Taught</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-[#ae2027] mb-2">24/7</div>
                  <p className="text-gray-600 font-medium">Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-[#ae2027] to-[#8a191f]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Join Our Growing Franchise?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Take the first step towards building your own successful driving instruction business today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        href="/book-now"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-gray-100 text-[#ae2027] font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
      >
                  Apply Now
                  <ArrowRight className="h-5 w-5" />
      </Link>
                <a
                  href="tel:03333357000"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold rounded-full border-2 border-white transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  0333 335 7000
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-[#ae2027] transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#ae2027] rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Call Us</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Speak to our franchise team</p>
                  <a href="tel:03333357000" className="text-2xl font-bold text-[#ae2027] hover:text-[#8a191f]">
                    0333 335 7000
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-[#ae2027] transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#ae2027] rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Email Us</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Get franchise information</p>
                  <a href="mailto:franchise@zelldrivingschool.co.uk" className="text-lg font-bold text-[#ae2027] hover:text-[#8a191f] break-all">
                    franchise@zelldrivingschool.co.uk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}