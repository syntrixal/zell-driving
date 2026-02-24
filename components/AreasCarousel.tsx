"use client";

import { useState } from "react";

const COVERAGE_AREAS = [
  "Abram", "Accrington", "Ainsworth", "Alkrington", "Altrincham", "Ashton-Under-Lyne",
  "Ashton-in-Makerfield", "Atherton", "Audenshaw", "Bamford", "Barrowford", "Billinge",
  "Blackburn", "Blackrod", "Bolton", "Bournville", "Brierfield", "Burnley", "Burtonwood",
  "Bury", "Castleton", "Chadderton", "Cheadle", "Cheetham Hill", "Chorley", "Chorlton",
  "Clifton", "Colne", "Crumpsall", "Darwen", "Denton", "Didsbury", "Droylsden", "Dumplington",
  "Eccles", "Elton", "Failsworth", "Fallowfield", "Farnworth", "Gatley", "Glodwick",
  "Golborne", "Hall Green", "Harpurhey", "Haslingden", "Haydock", "Hazel Grove", "Heaton Park",
  "Heywood", "Hindley", "Hollinwood", "Horwich", "Hulme", "Hyde", "Kearsley", "Kings Heath",
  "Kings Norton", "Lees", "Leigh", "Levenshulme", "Little Hulton", "Little Lever", "Littleborough",
  "Lowton", "Manchester City Centre", "Marple", "Middleton", "Miles Platting", "Milnrow",
  "Moorside", "Moseley", "Moss Side", "Moston", "Nelson", "Newton Heath", "Newton-le-Willows",
  "Norden", "North Hollywood", "Old Trafford", "Oldham", "Orrell", "Pendlebury", "Prestwich",
  "Radcliffe", "Ramsbottom", "Rawtenstall", "Rochdale", "Romley", "Royton", "Rusholme",
  "Sale", "Salford", "Shaw", "Shirley", "Smithy Bridge", "St Helens", "Stalybridge", "Standish",
  "Stirchley", "Stockport", "Stretford", "Swinton", "Timperley", "Tottington", "Tyldesley",
  "Unsworth", "Urmston", "Walkden", "Walshaw", "Wardle", "Warrington", "Warstock",
  "Westhoughton", "Whalley Range", "Whitefield", "Whitworth", "Wigan", "Withington", "Worsley"
];

export function AreasCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  // Create three copies for seamless loop
  const extendedAreas = [...COVERAGE_AREAS, ...COVERAGE_AREAS, ...COVERAGE_AREAS];

  return (
    <section className="pt-6 pb-8 sm:pt-8 sm:pb-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 max-w-4xl mx-auto">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#ae2027]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Our Coverage Area
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Serving Communities Across
            <span className="block text-[#ae2027]">
              Liverpool
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We cover Liverpool and surrounding areas with automatic driving lessons.
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 italic">
            Automatic driving lessons across Liverpool and surrounding areas.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative mb-8 sm:mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Overlays for edge fade */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Content */}
          <div className="overflow-hidden py-4">
            <div 
              className={`flex gap-3 sm:gap-4 ${isPaused ? '' : 'animate-scroll'}`}
              style={{
                width: 'max-content',
              }}
            >
              {extendedAreas.map((area, index) => (
                <div
                  key={`${area}-${index}`}
                  className="group relative flex-shrink-0"
                >
                  <div className="relative px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-[#ae2027] hover:bg-[#ae2027] transition-all duration-300 hover:shadow-lg hover:shadow-[#ae2027]/20 hover:scale-105 cursor-pointer">
                    {/* Area name */}
                    <span className="relative text-gray-900 group-hover:text-white font-semibold text-sm sm:text-base whitespace-nowrap transition-colors duration-300">
                      {area}
                    </span>

                    {/* Location pin icon on hover */}
                    <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-0">
                      <div className="bg-white rounded-full p-1 sm:p-1.5 shadow-lg">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#ae2027]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pause indicator - mobile friendly */}
          {isPaused && (
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-gray-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-gray-200 shadow-sm">
                <span className="text-gray-700 text-xs sm:text-sm font-medium flex items-center gap-1.5 sm:gap-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Paused
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Stats Section - Mobile responsive grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-8 sm:mb-12">
          <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-200">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ae2027] mb-1 sm:mb-2">140+</div>
            <div className="text-xs sm:text-sm text-gray-600">Areas Covered</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-200">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ae2027] mb-1 sm:mb-2">4</div>
            <div className="text-xs sm:text-sm text-gray-600">Major Cities</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-200">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ae2027] mb-1 sm:mb-2">100%</div>
            <div className="text-xs sm:text-sm text-gray-600">Coverage</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-200">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ae2027] mb-1 sm:mb-2">24/7</div>
            <div className="text-xs sm:text-sm text-gray-600">Support</div>
          </div>
        </div>

        {/* CTA - Mobile responsive */}
        <div className="text-center">
          <a 
            href="/book-now"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#ae2027] hover:bg-[#8a191f] text-white text-sm sm:text-base font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#ae2027]/30 hover:scale-105"
          >
            Find Your Local Instructor
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 150s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}