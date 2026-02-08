"use client";

import { PageShell } from "@/components/PageShell";
import { PAGE_CONTENT } from "@/lib/pageContent";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle,
  FileText,
  Monitor,
  AlertTriangle,
  Award,
  Car,
  BookOpen,
  Clock,
  Phone,
  MapPin,
  Calendar,
  CreditCard,
  Eye,
  Home,
  Shield,
  Zap,
  ChevronRight,
  ExternalLink,
  Info,
  Video,
  Target,
  Navigation
} from "lucide-react";
import { useState } from "react";

const journeySteps = [
  {
    id: "provisional",
    icon: FileText,
    title: "Provisional Licence",
    shortDesc: "Get your provisional driving licence",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "theory",
    icon: Monitor,
    title: "Theory Test",
    shortDesc: "Pass your theory test",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: "hazard",
    icon: AlertTriangle,
    title: "Hazard Perception",
    shortDesc: "Master hazard awareness",
    color: "from-orange-500 to-orange-600"
  },
  {
    id: "practical",
    icon: Car,
    title: "Practical Test",
    shortDesc: "Pass your driving test",
    color: "from-green-500 to-green-600"
  },
  {
    id: "licence",
    icon: Award,
    title: "Full Licence",
    shortDesc: "Get your full driving licence",
    color: "from-yellow-500 to-yellow-600"
  }
];

const provisionalRequirements = [
  "Are a resident of Great Britain",
  "Meet the minimum age requirement",
  "Can meet the minimum eyesight requirement",
  "Are currently not prevented from driving for any reason",
  "Can pay by Mastercard, Visa, Maestro, Electron, Delta or Solo debit or credit card",
  "Have a valid UK passport or another form of identity",
  "Can provide addresses of where you have lived over the last three years"
];

const theoryTestInfo = [
  {
    icon: Clock,
    title: "Test Duration",
    description: "50 minutes for 57 multiple choice questions"
  },
  {
    icon: Target,
    title: "Pass Mark",
    description: "You need to answer at least 43 questions correctly"
  },
  {
    icon: Video,
    title: "Video Questions",
    description: "Three questions include a short video clip"
  },
  {
    icon: BookOpen,
    title: "Study Materials",
    description: "Practice with official revision materials"
  }
];

const hazardTestInfo = [
  {
    icon: Eye,
    title: "Video Clips",
    description: "Series of everyday road scene videos"
  },
  {
    icon: AlertTriangle,
    title: "Developing Hazards",
    description: "Identify hazards early to score maximum points"
  },
  {
    icon: Target,
    title: "Scoring",
    description: "Maximum 5 points per clip - earlier = higher score"
  },
  {
    icon: CheckCircle,
    title: "Pass Requirement",
    description: "Must pass both theory and hazard to proceed"
  }
];

const practicalTestInfo = [
  {
    icon: Clock,
    title: "Independent Driving",
    description: "20 minutes following sat nav or road signs"
  },
  {
    icon: Navigation,
    title: "Route Variety",
    description: "1 in 5 tests includes following road signs"
  },
  {
    icon: Car,
    title: "Vehicle Checks",
    description: "Show and tell questions about your vehicle"
  },
  {
    icon: Shield,
    title: "Safe Driving",
    description: "Demonstrate control and awareness throughout"
  }
];

export default function RequirementsPage() {
  const content = PAGE_CONTENT.instructorTraining;
  const [activeStep, setActiveStep] = useState("provisional");

  const getStepContent = (stepId: string) => {
    switch(stepId) {
      case "provisional":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Getting Your Provisional Licence</h3>
              <p className="text-gray-700 mb-6">
                Before you can drive on a public road or take your theory test, you will need a valid 
                Provisional Driving Licence. The Driver and Vehicle Licensing Agency (DVLA) application 
                form (Form D1) can be obtained from your local Post Office.
              </p>
              
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Important to Know</h4>
                    <p className="text-sm text-blue-800">
                      You can apply for your provisional licence up to 3 months before your 16th Birthday but 
                      it will not be valid until you actually turn 17 so you will not be able to take lessons 
                      on a public road, or take your theory test until then.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://www.gov.uk/apply-first-provisional-driving-licence"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold rounded-lg transition-all duration-300 mb-8"
              >
                Apply Online from Gov.UK
                <ExternalLink className="w-5 h-5" />
              </a>

              <h4 className="text-xl font-bold text-gray-900 mb-4">Eligibility Requirements</h4>
              <p className="text-gray-700 mb-4">
                You can apply for your first British provisional driving licence online if you:
              </p>
              <ul className="space-y-3">
                {provisionalRequirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <Camera className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-yellow-900 mb-2">Photo Requirements</h4>
                    <p className="text-sm text-yellow-800">
                      As a photo is required for your licence the DVLA can use your passport photo if you 
                      have one. If you don't have one, or you want to use a different one, this will need 
                      to be sent to the DVLA separately.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300"
                >
                  View Licence Costs
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        );
      
      case "theory":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Theory Test Overview</h3>
              <p className="text-gray-700 mb-6">
                You may already be taking lessons or even be ready to take your practical test but{" "}
                <strong className="text-[#c41e3a]">you can not apply for your practical test until you have passed the theory test</strong>.
              </p>

              <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-2xl p-6 mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">The Theory Test Components</h4>
                <p className="text-gray-700 mb-6">
                  The theory test is made up of two parts: a multiple choice questionnaire and a hazard 
                  perception video test. You will need to pass both parts to get your certificate.
                </p>
              </div>

              <h4 className="text-xl font-bold text-gray-900 mb-4">Multiple Choice Questions</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {theoryTestInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="flex gap-4 p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-purple-500 transition-all duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 mb-1">{info.title}</h5>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Important Note</h4>
                    <p className="text-sm text-blue-800">
                      Note that the actual theory test questions are no longer published which means that 
                      those found in revision materials of any kind will give you an idea of the questions 
                      and answers to expect but will NOT be exactly the same as those you will face during 
                      the test itself.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-purple-900 mb-3">Test Details</h4>
                <ul className="space-y-2 text-sm text-purple-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>This part of the test lasts 50 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>You will need to answer 57 questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>For each question, several possible answers will appear on a screen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>You have to select the correct one</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Three of the questions are about a short video - showing a normal driving situation</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.gov.uk/find-theory-test-centre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold rounded-lg transition-all duration-300"
                >
                  Find Theory Test Centre
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href="https://www.gov.uk/book-theory-test"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all duration-300"
                >
                  Book Your Theory Test
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <p className="text-sm text-gray-600 mt-6">
                Only once you have passed this can you apply to take your practical driving test.
              </p>
            </div>
          </div>
        );

      case "hazard":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hazard Perception Test</h3>
              <p className="text-gray-700 mb-6">
                Theory test - part 2
              </p>

              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-bold text-orange-900 mb-3">The Hazard Perception</h4>
                <p className="text-orange-800">
                  Can you spot hazards & potential danger?
                </p>
              </div>

              <p className="text-gray-700 mb-6">
                Before you start the hazard perception part of the test, you'll be shown a short video clip 
                about how it works before being shown a series of video clips on a computer screen.
              </p>

              <p className="text-gray-700 mb-6">
                The clips feature everyday road scenes and contain at least one developing hazard - but 
                one of the clips will feature two developing hazards.
              </p>

              <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-2xl p-6 mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">How It Works</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {hazardTestInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex gap-4 p-4 bg-white rounded-xl border border-orange-200">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900 mb-1">{info.title}</h5>
                          <p className="text-sm text-gray-600">{info.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-yellow-900 mb-2">What is a Developing Hazard?</h4>
                    <p className="text-sm text-yellow-800 mb-3">
                      A developing hazard is something that may result in you having to take some action, 
                      such as changing speed or direction and what you need to do is identify these as early 
                      as possible to get as high a score as possible (max 5 per clip).
                    </p>
                    <p className="text-sm text-yellow-800">
                      The video is silent and you can watch it as many times as you like during the test.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "practical":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Practical Test</h3>
              <p className="text-gray-700 mb-6">
                This is the final stage to getting your driving licence!
              </p>

              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-bold text-green-900 mb-3">Getting on the Road</h4>
                <p className="text-green-800">
                  Once your driving has reached a suitable level, you will want to get your driving test 
                  booked. The timescale for bookings can vary one month to the next depending on the 
                  number of other learners applying around the same time. You should not just go ahead 
                  and book the test before checking that a car will be available first!
                </p>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Independent Driving Section</h4>
                    <p className="text-sm text-blue-800">
                      During the 'independent driving' section of the test you will be asked to follow a Sat Nav 
                      or, one in 5 tests will follow road signs for around 20 minutes to see how well you deal 
                      with driving without being prompted by your examiner.
                    </p>
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {practicalTestInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="flex gap-4 p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-green-500 transition-all duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 mb-1">{info.title}</h5>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-yellow-900 mb-2">Important Reminder</h4>
                    <p className="text-sm text-yellow-800">
                      Please note you should always check with your instructor before doing this yourself.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book-now"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold rounded-lg transition-all duration-300"
                >
                  Book Your Practical Test
                  <Calendar className="w-5 h-5" />
                </Link>
                <a
                  href="https://www.gov.uk/driving-test"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all duration-300"
                >
                  Practical Test .Gov Info
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        );

      case "licence":
        return (
          <div className="space-y-6">
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Congratulations!</h3>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Once you pass your practical test, you'll receive your full UK driving licence and 
                can start enjoying the freedom of the open road!
              </p>
              
              <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-2xl p-8 max-w-2xl mx-auto mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">What Happens Next?</h4>
                <ul className="text-left space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Your examiner will give you a pass certificate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Send your provisional licence to DVLA to get your full licence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">You can drive immediately with your pass certificate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Your full licence will arrive within 3 weeks</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/book-now"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#c41e3a] to-[#a01830] hover:from-[#a01830] hover:to-[#c41e3a] text-white font-bold rounded-full transition-all duration-300 shadow-xl hover:scale-105"
              >
                Start Your Journey Today
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <PageShell title="Getting Your Licence" intro="Your complete guide to becoming a qualified driver">
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#c41e3a] to-gray-900">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="container mx-auto px-4 py-16 sm:py-24 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Your Journey to<br />
                <span className="text-yellow-400">Getting Your Licence</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-200 mb-10 leading-relaxed">
                Follow our step-by-step guide from provisional licence to full qualification
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/book-now"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold rounded-full transition-all duration-300 hover:scale-105"
                >
                  Book Your Lessons
                  <ArrowRight className="w-5 h-5" />
                </Link>
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

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Journey Steps Navigation */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {journeySteps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = activeStep === step.id;
                  
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(step.id)}
                      className={`relative p-4 rounded-2xl border-2 transition-all duration-300 ${
                        isActive
                          ? 'bg-white border-[#c41e3a] shadow-xl scale-105'
                          : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 bg-gradient-to-br ${step.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-center">
                        <div className={`text-xs font-bold mb-1 ${isActive ? 'text-[#c41e3a]' : 'text-gray-500'}`}>
                          Step {index + 1}
                        </div>
                        <h3 className={`text-sm font-bold mb-1 ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
                          {step.title}
                        </h3>
                        <p className="text-xs text-gray-600">
                          {step.shortDesc}
                        </p>
                      </div>
                      {isActive && (
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                          <div className="w-8 h-8 bg-[#c41e3a] rounded-full flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 sm:p-12 shadow-xl">
                {getStepContent(activeStep)}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => {
                    const currentIndex = journeySteps.findIndex(s => s.id === activeStep);
                    if (currentIndex > 0) {
                      setActiveStep(journeySteps[currentIndex - 1].id);
                    }
                  }}
                  disabled={activeStep === journeySteps[0].id}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-5 h-5 rotate-180" />
                  Previous
                </button>

                <button
                  onClick={() => {
                    const currentIndex = journeySteps.findIndex(s => s.id === activeStep);
                    if (currentIndex < journeySteps.length - 1) {
                      setActiveStep(journeySteps[currentIndex + 1].id);
                    }
                  }}
                  disabled={activeStep === journeySteps[journeySteps.length - 1].id}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-900 to-[#c41e3a] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Zap className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
              <h2 className="text-3xl sm:text-5xl font-black mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Book your first lesson today and take the first step toward getting your driving licence!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/book-now"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Calendar className="w-5 h-5" />
                  Book Now
                </Link>
                <a
                  href="tel:03333357000"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

// Camera icon component (since it's not in lucide-react by default)
const Camera = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);