import { PageShell } from "@/components/PageShell";
import { PAGE_CONTENT } from "@/lib/pageContent";
import Link from "next/link";
import { ArrowRight, Smile, ThumbsUp, Settings, DollarSign, Building2, Shield } from "lucide-react";

export default function AutomaticDrivingLessonsPage() {
  const content = PAGE_CONTENT.automatic;

  const benefits = [
    {
      icon: Smile,
      title: "Learn Faster, Stress Less",
      description: "Automatic cars eliminate the hassle and anxiety associated with gear shifting, saving you focus on the most productive essential driving skills."
    },
    {
      icon: ThumbsUp,
      title: "Boost Your Confidence",
      description: "No more worrying about stalling or rolling back on hills. Automatic cars reduce anxiety and help you feel in control and build confidence."
    },
    {
      icon: Settings,
      title: "Focus on Driving, Not Gears",
      description: "By removing the distraction of gear changes, you can concentrate on mastering observation, steering, and road awareness."
    },
    {
      icon: DollarSign,
      title: "Save Time AND Money",
      description: "With a simpler learning curve, many learners pass their test sooner in automatic lessons – saving both time and money in the long run."
    },
    {
      icon: Building2,
      title: "Effortless City Driving",
      description: "Navigate London's busy streets with ease. Automatic cars are perfect for stop-and-go traffic, letting you focus on the road ahead."
    },
    {
      icon: Shield,
      title: "Accessible & Safe",
      description: "Automatic lessons come with modern safety features, making them ideal for learners of all abilities and confidence levels."
    }
  ];

  return (
    <PageShell title={content.title} intro={content.intro}>
      {/* Main Content Section */}
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Yellow Info Banner */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Do you want to learn to drive without the stress of gears and clutch control and pass your test sooner?
                  </h2>
                </div>
                <div>
                  <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                    Our automatic driving lessons make learning to drive simpler, faster, and more enjoyable. Discover the benefits of going automatic and start your journey to confident driving today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-white border-2 border-gray-100 rounded-2xl p-6 sm:p-8 hover:border-[#c41e3a] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Icon */}
                      <div className="mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 group-hover:bg-[#c41e3a] rounded-2xl transition-colors duration-300">
                          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#c41e3a] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>

                      {/* Content */}
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

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Ready to get behind the wheel?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Book your first automatic driving lesson today and start driving with confidence!
              </p>
              
              {/* Email Input + Button */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email/mobile"
                  className="flex-1 px-6 py-4 text-base border-2 border-gray-200 rounded-xl focus:border-[#c41e3a] focus:outline-none transition-colors"
                />
                <Link
                  href="/book-now"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#c41e3a]/30 whitespace-nowrap"
                >
                  Start here
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blue Light Card Discount Banner */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left side - Blue Light Card graphic */}
                <div className="flex items-center gap-4">
                  <div className="bg-white rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <div className="text-2xl font-bold text-blue-900">BLUE</div>
                        <div className="text-xl font-bold text-blue-900">LIGHT CARD</div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                    </svg>
                  </div>
                </div>

                {/* Right side - Discount text */}
                <div className="text-center md:text-right">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                    BLUE LIGHT &<br />STUDENT DISCOUNT
                  </h3>
                  <p className="text-xl sm:text-2xl font-bold text-yellow-400">
                    £5 off every 2hr lesson for card / ID holders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6">
                <div className="bg-[#c41e3a] text-white px-6 py-3 rounded-full font-bold text-sm sm:text-base flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  GO TO LESSON PRICES
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Affordable Driving Lessons - Flexible Payment Options
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                We offer competitive pricing with flexible payment plans to suit your budget. Pay as you go or save with our lesson packages.
              </p>
              <Link
                href="/book-now"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#c41e3a]/30 hover:scale-105"
              >
                Book Your First Lesson
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}