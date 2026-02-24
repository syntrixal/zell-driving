"use client";

import { PageShell } from "@/components/PageShell";
import { PAGE_CONTENT } from "@/lib/pageContent";
import { ExternalLink, FileText, CheckCircle, Shield, Book, Award, AlertCircle, Users } from "lucide-react";

const resources = [
  {
    id: "gov-uk",
    title: "Official Government Resources",
    icon: FileText,
    description: "On your first lesson, you will need to print and produce your source information. Use this link to get the appropriate information required by your instructor for your first lesson.",
    image: "/api/placeholder/400/250",
    bgColor: "from-gray-700 to-gray-900",
    links: [
      { text: "Click here for Licence information printouts", url: "https://www.gov.uk/driving-licence" },
      { text: "Learner & new drivers info", url: "https://www.gov.uk/learn-to-drive-a-car" },
      { text: "Apply for your provisional licence", url: "https://www.gov.uk/apply-first-provisional-driving-licence" },
      { text: "Book your theory test", url: "https://www.gov.uk/book-theory-test" },
      { text: "Book your practical test", url: "https://www.gov.uk/book-practical-driving-test" },
      { text: "Test costs The Highway code", url: "https://www.gov.uk/guidance/the-highway-code" },
      { text: "The UK Traffic signs (PDF)", url: "https://www.gov.uk/government/publications/traffic-signs" },
      { text: "About the theory test", url: "https://www.gov.uk/theory-test" },
      { text: "Info for your practical test", url: "https://www.gov.uk/practical-driving-test-for-cars" },
      { text: "What to expect in the practical test", url: "https://www.gov.uk/government/publications/car-show-me-tell-me-vehicle-safety-questions" }
    ]
  },
  {
    id: "test-ready",
    title: "Check you're ready to take the test!",
    icon: CheckCircle,
    description: "Passing your driving test gives you independence and freedom. But many learner drivers take their test too early, leading to a failed test, disappointment, extra costs and delays to getting on the road.",
    image: "/api/placeholder/400/250",
    bgColor: "from-yellow-500 to-yellow-600",
    links: [
      { text: "Are you ready for your test?", url: "https://www.gov.uk/guidance/the-highway-code" }
    ]
  },
  {
    id: "safe-driving",
    title: "Safe Driving For Life",
    icon: Shield,
    description: "Some very useful resources for all drivers from complete novices to highly experienced.",
    image: "/api/placeholder/400/250",
    bgColor: "from-blue-700 to-blue-900",
    links: [
      { text: "Visit Safe Driving For Life", url: "https://www.safedrivingforlife.info/" }
    ]
  },
  {
    id: "iam-roadsmart",
    title: "IAM RoadSmart - We make better drivers and riders!",
    icon: Book,
    description: "IAM RoadSmart help develops the skills of all licence holders through our advanced courses, programmes for businesses and short sessions available to everyone.",
    image: "/api/placeholder/400/250",
    bgColor: "from-cyan-400 to-cyan-600",
    links: [
      { text: "Courses - Driving for work", url: "https://www.iamroadsmart.com/" },
      { text: "Advanced driving courses", url: "https://www.iamroadsmart.com/courses/advanced-driver" }
    ]
  },
  {
    id: "rospa",
    title: "RoSPA - Road Safety Education",
    icon: Award,
    description: "The Royal Society for the Prevention of Accidents is a registered charity established more than 10 years ago that aims to campaign for change, influence opinion, contribute to debate, educate and inform — for the good of all.",
    image: "/api/placeholder/400/250",
    bgColor: "from-purple-600 to-purple-800",
    links: [
      { text: "Visit RoSPA", url: "https://www.rospa.com/" },
      { text: "Road safety resources", url: "https://www.rospa.com/road-safety" }
    ]
  },
  {
    id: "blue-light",
    title: "Blue Light Aware",
    icon: AlertCircle,
    description: "Blue Light Aware is a short video, produced on behalf of the emergency services. Their crews rely on the help of other road users when they're on a 'blue light' journey. By watching Blue Light Aware, you will better understand their needs, you will be reducing the risks you face, you will be contributing to a safer road environment and you might also be helping to save a life.",
    image: "/api/placeholder/400/250",
    bgColor: "from-blue-500 to-blue-700",
    links: [
      { text: "Watch Blue Light Aware", url: "https://www.bluelightaware.org.uk/" }
    ]
  },
  {
    id: "distracted-driving",
    title: "The Ultimate Guide to Driving Safely & Avoiding Distractions",
    icon: AlertCircle,
    description: "The guide is an excellent introduction to road safety and aims to raise awareness on the risks of accidents and casualties caused by distracted driving.",
    image: "/api/placeholder/400/250",
    bgColor: "from-red-500 to-red-700",
    links: [
      { text: "Read the guide", url: "https://www.exchangeandmart.co.uk/guides/driving-safely" }
    ]
  },
  {
    id: "learner-insurance",
    title: "Collingwood Learner Driver Insurance",
    icon: Shield,
    description: "Flexible and affordable learner driver insurance for practicing with family and friends.",
    image: "/api/placeholder/400/250",
    bgColor: "from-green-600 to-green-800",
    links: [
      { text: "Get a quote", url: "https://www.collingwood.co.uk/learner-driver-insurance" }
    ]
  }
];

export default function ResourcesPage() {
  const content = PAGE_CONTENT.resources || {
    title: "Useful Links & Resources",
    intro: "We've gathered these links to give you easy access to some important information and resources relating to your driving lessons"
  };

  return (
    <PageShell title={content.title} intro={content.intro}>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Intro Section */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                We've gathered these links to give you easy access to some important information and resources relating to your driving lessons
              </p>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto space-y-12">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={resource.id}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-200 hover:border-[#ae2027] transition-all duration-300 hover:shadow-2xl"
                  >
                    <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Image/Icon Side */}
                      <div className={`relative ${!isEven ? 'lg:order-2' : ''}`}>
                        <div className={`aspect-video lg:aspect-square bg-gradient-to-br ${resource.bgColor} flex items-center justify-center p-8`}>
                          <div className="text-center text-white">
                            <Icon className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4" />
                            <h3 className="text-xl sm:text-2xl font-bold">
                              {resource.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="p-6 sm:p-8 lg:p-10">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-[#ae2027] rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                              {resource.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                          {resource.description}
                        </p>

                        {/* Links */}
                        <div className="space-y-3">
                          {resource.links.map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/link flex items-center justify-between p-4 bg-gray-50 hover:bg-[#ae2027] rounded-lg transition-all duration-300 border-2 border-gray-100 hover:border-[#ae2027]"
                            >
                              <span className="text-sm sm:text-base font-medium text-gray-900 group-hover/link:text-white transition-colors">
                                {link.text}
                              </span>
                              <ExternalLink className="w-5 h-5 text-gray-400 group-hover/link:text-white flex-shrink-0 ml-2" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
                Essential Quick Links
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <a
                  href="https://www.gov.uk/apply-first-provisional-driving-licence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-[#ae2027] rounded-2xl transition-all duration-300 hover:shadow-lg"
                >
                  <FileText className="w-10 h-10 text-[#ae2027] mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#ae2027] transition-colors">
                    Apply for Licence
                  </h3>
                  <p className="text-sm text-gray-600">
                    Get your provisional driving licence
                  </p>
                </a>

                <a
                  href="https://www.gov.uk/book-theory-test"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-[#ae2027] rounded-2xl transition-all duration-300 hover:shadow-lg"
                >
                  <Book className="w-10 h-10 text-[#ae2027] mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#ae2027] transition-colors">
                    Book Theory Test
                  </h3>
                  <p className="text-sm text-gray-600">
                    Schedule your theory test online
                  </p>
                </a>

                <a
                  href="https://www.gov.uk/book-practical-driving-test"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-[#ae2027] rounded-2xl transition-all duration-300 hover:shadow-lg"
                >
                  <CheckCircle className="w-10 h-10 text-[#ae2027] mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#ae2027] transition-colors">
                    Book Practical Test
                  </h3>
                  <p className="text-sm text-gray-600">
                    Schedule your driving test
                  </p>
                </a>

                <a
                  href="https://www.gov.uk/guidance/the-highway-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-[#ae2027] rounded-2xl transition-all duration-300 hover:shadow-lg"
                >
                  <Shield className="w-10 h-10 text-[#ae2027] mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#ae2027] transition-colors">
                    Highway Code
                  </h3>
                  <p className="text-sm text-gray-600">
                    Read the official highway code
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#ae2027] to-[#8a191f] rounded-2xl p-8 sm:p-12 text-center text-white">
                <Users className="w-16 h-16 mx-auto mb-6" />
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Need Help Finding Something?
                </h2>
                <p className="text-lg mb-8 text-white/90">
                  Can't find the resource you're looking for? Our team is here to help guide you.
                </p>
                <a
                  href="/book-now"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-100 text-[#ae2027] font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Contact Us
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-sm text-gray-500">
                * External links will open in a new window. Zell Driving School is not responsible for the content of external websites.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}