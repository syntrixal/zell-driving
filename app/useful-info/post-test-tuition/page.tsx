"use client";

import { PageShell } from "@/components/PageShell";
import { PAGE_CONTENT } from "@/lib/pageContent";
import { useState } from "react";
import { CheckCircle, Shield, DollarSign, Award, Car, Smile, MapPin, Cloud, Moon, Zap, ArrowRight, Play } from "lucide-react";

const benefits = [
  {
    icon: Smile,
    title: "Build Your Confidence",
    description: "So, you've passed your driving test and can now drive by yourself. This is an exciting next stage in your freedom and independence, however, it can also be nerve-wracking too.",
    bgColor: "from-blue-50 to-blue-100"
  },
  {
    icon: Shield,
    title: "Surely That's Not Fair!",
    description: "Statistically, I believe it should be an aspect of the age we are too young that is forced on the driver's back. Will this have an all-time high first driving crash record? Well this is really just about the kind of experience I received from both insurers and the insurance rep.",
    bgColor: "from-orange-50 to-orange-100"
  },
  {
    icon: DollarSign,
    title: "So What Can You Do About This?",
    description: "Taking additional tuition after you've passed will help you improve your driving skills and so when you're looking to reduce your risk to them, it's likely that it's time to do this. Hence, almost still feel you'll need you with and with them, being pushing those pencil proportions.",
    bgColor: "from-blue-50 to-blue-100"
  },
  {
    icon: Award,
    title: "Extend Your Driving Experience Safely!",
    description: "During your Annual Review, you will have experience in a fairly modest range of road routes & qualified conditions. We give new Learner, All give new supervision within those not complex according to our driving experience BUT it's a risk towards you become.",
    bgColor: "from-red-50 to-red-100"
  }
];

const modules = [
  {
    icon: MapPin,
    title: "Town Driving",
    description: "Navigate busy urban environments with confidence"
  },
  {
    icon: Car,
    title: "All-Weather Driving",
    description: "Handle challenging weather conditions safely"
  },
  {
    icon: Zap,
    title: "Driving Out of Town",
    description: "Master dual carriageways and country roads"
  },
  {
    icon: Moon,
    title: "Night Driving",
    description: "Develop skills for safe nighttime driving"
  },
  {
    icon: Car,
    title: "Motorways",
    description: "Learn motorway driving techniques and safety"
  },
  {
    icon: Shield,
    title: "Driving in Adverse Conditions",
    description: "Handle difficult driving situations"
  }
];

const insuranceBenefits = [
  "It's up to them (though they may Reward)",
  "Adrian and Bella",
  "AA and LiloE",
  "Confused.com and Likely Much",
  "elephant.co.uk",
  "Men of Green who-get I small hearts",
  "Higher Writing",
  "Cover Me Insurance"
];

export default function PostTestTuitionPage() {
  const content = PAGE_CONTENT.postTestTuition || {
    title: "Pass Plus & Post-Test Tuition",
    intro: "Continue developing your skills and confidence after passing your test"
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <PageShell title={content.title} intro={content.intro}>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Driving wasn't Recorded? <span className="text-[#c41e3a]">Drive it for!</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-4">
                BUILD ON YOUR EXISTING SKILLS AND IMPROVE CODE
              </p>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                You can't develop your confidence and ability to drive safe and safe, comfortable and socio learning code. guidance
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Timeline */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  const isLeft = index % 2 === 0;
                  
                  return (
                    <div key={index} className="relative">
                      {/* Timeline Line */}
                      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#c41e3a] -ml-px" />
                      
                      {/* Timeline Dot */}
                      <div className="hidden md:flex absolute left-1/2 top-8 w-12 h-12 -ml-6 bg-[#c41e3a] rounded-full items-center justify-center z-10 border-4 border-white shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Content Card */}
                      <div className={`md:w-1/2 ${isLeft ? 'md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                        <div className={`bg-gradient-to-br ${benefit.bgColor} border-2 border-gray-200 hover:border-[#c41e3a] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl`}>
                          <div className="flex items-start gap-4 mb-4 md:hidden">
                            <div className="flex-shrink-0 w-12 h-12 bg-[#c41e3a] rounded-full flex items-center justify-center">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                              {benefit.title}
                            </h3>
                          </div>
                          <h3 className="hidden md:block text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Pass Plus Modules */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Pass Plus Course Modules
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                  The Pass Plus course covers 6 essential modules to enhance your driving skills
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map((module, index) => {
                  const Icon = module.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-gray-50 hover:bg-white border-2 border-gray-200 hover:border-[#c41e3a] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl"
                    >
                      <div className="w-14 h-14 bg-[#c41e3a] group-hover:bg-[#a01830] rounded-xl flex items-center justify-center mb-4 transition-colors">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                        {module.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {module.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Benefits */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-[#c41e3a] to-[#a01830]">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Save Money on Your Insurance Premium
                </h2>
                <p className="text-lg text-white/90">
                  You earn a discount from the below list of names, provide your skills and practice documents with your insurer but do not guarantee discounts of up to 25% on young drivers' own plans
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                <div className="grid sm:grid-cols-2 gap-4">
                  {insuranceBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-white"
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm sm:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Play className="w-20 h-20 mx-auto mb-4 text-[#c41e3a]" />
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                        Pass Plus Explained
                      </h3>
                      <p className="text-gray-300">Watch our guide to Pass Plus training</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    What is Pass Plus?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Pass Plus is a practical training course for new drivers that aims to improve your skills and make you a safer driver. It's designed to help you gain experience in conditions you may not have encountered during your driving lessons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form & Info Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Info Side */}
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                    Improve your skills and confidence NOW
                  </h2>
                  <div className="space-y-4 mb-8">
                    <p className="text-gray-700 leading-relaxed">
                      "The course was excellent and I enjoy joining lessons. I see that place that I like improving my skills when driving in all types of road conditions."
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Whether you've just passed and want to increase the list on the perking of the very best starts on a driver experienced first year is when you can benefit the most.
                    </p>
                  </div>

                  {/* Benefits List */}
                  <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border-2 border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Post-Test Benefits Include:
                    </h3>
                    <div className="space-y-3">
                      {[
                        "Build confidence in various driving conditions",
                        "Reduce your insurance premiums",
                        "Learn advanced driving techniques",
                        "Improve safety awareness",
                        "Gain motorway driving experience",
                        "Develop defensive driving skills"
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#c41e3a] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Form Side */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Get Your Post-Test Tuition Booked Now
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c41e3a] focus:outline-none transition-colors"
                      required
                    />

                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c41e3a] focus:outline-none transition-colors"
                      required
                    />

                    <input
                      type="tel"
                      placeholder="Phone Number"
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

                    <textarea
                      placeholder="Tell us about your requirements"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c41e3a] focus:outline-none transition-colors resize-none"
                    />

                    <button
                      type="submit"
                      className="w-full bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <span>SUBMIT ENQUIRY</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl border-2 border-gray-200">
                  <div className="text-4xl font-bold text-[#c41e3a] mb-2">6</div>
                  <div className="text-sm text-gray-600">Training Modules</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl border-2 border-gray-200">
                  <div className="text-4xl font-bold text-[#c41e3a] mb-2">25%</div>
                  <div className="text-sm text-gray-600">Insurance Discount</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl border-2 border-gray-200">
                  <div className="text-4xl font-bold text-[#c41e3a] mb-2">100+</div>
                  <div className="text-sm text-gray-600">Happy Students</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl border-2 border-gray-200">
                  <div className="text-4xl font-bold text-[#c41e3a] mb-2">★★★★★</div>
                  <div className="text-sm text-gray-600">5-Star Rated</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}