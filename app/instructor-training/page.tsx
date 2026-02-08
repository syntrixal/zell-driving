"use client";

import { PageShell } from "@/components/PageShell";
import { PAGE_CONTENT } from "@/lib/pageContent";
import Link from "next/link";
import { ArrowRight, Calendar, Smile, Dumbbell, Car, CheckCircle, DollarSign, MapPin, GraduationCap, BookOpen, Users, Award, Star } from "lucide-react";
import { useState } from "react";

const whyBecomeInstructor = [
  {
    icon: Calendar,
    title: "Flexible Work Schedule",
    description: "Set your own schedule and work hours to suit your lifestyle. Being a driving instructor gives you the freedom to choose your hours."
  },
  {
    icon: Smile,
    title: "Make a Positive Impact",
    description: "Transform lives by teaching a vital skill. You're not just teaching driving - you're giving people the freedom and confidence to explore the world."
  },
  {
    icon: Dumbbell,
    title: "Diverse and Engaging Students",
    description: "Work with people of all ages and backgrounds, getting real-time human-to-person coaching and creating lifelong learner just starting."
  },
  {
    icon: Car,
    title: "Comfortable Work Environment",
    description: "Use premium vehicles. Most ADIs enjoy the comfort of modern cars that are well-maintained, making from your own car while experiencing the freedom."
  },
  {
    icon: CheckCircle,
    title: "Financial Benefits and Tax Savings",
    description: "Self-employment tax benefits mean you could boost your earnings through tax deductions on expenses like fuel, maintenance, and vehicle payments."
  },
  {
    icon: DollarSign,
    title: "Consistent Demand and Income",
    description: "The driving instruction industry is stable and recession-resistant. Becoming the demand for driving instruction is constant. Enjoy financial stability and dependable income!"
  },
  {
    icon: MapPin,
    title: "Contribute to Safer Roads",
    description: "Feel proud knowing you're improving road safety by training safer drivers. You're helping shape safer, more confident road users."
  }
];

const whyTrainWithUs = [
  {
    title: "Modern Teaching Techniques",
    description: "Stay ahead of the curve with the latest teaching methods and tools, ensuring drivers be highly professional, techniques coach successful and award-trained."
  },
  {
    title: "Comprehensive Training for ADI Qualification",
    description: "Our program covers everything you need to become a fully qualified approved driving instructor (ADI) under the DVSA standards."
  },
  {
    title: "Career Development and Ongoing Support",
    description: "We don't just help you to pass the test -- we help you build a successful career with ongoing coaching, mentorship and business training."
  },
  {
    title: "Flexible Payment Options",
    description: "We offer flexible payment plans to suit your budget, making it easier to start your career without financial stress."
  }
];

const testimonials = [
  {
    name: "Paul Hussain",
    text: "I enjoy teaching and helping students become safe drivers. This career gives me the flexibility to spend time with my family while earning a great income.",
    rating: 5
  },
  {
    name: "Sarah Mitchell",
    text: "The training was comprehensive and the support team was amazing. I passed my ADI test first time and now run my own successful driving school.",
    rating: 5
  },
  {
    name: "James Thompson",
    text: "Best decision I ever made. The flexibility and earning potential are excellent, plus I get genuine satisfaction from helping people achieve their goals.",
    rating: 5
  }
];

export default function InstructorTrainingPage() {
  const content = PAGE_CONTENT.instructorTraining;
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <PageShell title={content.title} intro={content.intro}>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Join our ADI Training in Manchester today and get started towards a new career
              </h2>
            </div>
          </div>
        </section>

        {/* Yellow CTA Banner */}
        <section className="py-8 sm:py-12 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="text-gray-900">
                  <p className="text-lg sm:text-xl leading-relaxed">
                    Looking for a fulfilling career with flexibility and high earning potential? Become a driving instructor with Drive 4 Pass. Enjoy the freedom of being your own boss, the reward of transforming lives, and the security of consistent demand. Start your journey today with our award-winning instructor training program.
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-2 border-gray-900">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    Ready to get started? Contact us today to learn more about our instructor training!
                  </h3>
          <Link
                    href="/book-now"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
                    Contact Us
                    <ArrowRight className="h-5 w-5" />
          </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Become Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
                Why Become a Driving Instructor with Drive 4 Pass?
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {whyBecomeInstructor.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="text-center p-6 sm:p-8 bg-gray-50 hover:bg-white border-2 border-gray-200 hover:border-[#c41e3a] rounded-2xl transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="w-16 h-16 bg-[#c41e3a] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Video/Image Banner */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-gradient-to-br from-green-500 to-green-600 rounded-2xl overflow-hidden shadow-2xl aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="mb-4">
                      <GraduationCap className="w-20 h-20 mx-auto" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                      Start Your Instructor Training
                    </h3>
                    <p className="text-lg sm:text-xl mb-4">
                      Transform Your Career with Drive 4 Pass
                    </p>
                    <div className="bg-white text-green-600 px-6 py-3 rounded-full font-bold inline-block">
                      DRIVE4PASS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Email CTA */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Ready to start a rewarding career? Contact us today to begin your instructor training!
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email/mobile"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 max-w-md px-6 py-4 border-2 border-gray-300 rounded-lg focus:border-[#c41e3a] focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Why Train With Us */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
                Why Train with Drive 4 Pass?
              </h2>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {whyTrainWithUs.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 sm:gap-6 p-6 sm:p-8 bg-white border-2 border-gray-200 hover:border-[#c41e3a] rounded-2xl transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#c41e3a] rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
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
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
                Hear from Our Successful Instructors
              </h2>

              <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border-2 border-gray-200 hover:border-[#c41e3a] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg"
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 italic">
                      "{testimonial.text}"
                    </p>

                    {/* Name */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#c41e3a] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">Certified ADI</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-[#c41e3a] to-[#a01830]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to start your success story? Contact us today to begin your training!
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/book-now"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-100 text-[#c41e3a] font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Start Your Training
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="tel:03333357000"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold rounded-full border-2 border-white transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  0333 335 7000
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Cards */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl">
                <div className="w-16 h-16 bg-[#c41e3a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">DVSA Approved</h3>
                <p className="text-gray-600 text-sm">
                  Authorised & regulated by the DVSA for quality training
                </p>
              </div>

              <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl">
                <div className="w-16 h-16 bg-[#c41e3a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Trainers</h3>
                <p className="text-gray-600 text-sm">
                  Learn from experienced ADIs with proven track records
                </p>
              </div>

              <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl">
                <div className="w-16 h-16 bg-[#c41e3a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Support</h3>
                <p className="text-gray-600 text-sm">
                  Ongoing guidance and resources throughout your journey
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}