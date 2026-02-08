"use client";

import { PageShell } from "@/components/PageShell";
import { PAGE_CONTENT } from "@/lib/pageContent";
import { useState } from "react";
import { Search, PlayCircle, CheckCircle, AlertCircle, Eye, MessageSquare } from "lucide-react";

const showMeQuestions = [
  "Show me how you wash and clean the front windscreen",
  "Show me how you wash and clean the rear windscreen",
  "Show me how you'd switch on your dipped headlights",
  "Show me how you'd set the rear demister",
  "Show me how you'd operate the horn",
  "Show me how you'd demist the front windscreen",
  "Show me how you'd open and close the side window"
];

const tellMeQuestions = [
  {
    question: "How you would check that the brakes are working before starting a journey",
    answer: "The brakes should be tested before you pull away.",
    details: "They should not feel soft or spongy and the car shouldn't pull in either direction when the brake is applied."
  },
  {
    question: "Where you'd find the information for the recommended tyre pressures for this car and how tyre pressures should be checked",
    answer: "Use a reliable tyre pressure gauge when tyres are cold.",
    details: "Manufacturer's guide, found in the vehicle handbook. Check and adjust pressures when tyres are cold."
  },
  {
    question: "How you make sure your head restraint is correctly adjusted so it provides the best protection in the event of a crash",
    answer: "The head restraint should be adjusted so the rigid part is at least as high as the eye or top of the ears.",
    details: "It should be as close to the back of the head as comfortable."
  },
  {
    question: "How you'd check the tyres to ensure that they have sufficient tread depth and that their general condition is safe to use on the road",
    answer: "No cuts or bulges. 1.6mm of tread depth across the central three-quarters of the breadth of the tyre and around the entire outer circumference.",
    details: "Check for cuts, bulges, and wear. Use the tread depth indicator."
  },
  {
    question: "How you'd know if there was a problem with your anti-lock braking system",
    answer: "The ABS warning light should illuminate if there is a fault with the system.",
    details: "The warning light will illuminate when you turn on the ignition and should go out after a few seconds."
  },
  {
    question: "How you'd check that the indicators or lights are working. You don't need to exit the vehicle",
    answer: "Operate the switch and walk around the vehicle to check all indicators are working.",
    details: "Alternatively, you can check reflections in windows or garage doors."
  },
  {
    question: "How you'd check the brake lights are working on this car",
    answer: "Operate the brake pedal, and use reflections in windows or doors, or ask someone to help.",
    details: "You can also use reflections to check the lights are working."
  },
  {
    question: "How you'd check the power-assisted steering is working before starting a journey",
    answer: "If steering becomes heavy, the system may not be working properly.",
    details: "Gentle pressure on the steering wheel while starting the engine should result in slight movement as the system begins to operate."
  },
  {
    question: "Tell me how you'd switch on the rear fog light and explain when you'd use it. You don't need to exit the vehicle",
    answer: "Operate the switch (usually near or on the headlight switch).",
    details: "Use fog lights when visibility is seriously reduced (less than 100 meters)."
  },
  {
    question: "How you switch your headlight from dipped to main beam and explain how you'd know the main beam is on",
    answer: "Operate the switch and check the main beam warning light is illuminated.",
    details: "The blue main beam warning light will show on the dashboard when activated."
  },
  {
    question: "How you'd check that the engine has sufficient oil",
    answer: "Identify the dipstick, remove and wipe clean, re-insert fully, remove again and check level.",
    details: "The oil level should be between the minimum and maximum markers."
  },
  {
    question: "How you'd check coolant & brake fluid levels",
    answer: "Check both by looking at the transparent reservoirs in the engine bay.",
    details: "Levels should be between the minimum and maximum markers. Do not remove caps when hot."
  }
];

export default function ShowMeTellMePage() {
  const content = PAGE_CONTENT.showMeTellMe || {
    title: "Show Me, Tell Me Questions",
    intro: "Essential vehicle safety checks for your driving test"
  };
  
  const [selectedTab, setSelectedTab] = useState<"show" | "tell">("show");
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  return (
    <PageShell title={content.title} intro={content.intro}>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Know your <span className="text-[#c41e3a]">Tell Me</span> questions?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
                The show me / Tell section of your test lets the examiner know you understand how to perform basic safety checks and maintenance on your car.
              </p>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                This is not just important for passing your test though as this is an important aspect of driving and will keep you, your passengers and other road users safer.
              </p>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Some useful watching!
                </h3>
                <p className="text-sm text-gray-600">2 Videos</p>
              </div>

              {/* Video Placeholder */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <PlayCircle className="w-20 h-20 mx-auto mb-4 text-[#c41e3a]" />
                    <h4 className="text-2xl sm:text-3xl font-bold mb-2">
                      Driving test 2024: 'show me' questions
                    </h4>
                    <p className="text-gray-300">Official DVSA Guide</p>
                  </div>
                </div>
              </div>

              {/* Video List */}
              <div className="mt-6 space-y-3">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-4 flex items-center gap-4 hover:border-[#c41e3a] transition-colors cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#c41e3a] rounded-lg flex items-center justify-center">
                    <PlayCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">"Show me, tell me" ah - 2024</p>
                    <p className="text-sm text-gray-600">Learn the essential questions</p>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-lg p-4 flex items-center gap-4 hover:border-[#c41e3a] transition-colors cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#c41e3a] rounded-lg flex items-center justify-center">
                    <PlayCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Driving test 2024: offs - te</p>
                    <p className="text-sm text-gray-600">Complete guide walkthrough</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Tabs */}
              <div className="flex gap-4 mb-8 bg-gray-50 p-2 rounded-xl">
                <button
                  onClick={() => setSelectedTab("show")}
                  className={`flex-1 px-6 py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 ${
                    selectedTab === "show"
                      ? "bg-white text-[#c41e3a] shadow-md border-2 border-[#c41e3a]"
                      : "bg-transparent text-gray-600 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Eye className="w-5 h-5" />
                    Show Me Questions
                  </div>
                </button>
                <button
                  onClick={() => setSelectedTab("tell")}
                  className={`flex-1 px-6 py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 ${
                    selectedTab === "tell"
                      ? "bg-white text-[#c41e3a] shadow-md border-2 border-[#c41e3a]"
                      : "bg-transparent text-gray-600 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Tell Me Questions
                  </div>
                </button>
              </div>

              {/* Content */}
              <div className="grid lg:grid-cols-2 gap-8">
                {selectedTab === "show" ? (
                  <>
                    {/* Show Me Questions */}
                    <div>
                      <div className="mb-6">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                          Show Me Question examples
                        </h3>
                        <p className="text-gray-600 italic">"When it's safe to do so..."</p>
                      </div>

                      <div className="space-y-3">
                        {showMeQuestions.map((question, index) => (
                          <div
                            key={index}
                            className="bg-[#c41e3a] text-white p-4 rounded-lg flex items-start gap-3 hover:bg-[#a01830] transition-colors"
                          >
                            <Search className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <p className="text-sm sm:text-base">{question}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Placeholder Image */}
                    <div className="bg-gray-100 rounded-2xl overflow-hidden">
                      <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <div className="text-center p-8">
                          <Eye className="w-20 h-20 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-600 font-semibold">Show Me Demonstrations</p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Tell Me Questions */}
                    <div className="lg:col-span-2">
                      <div className="mb-6">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                          Tell Me Question examples
                        </h3>
                        <p className="text-gray-600 italic">"Tell me..."</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        {tellMeQuestions.slice(0, 1).map((item, index) => (
                          <div key={index} className="md:col-span-2 bg-gray-900 rounded-2xl overflow-hidden">
                            <div className="aspect-video relative">
                              <img 
                                src="/api/placeholder/800/600" 
                                alt="Brake check demonstration"
                                className="w-full h-full object-cover opacity-70"
                              />
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                                <div className="flex items-start gap-3 text-white">
                                  <MessageSquare className="w-6 h-6 flex-shrink-0 mt-1" />
                                  <p className="font-semibold text-lg">
                                    How you would check that the brakes are working before starting a journey
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="p-6 bg-gray-800">
                              <p className="text-white mb-3">{item.answer}</p>
                              <p className="text-gray-300 text-sm">{item.details}</p>
                            </div>
                          </div>
                        ))}

                        {tellMeQuestions.slice(1).map((item, index) => (
                          <div
                            key={index + 1}
                            className="bg-[#c41e3a] text-white p-5 rounded-xl cursor-pointer hover:bg-[#a01830] transition-all"
                            onClick={() => setExpandedQuestion(expandedQuestion === index + 1 ? null : index + 1)}
                          >
                            <div className="flex items-start gap-3">
                              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                              <div className="flex-1">
                                <p className="font-semibold text-sm sm:text-base mb-2">
                                  {item.question}
                                </p>
                                {expandedQuestion === index + 1 && (
                                  <div className="mt-3 pt-3 border-t border-white/20">
                                    <p className="text-sm mb-2">{item.answer}</p>
                                    <p className="text-xs text-white/80">{item.details}</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Key Points Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
                Important Points to Remember
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 text-center hover:border-[#c41e3a] transition-colors">
                  <div className="w-16 h-16 bg-[#c41e3a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    Practice Before Your Test
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Familiarize yourself with your vehicle's controls and safety features before test day.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 text-center hover:border-[#c41e3a] transition-colors">
                  <div className="w-16 h-16 bg-[#c41e3a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    Safety First
                  </h4>
                  <p className="text-gray-600 text-sm">
                    These checks aren't just for the test - they're essential for safe driving every day.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 text-center hover:border-[#c41e3a] transition-colors">
                  <div className="w-16 h-16 bg-[#c41e3a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    Know Your Vehicle
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Different cars have different controls - make sure you know where everything is.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Need help preparing for your driving test?
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                Our experienced instructors will ensure you're fully prepared for all aspects of your test, including show me tell me questions.
              </p>
              <a
                href="/book-now"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Book a Lesson
                <CheckCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}