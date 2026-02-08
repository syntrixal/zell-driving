"use client";

import { PageShell } from "@/components/PageShell";
import { PAGE_CONTENT } from "@/lib/pageContent";
import Link from "next/link";
import { 
  ArrowRight, 
  Clock, 
  TrendingUp, 
  Users, 
  Shield,
  Award,
  BookOpen,
  Briefcase,
  ChevronRight,
  Check,
  Phone,
  Mail,
  MapPin,
  Star,
  Zap,
  Target,
  Heart
} from "lucide-react";
import { useState } from "react";

const trainingBenefits = [
  {
    icon: Clock,
    title: "Flexible Training Schedule",
    description: "Train at your own pace with flexible scheduling options that fit around your current commitments."
  },
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "Master all three ADI exam parts with expert guidance and proven training methodologies."
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn from seasoned instructors with years of real-world teaching experience."
  },
  {
    icon: Award,
    title: "DVSA Approved",
    description: "Fully accredited training program meeting all DVSA standards and requirements."
  }
];

const jobBenefits = [
  {
    icon: TrendingUp,
    title: "Competitive Earnings",
    description: "Earn £25,000-£40,000+ per year with unlimited growth potential as you build your client base."
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Set your own hours and work schedule. Perfect for those seeking flexibility and autonomy."
  },
  {
    icon: Users,
    title: "Steady Student Flow",
    description: "Benefit from our established brand and marketing to maintain a consistent stream of students."
  },
  {
    icon: Shield,
    title: "Full Support System",
    description: "Ongoing administrative, marketing, and professional development support throughout your career."
  },
  {
    icon: Briefcase,
    title: "Flexible Working Options",
    description: "Choose between franchise partnership, self-employment, or using our dual-control vehicles."
  },
  {
    icon: Target,
    title: "Career Progression",
    description: "Opportunities to advance into senior roles, training positions, or expand your own driving school."
  }
];

const careerPaths = [
  {
    title: "Trainee Instructor",
    subtitle: "Start Your Journey",
    features: [
      "Complete ADI Part 1, 2 & 3 training",
      "Hands-on practical experience",
      "Dedicated trainer support",
      "Flexible payment plans available"
    ],
    cta: "Begin Training",
    highlight: false
  },
  {
    title: "Qualified ADI",
    subtitle: "Launch Your Career",
    features: [
      "Franchise partnership opportunities",
      "Full marketing & admin support",
      "Access to dual-control vehicles",
      "Ongoing professional development",
      "Competitive commission structure"
    ],
    cta: "Join Our Team",
    highlight: true
  }
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "ADI - 3 years",
    text: "Best career decision I ever made. The training was thorough, and the support from Drive 4 Pass has been incredible. I'm now earning more than I did in my previous corporate job with much better work-life balance.",
    rating: 5,
    location: "Manchester"
  },
  {
    name: "James Thompson",
    role: "ADI - 2 years",
    text: "The flexibility is unbeatable. I can work around my family commitments while still earning a great income. The student flow from Drive 4 Pass means I'm never short of work.",
    rating: 5,
    location: "Salford"
  },
  {
    name: "Priya Patel",
    role: "ADI - 1 year",
    text: "Transitioning careers can be daunting, but Drive 4 Pass made it seamless. Their training program prepared me thoroughly, and I passed all three parts on my first attempt!",
    rating: 5,
    location: "Bolton"
  }
];

const whyDrive4Pass = [
  {
    title: "Established Brand",
    description: "Leverage our trusted reputation and 15+ years in the industry"
  },
  {
    title: "Proven Track Record",
    description: "95%+ first-time pass rate for our ADI trainees"
  },
  {
    title: "Modern Fleet",
    description: "Access to well-maintained, dual-control vehicles with latest safety features"
  },
  {
    title: "Marketing Support",
    description: "Professional website, online booking system, and local advertising"
  },
  {
    title: "Nationwide Network",
    description: "Join a community of over 100+ qualified instructors across the UK"
  },
  {
    title: "Continuous Training",
    description: "Regular CPD sessions, standards checks support, and skills updates"
  }
];

export default function InstructorJobsPage() {
  const content = PAGE_CONTENT.instructorTraining;
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    postcode: "",
    franchise: "",
    training: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <PageShell title={content.title} intro={content.intro}>
      <div className="min-h-screen bg-white">
        {/* Hero Section - Bold & Impactful */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#c41e3a] to-gray-900">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="container mx-auto px-4 py-20 sm:py-28 relative">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold mb-8 border border-white/30">
                <Zap className="w-4 h-4" />
                <span>Now Hiring Nationwide</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
                Driving Instructor Jobs<br />
                <span className="text-yellow-400">in Manchester</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                Start your new flexible, rewarding career with Drive 4 Pass
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#apply"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold rounded-full transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50 hover:scale-105"
                >
                  Apply Now
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

        {/* Quick Stats */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "£25k-£40k+", sublabel: "Annual Earnings" },
                  { label: "Flexible", sublabel: "Working Hours" },
                  { label: "100+", sublabel: "Qualified ADIs" },
                  { label: "15+ Years", sublabel: "Industry Experience" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
                    <div className="text-3xl sm:text-4xl font-black text-[#c41e3a] mb-2">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-600 font-semibold">
                      {stat.sublabel}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-6">
                Ready to Make a Difference?
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
                Whether you're just starting or are an experienced Approved Driving Instructor (ADI), 
                Drive 4 Pass has exciting opportunities waiting for you. Join our award-winning team, 
                enjoy open earnings potential, and grow your career with one of the UK's most trusted 
                driving schools.
              </p>
              <div className="inline-flex items-center gap-2 text-[#c41e3a] font-bold text-lg">
                <Heart className="w-6 h-6 fill-current" />
                <span>Start your journey today!</span>
              </div>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4">
                  Choose Your Path
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Whether you're starting from scratch or already qualified, we have the perfect opportunity for you
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {careerPaths.map((path, index) => (
                  <div
                    key={index}
                    className={`relative rounded-3xl p-8 sm:p-10 transition-all duration-300 ${
                      path.highlight
                        ? 'bg-gradient-to-br from-[#c41e3a] to-[#a01830] text-white shadow-2xl scale-105 border-4 border-yellow-400'
                        : 'bg-white border-2 border-gray-200 hover:border-[#c41e3a] hover:shadow-xl'
                    }`}
                  >
                    {path.highlight && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                          ⭐ Most Popular
                        </div>
                      </div>
                    )}

                    <div className="mb-8">
                      <h3 className={`text-2xl sm:text-3xl font-black mb-2 ${
                        path.highlight ? 'text-white' : 'text-gray-900'
                      }`}>
                        {path.title}
                      </h3>
                      <p className={`text-lg font-semibold ${
                        path.highlight ? 'text-yellow-300' : 'text-[#c41e3a]'
                      }`}>
                        {path.subtitle}
                      </p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {path.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className={`w-6 h-6 flex-shrink-0 ${
                            path.highlight ? 'text-yellow-400' : 'text-green-500'
                          }`} />
                          <span className={`text-base ${
                            path.highlight ? 'text-white' : 'text-gray-700'
                          }`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#apply"
                      className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                        path.highlight
                          ? 'bg-yellow-400 hover:bg-yellow-300 text-gray-900'
                          : 'bg-[#c41e3a] hover:bg-[#a01830] text-white'
                      }`}
                    >
                      {path.cta}
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Job Benefits */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4">
                  Why Work with Drive 4 Pass?
                </h2>
                <p className="text-lg text-gray-600">
                  Join a team that values your success and provides the support you need to thrive
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="group p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-[#c41e3a] hover:shadow-xl transition-all duration-300"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-[#c41e3a] to-[#a01830] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
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

        {/* Training Benefits */}
        <section className="py-16 sm:py-24 bg-gray-900 text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-black mb-4">
                  Not Qualified Yet? No Problem!
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Our comprehensive ADI training program will guide you from complete beginner 
                  to fully qualified driving instructor
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {trainingBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-gray-900" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="text-center mt-12">
                <a
                  href="#apply"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold rounded-full transition-all duration-300 hover:scale-105"
                >
                  Start Your Training
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Drive 4 Pass - Grid */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4">
                  The Drive 4 Pass Advantage
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {whyDrive4Pass.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-[#c41e3a] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-[#c41e3a] rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
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
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4">
                  Hear from Our Team
                </h2>
                <p className="text-lg text-gray-600">
                  Real stories from real instructors who've transformed their careers
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#c41e3a] hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-6 border-t border-gray-200">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#c41e3a] to-[#a01830] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4">
                  Ready to Take the Next Step?
                </h2>
                <p className="text-lg text-gray-600">
                  Apply now and drive your career forward!
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-2xl border-2 border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-[#c41e3a] to-[#a01830] p-6 sm:p-8">
                  <h3 className="text-2xl font-black text-white text-center">
                    ADI Training Enquiry Form
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="First name"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#c41e3a] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Surname *
                      </label>
                      <input
                        type="text"
                        name="surname"
                        value={formData.surname}
                        onChange={handleChange}
                        placeholder="Last name"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#c41e3a] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Email *
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
                        Phone *
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
                      Postcode *
                    </label>
                    <input
                      type="text"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleChange}
                      placeholder="M1 1AA"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#c41e3a] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Are you currently with a franchise? *
                      </label>
                      <select
                        name="franchise"
                        value={formData.franchise}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#c41e3a] focus:outline-none transition-colors appearance-none bg-white"
                      >
                        <option value="">-- Please select --</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Have you already had any training? *
                      </label>
                      <select
                        name="training"
                        value={formData.training}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#c41e3a] focus:outline-none transition-colors appearance-none bg-white"
                      >
                        <option value="">-- Please select --</option>
                        <option value="none">No training</option>
                        <option value="part1">Part 1 passed</option>
                        <option value="part2">Part 2 passed</option>
                        <option value="part3">Part 3 passed</option>
                        <option value="qualified">Fully qualified ADI</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about yourself and your goals..."
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#c41e3a] focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#c41e3a] to-[#a01830] hover:from-[#a01830] hover:to-[#c41e3a] text-white font-black text-lg rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3"
                  >
                    Submit Application
                    <ArrowRight className="w-6 h-6" />
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    We'll get back to you within 24 hours
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-5xl font-black mb-6">
                Have Questions? We're Here to Help
              </h2>
              <p className="text-lg text-gray-300 mb-10">
                Our team is ready to answer your questions and guide you through the application process
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <a
                  href="tel:03333357000"
                  className="group flex items-center justify-center gap-3 p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300"
                >
                  <Phone className="w-6 h-6 text-yellow-400" />
                  <div className="text-left">
                    <div className="text-sm text-gray-400">Call us</div>
                    <div className="text-xl font-bold">0333 335 7000</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/447399121111"
                  className="group flex items-center justify-center gap-3 p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-sm text-gray-400">WhatsApp</div>
                    <div className="text-xl font-bold">0739 912 1111</div>
                  </div>
                </a>
              </div>

              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-300">Serving Manchester & Nationwide</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}