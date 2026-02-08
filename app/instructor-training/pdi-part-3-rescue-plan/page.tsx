"use client";

import { PageShell } from "@/components/PageShell";
import { PAGE_CONTENT } from "@/lib/pageContent";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle,
  Target,
  BookOpen,
  Users,
  TrendingUp,
  Award,
  Calendar,
  Clock,
  Phone,
  MessageSquare,
  Star,
  Shield,
  Zap,
  RefreshCw,
  BarChart,
  Lightbulb,
  MessageCircle,
  FileCheck,
  GraduationCap,
  ThumbsUp
} from "lucide-react";
import { useState } from "react";

const rescuePlanDays = [
  {
    day: 1,
    title: "Diagnostic & Goal Setting",
    icon: Target,
    tasks: [
      "Initial assessment of your strengths and weaknesses",
      "Personalized training plan based on your needs",
      "Setting clear, actionable goals for the week"
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    day: 2,
    title: "Risk Management Mastery",
    icon: Shield,
    tasks: [
      "Learn how to identify critical risks in Part 3",
      "Practical strategies to avoid and manage risk",
      "Confidence to handle high-pressure situations"
    ],
    color: "from-purple-500 to-purple-600"
  },
  {
    day: 3,
    title: "Lesson Planning & Structure",
    icon: BookOpen,
    tasks: [
      "Structured, effective lesson plans",
      "Analyzing lessons to patch skills and voids",
      "Get proven 5 Step Lesson Process"
    ],
    color: "from-green-500 to-green-600"
  },
  {
    day: 4,
    title: "Teaching & Learning Strategies",
    icon: Users,
    tasks: [
      "Adapting your style to different learners",
      "Encouraging independence and reflection",
      "Winning student engaging and instructive"
    ],
    color: "from-orange-500 to-orange-600"
  },
  {
    day: 5,
    title: "Fault Identification & Analysis",
    icon: BarChart,
    tasks: [
      "Spotting faults quickly and accurately",
      "Prioritizing faults simply and clearly",
      "Correcting techniques to correct mistakes"
    ],
    color: "from-red-500 to-red-600"
  },
  {
    day: 6,
    title: "Feedback & Reflective Practice",
    icon: MessageCircle,
    tasks: [
      "Structured feedback without waffling verbosity",
      "Useful and reformative for pupils",
      "Wrap-to-may own learning habits"
    ],
    color: "from-pink-500 to-pink-600"
  },
  {
    day: 7,
    title: "Mock Test & Final Preparation",
    icon: GraduationCap,
    tasks: [
      "Full Part 3 mock under realistic conditions",
      "Detailed feedback with clear action points",
      "Final tips to boost confidence for test day"
    ],
    color: "from-indigo-500 to-indigo-600"
  }
];

const whyChooseRescuePlan = [
  {
    icon: Target,
    title: "Designed for PDIs who have failed Part 3",
    description: "Targeted specifically at those who've struggled before"
  },
  {
    icon: Award,
    title: "Covers all 17 DVSA Competencies step by step",
    description: "Comprehensive coverage of every requirement"
  },
  {
    icon: Users,
    title: "Mix of 1-to-1 practice, classroom sessions & study material",
    description: "Multi-modal learning approach for best results"
  },
  {
    icon: TrendingUp,
    title: "Proven track record of success across the North West",
    description: "Hundreds of successful PDIs trained and qualified"
  }
];

const successStats = [
  { number: "95%", label: "Pass Rate", icon: ThumbsUp },
  { number: "7 Days", label: "Transform Your Skills", icon: Calendar },
  { number: "17", label: "DVSA Competencies", icon: FileCheck },
  { number: "100+", label: "Success Stories", icon: Star }
];

const testimonials = [
  {
    name: "Emma Richardson",
    text: "I'd failed my Part 3 twice and was ready to give up. The Rescue Plan broke everything down so clearly - I finally understood the 17 Competencies and passed on my next attempt!",
    rating: 5,
    attempt: "Passed after 2 failures"
  },
  {
    name: "Mohammed Khan",
    text: "The personalized approach made all the difference. My trainer identified exactly where I was going wrong and gave me practical solutions. Passed first time after the rescue plan!",
    rating: 5,
    attempt: "Passed after 1 failure"
  },
  {
    name: "Lisa Thompson",
    text: "Best investment I made. The 7-day structure kept me focused, and the mock test was invaluable. I felt so prepared going into my real Part 3 test.",
    rating: 5,
    attempt: "Passed after 3 failures"
  }
];

export default function PDIPart3RescuePlanPage() {
  const content = PAGE_CONTENT.instructorTraining;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attempts: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <PageShell title="PDI Part 3 Rescue Plan" intro="Turn setbacks into success">
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-[#c41e3a]">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="container mx-auto px-4 py-20 sm:py-28 relative">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-yellow-400 px-5 py-2 rounded-full text-gray-900 text-sm font-bold mb-8 shadow-lg">
                <Zap className="w-4 h-4" />
                <span>Turn Failure Into Success</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
                PDI Part 3 Rescue Plan
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-200 mb-4 leading-relaxed">
                Failing your Part 3 test doesn't mean you can't become a great instructor
              </p>

              <p className="text-lg sm:text-xl text-yellow-300 mb-10 font-semibold">
                It simply means you need the right support and structure. That's exactly what our 
                <span className="text-yellow-400 font-black"> 7-Day PDI Rescue Plan</span> delivers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#book-now"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold rounded-full transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50 hover:scale-105"
                >
                  Book Your Rescue Plan
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:03333357000"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  0333 335 7000
                </a>
              </div>
            </div>
          </div>

          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Success Stats */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {successStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-[#c41e3a] to-[#a01830] rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-3xl sm:text-4xl font-black text-[#c41e3a] mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 font-semibold">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-6">
                Designed for Trainee Driving Instructors (PDIs)<br />
                Who Are Struggling with Part 3
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                This programme gives you the <strong className="text-[#c41e3a]">confidence, clarity and 
                practical skills</strong> to succeed. With a proven track record of helping PDIs pass 
                after multiple attempts, we guide you every step of the way.
              </p>
              <div className="inline-flex items-center gap-2 bg-green-100 border-2 border-green-500 px-6 py-3 rounded-full text-green-800 font-bold">
                <CheckCircle className="w-5 h-5" />
                <span>95%+ Success Rate After Our Programme</span>
              </div>
            </div>
          </div>
        </section>

        {/* 7-Day Rescue Plan Timeline */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4">
                  Your 7-Day Rescue Plan
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  A structured, intensive programme designed to address every weakness 
                  and build your confidence for exam success
                </p>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Vertical line - hidden on mobile, shown on larger screens */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500"></div>

                <div className="space-y-12">
                  {rescuePlanDays.map((day, index) => {
                    const Icon = day.icon;
                    const isEven = index % 2 === 0;

                    return (
                      <div
                        key={index}
                        className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                          isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                        }`}
                      >
                        {/* Content Card */}
                        <div className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-gray-100 hover:border-[#c41e3a] transition-all duration-300 hover:shadow-2xl">
                            <div className={`flex items-center gap-3 mb-4 ${isEven ? 'lg:flex-row-reverse lg:justify-end' : 'lg:justify-start'}`}>
                              <div className={`w-12 h-12 bg-gradient-to-br ${day.color} rounded-xl flex items-center justify-center`}>
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                                {day.title}
                              </h3>
                            </div>

                            <ul className={`space-y-3 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-left`}>
                              {day.tasks.map((task, taskIndex) => (
                                <li key={taskIndex} className={`flex items-start gap-3 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-700">{task}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Day Number Circle */}
                        <div className="relative z-10 flex-shrink-0">
                          <div className={`w-20 h-20 bg-gradient-to-br ${day.color} rounded-full flex items-center justify-center shadow-2xl border-4 border-white`}>
                            <div className="text-center">
                              <div className="text-xs font-bold text-white/80">Day</div>
                              <div className="text-2xl font-black text-white">{day.day}</div>
                            </div>
                          </div>
                        </div>

                        {/* Spacer for alignment */}
                        <div className="hidden lg:block w-5/12"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Rescue Plan */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4">
                  Why Choose Our Rescue Plan?
                </h2>
                <p className="text-lg text-gray-600">
                  Purpose-built for PDIs who need targeted, intensive support
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {whyChooseRescuePlan.map((reason, index) => {
                  const Icon = reason.icon;
                  return (
                    <div
                      key={index}
                      className="flex gap-6 p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl hover:border-[#c41e3a] hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#c41e3a] to-[#a01830] rounded-xl flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {reason.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Success Story / Testimonials */}
        <section className="py-16 sm:py-24 bg-gray-900 text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c41e3a] rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-black mb-4">
                  Recent PDI Success Stories
                </h2>
                <p className="text-lg text-gray-300">
                  Real results from real people who were exactly where you are now
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-200 leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="pt-6 border-t border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#c41e3a] to-[#a01830] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-bold text-white">{testimonial.name}</p>
                          <p className="text-sm text-yellow-400">{testimonial.attempt}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section id="book-now" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4">
                  Ready to Take the Next Step?
                </h2>
                <p className="text-lg text-gray-600">
                  Don't let past setbacks hold you back. With the right plan, you can pass.
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-2xl border-2 border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-[#c41e3a] to-[#a01830] p-8 text-center">
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                    Book Your 7-Day Rescue Plan
                  </h3>
                  <p className="text-yellow-200">
                    Spaces are limited to keep training personal and effective
                  </p>
                </div>

                <div className="p-8 sm:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#c41e3a] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#c41e3a] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="07XX XXX XXXX"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#c41e3a] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        How many times have you attempted Part 3? *
                      </label>
                      <select
                        name="attempts"
                        value={formData.attempts}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#c41e3a] focus:outline-none transition-colors appearance-none bg-white"
                      >
                        <option value="">-- Please select --</option>
                        <option value="1">1 attempt</option>
                        <option value="2">2 attempts</option>
                        <option value="3">3 attempts</option>
                        <option value="4+">4+ attempts</option>
                      </select>
                    </div>

                    <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-blue-900">
                          <strong>What happens next?</strong> We'll call you within 24 hours to discuss 
                          your specific needs, answer questions, and schedule your rescue plan at a time 
                          that works for you.
                        </p>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-[#c41e3a] to-[#a01830] hover:from-[#a01830] hover:to-[#c41e3a] text-white font-black text-lg rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3"
                    >
                      Book Your Rescue Plan Now
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact alternatives */}
              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-6 font-semibold">
                  Prefer to speak with someone first?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:03333357000"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-[#c41e3a] text-[#c41e3a] hover:bg-[#c41e3a] hover:text-white font-bold rounded-full transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    Call 0333 335 7000
                  </a>
                  <a
                    href="https://wa.me/447399121111"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold rounded-full transition-all duration-300"
                  >
                    <MessageSquare className="w-5 h-5" />
                    WhatsApp 0739 912 1111
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-900 to-[#c41e3a] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <RefreshCw className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
              <h2 className="text-3xl sm:text-5xl font-black mb-6">
                Transform Setback into Success
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Spaces are limited to keep training personal and effective — secure your 
                place today and take the first step toward finally passing Part 3.
              </p>
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <a
                  href="#book-now"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Calendar className="w-5 h-5" />
                  Book Your Rescue Plan
                </a>
                <a
                  href="tel:03333357000"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Speak to Us Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <section className="py-8 bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-gray-400 text-sm">
                <strong className="text-white">Authorised & regulated by the DVSA</strong>
                <span className="mx-2">•</span>
                <Link href="/terms" className="hover:text-white transition-colors">Terms and Conditions</Link>
                <span className="mx-2">•</span>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
                <span className="mx-2">•</span>
                <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy (UK)</Link>
              </p>
              <p className="text-gray-500 text-xs mt-4">
                © {new Date().getFullYear()} Drive 4 Pass Driving School. All rights reserved.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}