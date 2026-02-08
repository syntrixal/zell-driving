"use client";

import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PAGE_CONTENT } from "@/lib/pageContent";
import { ArrowRight, Clock, Users, ThumbsUp, Calendar, Smile, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

const courseBenefits = [
  {
    icon: Clock,
    title: "Learn Fast, Pass Sooner",
    description: "Accelerate your learning with daily 2-hour lessons spread across 1-2 weeks - allowing you to stay in practice and build confidence."
  },
  {
    icon: Users,
    title: "Tailored to Your Needs",
    description: "Intensive courses (Intensely. Our intensive courses are designed for fast-track your learning, taking you from novice to test-ready in weeks."
  },
  {
    icon: ThumbsUp,
    title: "Boost Your Confidence",
    description: "Practice, celebrate your confidence will go hand in hand - fast, confident and positive test-ready to pass your driving test with skill and boost."
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Busy between? No problem. Driving test booked but can pass? We can build a tailored intensive course to fit your timetable."
  },
  {
    icon: Smile,
    title: "Drive Safe for Life",
    description: "Go beyond just passing and become the best driver you can be. Our instructors teach defensive driving skills that help you stay safe and avoid accidents."
  }
];

const courses = [
  {
    hours: 45,
    price: 1695,
    green: "£37.67 per hour",
    includes: [
      "For absolute beginners",
      "6 weeks course",
      "For complete beginners"
    ],
    popular: false
  },
  {
    hours: 40,
    price: 1495,
    green: "£37.38 per hour",
    includes: [
      "For those with a little bit practice",
      "5 weeks course",
      "Great for beginners"
    ],
    popular: true
  },
  {
    hours: 35,
    price: 1350,
    green: "£38.57 per hour",
    includes: [
      "Ideal for students with 15-20 hours of practice",
      "4 weeks course",
      "Great for near-beginners"
    ],
    popular: false
  }
];

const learningMaximizers = [
  {
    title: "Develop the Practice",
    subtitle: "Table Progress",
    description: "More time behind the wheel means mastering skills, building muscle memory, and gaining confidence."
  },
  {
    title: "Focus Without Rust",
    subtitle: "No time pressure",
    description: "No time pressure, allowing for stressed practice or complete nervousness"
  },
  {
    title: "Real-World Driving Experience",
    subtitle: "Instructor-vetted traffic and road conditions, revealing your weak points"
  },
  {
    title: "Exam-Effective",
    subtitle: "Save money by needing fewer (exactly useful)"
  }
];

export default function IntensivesPage() {
  const content = PAGE_CONTENT.intensives;
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    phone: "",
    postcode: "",
    experience: "",
    courseType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <PageShell title={content.title} intro={content.intro}>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Main Heading */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Pass Your Driving Test FAST! Intensive Automatic Driving Courses in Manchester, Liverpool & Birmingham
              </h2>
            </div>
          </div>
        </section>

        {/* Yellow Form Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Left - Text Content */}
                <div className="text-gray-900">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                    Do you want to learn to drive without the stress of gears and clutch control and pass your test sooner?
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed">
                    Ready to get your driving licence quickly? Our intensive automatic driving courses are designed to fast-track your learning, giving you the skills and confidence to pass your test in just weeks. Whether you're a beginner or looking to polish your skills, our tailored lessons help you become a safe, confident driver – fast.
                  </p>
                </div>

                {/* Right - Form */}
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c41e3a] focus:outline-none transition-colors"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Surname"
                        value={formData.surname}
                        onChange={(e) => setFormData({...formData, surname: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c41e3a] focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c41e3a] focus:outline-none transition-colors"
                      required
                    />

                    <input
                      type="tel"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c41e3a] focus:outline-none transition-colors"
                      required
                    />

                    <input
                      type="text"
                      placeholder="Postcode"
                      value={formData.postcode}
                      onChange={(e) => setFormData({...formData, postcode: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c41e3a] focus:outline-none transition-colors"
                      required
                    />

                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c41e3a] focus:outline-none transition-colors bg-white"
                      required
                    >
                      <option value="">- DRIVING LESSONS -</option>
                      <option value="beginner">Complete Beginner</option>
                      <option value="some-experience">Some Experience</option>
                      <option value="test-ready">Nearly Test Ready</option>
                    </select>

                    <select
                      value={formData.courseType}
                      onChange={(e) => setFormData({...formData, courseType: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c41e3a] focus:outline-none transition-colors bg-white"
                      required
                    >
                      <option value="">- AREAS INTEREST -</option>
                      <option value="intensive">Intensive Course</option>
                      <option value="automatic">Automatic Lessons</option>
                      <option value="manual">Manual Lessons</option>
                    </select>

                    <textarea
                      placeholder="Message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c41e3a] focus:outline-none transition-colors resize-none"
                    />

                    <button
                      type="submit"
                      className="w-full bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <span>INTENSIVES ENQUIRY</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>

                    <p className="text-xs text-gray-600 text-center">
                      Protected by reCAPTCHA and the Google{" "}
                      <a href="#" className="text-[#c41e3a] hover:underline">Privacy Policy</a> and{" "}
                      <a href="#" className="text-[#c41e3a] hover:underline">Terms of Service</a> apply.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
                Why Choose Our Intensive Driving Courses?
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {courseBenefits.map((benefit, index) => {
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

        {/* CTA Banner */}
        <section className="py-8 sm:py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Ready to pass your test fast? Book your intensive driving course now!
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 max-w-md px-6 py-4 border-2 border-gray-300 rounded-lg focus:border-[#c41e3a] focus:outline-none"
                />
                <button className="px-8 py-4 bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
                  Start Here
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
                Choose Your Intensive Driving Course
              </h2>
              <p className="text-center text-base sm:text-lg text-gray-600 mb-4">
                Please note: Our intensive driving courses in Manchester, Liverpool or Birmingham do not include a practical driving test. You will need to book this separately.
              </p>
              <p className="text-center text-sm sm:text-base text-gray-600 mb-12">
                Early driving test dates are subject to availability and at a charge of £99
              </p>

              {/* Availability Notice */}
              <div className="bg-green-500 text-white text-center py-3 rounded-lg mb-8 font-semibold">
                Currently availability for courses
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className={`relative bg-white border-2 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                      course.popular ? 'border-[#c41e3a] shadow-lg' : 'border-gray-200 hover:border-[#c41e3a]'
                    }`}
                  >
                    {/* Popular Badge */}
                    {course.popular && (
                      <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                        POPULAR
                      </div>
                    )}

                    <div className="p-6 sm:p-8">
                      {/* Hours */}
                      <div className="bg-[#c41e3a] text-white text-center py-3 rounded-lg mb-6">
                        <span className="text-2xl font-bold">{course.hours} Hours</span>
                      </div>

                      {/* Price */}
                      <div className="text-center mb-6">
                        <div className="text-sm text-gray-600 mb-1">£</div>
                        <div className="text-5xl font-bold text-gray-900">{course.price}</div>
                        <div className="text-sm text-green-600 font-semibold mt-2">{course.green}</div>
                      </div>

                      {/* Includes */}
                      <div className="space-y-3 mb-6">
                        {course.includes.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Button */}
                      <Link
                        href="/book-now"
                        className="block w-full bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold py-3 rounded-lg text-center transition-all duration-300"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Important Notes */}
              <div className="mt-12 space-y-4">
                <div className="bg-[#c41e3a] text-white p-4 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base">
                    For international students: N/A
                  </p>
                </div>
                <div className="bg-[#c41e3a] text-white p-4 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base">
                    For those who have passed manual: N/A
                  </p>
                </div>
                <p className="text-gray-600 text-sm text-center">
                  * Costs may vary depending on your location due to travel distance. Contact us for the most accurate pricing in your area
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Maximizers */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
                Maximize Your Learning with 2-Hour Lessons
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Yellow Side */}
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 space-y-6">
                  {learningMaximizers.slice(0, 4).map((item, index) => (
                    <div key={index}>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                      {item.subtitle && (
                        <p className="text-gray-800 text-sm font-semibold mb-2">{item.subtitle}</p>
                      )}
                      {item.description && (
                        <p className="text-gray-800 text-sm">{item.description}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Dark Side */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-white space-y-6">
                  <p className="text-lg leading-relaxed">
                    Great fit to become a convert driver you need to put in maximum driving practice, each most valuable.
                  </p>
                  <p className="text-base leading-relaxed">
                    Inserting more who you practice with your clients as the concept
                  </p>
                  <p className="text-base leading-relaxed">
                    Nose time each lessons regular at differin seasons; results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Link
                href="/book-now"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#c41e3a]/30 hover:scale-105 text-lg"
              >
                Book an Intensive Course
                <ArrowRight className="h-6 w-6" />
              </Link>
              <div className="mt-6">
                <Link
                  href="/driving-lessons/prices"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-[#c41e3a] transition-colors"
                >
                  View all prices
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}