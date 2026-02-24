import { PageShell } from "@/components/PageShell";
import { PAGE_CONTENT } from "@/lib/pageContent";
import Link from "next/link";
import {
  ArrowRight,
  Smile,
  ThumbsUp,
  Settings,
  DollarSign,
  Building2,
  Shield,
} from "lucide-react";

export default function AutomaticDrivingLessonsPage() {
  const content = PAGE_CONTENT.automatic;

  const benefits = [
    {
      icon: Smile,
      title: "Learn Faster, Stress Less",
      description:
        "Automatic cars eliminate the hassle and anxiety associated with gear shifting, saving you focus on the most productive essential driving skills.",
    },
    {
      icon: ThumbsUp,
      title: "Boost Your Confidence",
      description:
        "No more worrying about stalling or rolling back on hills. Automatic cars reduce anxiety and help you feel in control and build confidence.",
    },
    {
      icon: Settings,
      title: "Focus on Driving, Not Gears",
      description:
        "By removing the distraction of gear changes, you can concentrate on mastering observation, steering, and road awareness.",
    },
    {
      icon: DollarSign,
      title: "Save Time AND Money",
      description:
        "With a simpler learning curve, many learners pass their test sooner in automatic lessons – saving both time and money in the long run.",
    },
    {
      icon: Building2,
      title: "Effortless City Driving",
      description:
        "Navigate Liverpool's busy streets with ease. Automatic cars are perfect for stop-and-go traffic, letting you focus on the road ahead.",
    },
    {
      icon: Shield,
      title: "Accessible & Safe",
      description:
        "Automatic lessons come with modern safety features, making them ideal for learners of all abilities and confidence levels.",
    },
  ];

  return (
    <PageShell title={content.title} intro={content.intro}>
      {/* Main Content Section */}
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Yellow Info Banner */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                Why Automatic?
              </span>
              <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Do you want to learn to drive without the stress of gears
                    and clutch control and pass your test sooner?
                  </h2>
                </div>
                <div>
                  <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                    Our automatic driving lessons make learning to drive
                    simpler, faster, and more enjoyable. Discover the benefits
                    of going automatic and start your journey to confident
                    driving today.
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
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                Benefits
              </span>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-white border-2 border-gray-100 rounded-2xl p-6 sm:p-8 hover:border-[#ae2027] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Icon */}
                      <div className="mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 group-hover:bg-[#ae2027] rounded-2xl transition-colors duration-300">
                          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#ae2027] group-hover:text-white transition-colors duration-300" />
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

        {/* Blue Light Card Discount Banner */}

        {/* Final CTA Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Affordable Driving Lessons - Flexible Payment Options
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                We offer competitive pricing with flexible payment plans to suit
                your budget. Pay as you go or save with our lesson packages.
              </p>
              <Link
                href="/book-now"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#ae2027] hover:bg-[#8a191f] text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#ae2027]/30 hover:scale-105"
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
