"use client";

import { PageShell } from "@/components/PageShell";
import { PAGE_CONTENT } from "@/lib/pageContent";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";

const pricingData = {
  area1: {
    name: "Area 1",
    areas: [
      "Ainsworth", "Alkrington", "Atherton", "Bamford", "Bolton", "Bury", "Castleton", "Chadderton", "Cheetham Hill",
      "Chorlton", "Crumpsall", "Didsbury", "Elton", "Failsworth", "Fallowfield", "Farnworth", "Glodwick",
      "Harpurhey", "Heaton Park", "Heywood", "Hollinwood", "Horwich", "Hulme", "Kearsley", "Lees", "Leigh",
      "Levenshulme", "Little Hulton", "Little Lever", "Littleborough", "Manchester City Centre", "Middleton",
      "Miles Platting", "Milnrow", "Moorside", "Moss Side", "Moston", "Newton Heath", "Norden", "Oldham",
      "Prestwich", "Radcliffe", "Ramsbottom", "Rochdale", "Royton", "Rusholme", "Salford", "Shaw", "Smithy Bridge",
      "Tottington", "Tyldesley", "Unsworth", "Walkden", "Walshaw", "Wardle", "Westhoughton",
      "Whalley Range", "Whitefield", "Whitworth", "Withington", "Worsley"
    ],
    prices: {
      twoHour: 65,
      tenHourBlock: 300,
      discount: 60,
      testDay: 90
    }
  },
  area1B: {
    name: "Area 1B",
    areas: [
      "Bournville", "Hall Green", "Kings Heath", "Kings Norton", "Moseley", "North Hollywood",
      "Shirley", "Stirchley", "Warstock"
    ],
    prices: {
      twoHour: 65,
      tenHourBlock: 300,
      discount: 60,
      testDay: 90
    }
  },
  area2: {
    name: "Area 2",
    areas: [
      "Accrington", "Barrowford", "Blackrod", "Blackburn", "Brierfield",
      "Burnley", "Clifton", "Colne", "Nelson", "Old Trafford", "Pendlebury",
      "Stretford", "Swinton"
    ],
    prices: {
      twoHour: 70,
      tenHourBlock: 325,
      discount: 65,
      testDay: 90
    }
  },
  area3: {
    name: "Area 3",
    areas: [
      "Abram", "Ashton-Under-Lyne", "Audenshaw", "Chorley", "Darwen",
      "Denton", "Droylsden", "Dukinfield", "Eccles", "Golborne", "Haslingden",
      "Hindley", "Hyde", "Lowton", "Orrell", "Rawtenstall", "Stalybridge",
      "Standish", "Wigan"
    ],
    prices: {
      twoHour: 75,
      tenHourBlock: 350,
      discount: 70,
      testDay: 90
    }
  },
  area4: {
    name: "Area 4",
    areas: [
      "Altrincham", "Ashton-in-Makerfield", "Billinge", "Burtonwood",
      "Cheadle", "Gatley", "Haydock", "Hazel Grove", "Marple", "Newton-le-Willows",
      "Romiley", "Sale", "St Helens", "Stockport", "Timperley",
      "Urmston", "Warrington"
    ],
    prices: {
      twoHour: 80,
      tenHourBlock: 375,
      discount: 75,
      testDay: 100
    }
  }
};

export default function PricesPage() {
  const content = PAGE_CONTENT.prices;
  const [selectedArea, setSelectedArea] = useState<keyof typeof pricingData>("area1");
  const [searchQuery, setSearchQuery] = useState("");

  const currentAreaData = pricingData[selectedArea];

  // Filter areas based on search
  const filteredAreas = searchQuery
    ? Object.entries(pricingData).find(([_, data]) =>
        data.areas.some(area => 
          area.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )?.[0] as keyof typeof pricingData || selectedArea
    : selectedArea;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      const foundArea = Object.entries(pricingData).find(([_, data]) =>
        data.areas.some(area => 
          area.toLowerCase().includes(query.toLowerCase())
        )
      );
      if (foundArea) {
        setSelectedArea(foundArea[0] as keyof typeof pricingData);
      }
    }
  };

  return (
    <PageShell title={content.title} intro={content.intro}>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Red Banner Section */}
        <section className="bg-[#c41e3a] py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-6">
              {/* Search Bar */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <input
                    type="text"
                    placeholder="Search by area"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full px-6 py-3 pr-12 rounded-lg border-2 border-white/20 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Description */}
              <p className="text-white text-center text-base sm:text-lg max-w-4xl mx-auto">
                At Drive 4 Pass, our prices are carefully set to reflect local driving school rates — keeping your lessons fair, transparent, and great value across every area.
              </p>
            </div>
          </div>
        </section>

        {/* Tabs and Pricing Section */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Area Tabs */}
              <div className="flex flex-wrap gap-2 mb-8 bg-gray-50 p-2 rounded-xl">
                {Object.entries(pricingData).map(([key, data]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedArea(key as keyof typeof pricingData)}
                    className={`flex-1 min-w-[100px] px-4 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
                      selectedArea === key
                        ? "bg-white text-[#c41e3a] shadow-md border-2 border-[#c41e3a]"
                        : "bg-transparent text-gray-600 hover:bg-white hover:text-gray-900"
                    }`}
                  >
                    {data.name}
                  </button>
                ))}
              </div>

              {/* Content Grid */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Areas List */}
                <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border-2 border-gray-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                    Covered Areas
                  </h3>
                  <div className="text-gray-600 leading-relaxed">
                    {currentAreaData.areas.join(", ")}
                  </div>
                </div>

                {/* Pricing Cards */}
                <div className="space-y-4">
                  {/* 2-Hour Lesson */}
                  <div className="bg-white border-2 border-gray-200 hover:border-[#c41e3a] rounded-2xl p-6 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                          2-Hours Lesson
                        </h4>
                        <div className="h-1 w-full bg-gradient-to-r from-[#c41e3a] to-transparent rounded-full"></div>
                      </div>
                      <div className="text-3xl sm:text-4xl font-bold text-[#c41e3a]">
                        £{currentAreaData.prices.twoHour}
                      </div>
                    </div>
                  </div>

                  {/* 10-Hour Block */}
                  <div className="bg-white border-2 border-gray-200 hover:border-[#c41e3a] rounded-2xl p-6 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                          10-Hours Block Booking
                        </h4>
                        <div className="h-1 w-full bg-gradient-to-r from-[#c41e3a] to-transparent rounded-full"></div>
                      </div>
                      <div className="text-3xl sm:text-4xl font-bold text-[#c41e3a]">
                        £{currentAreaData.prices.tenHourBlock}
                      </div>
                    </div>
                  </div>

                  {/* Blue Light & Student Discount */}
                  <div className="bg-white border-2 border-gray-200 hover:border-[#c41e3a] rounded-2xl p-6 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                          Blue Light & Student Discount
                        </h4>
                        <div className="h-1 w-full bg-gradient-to-r from-[#c41e3a] to-transparent rounded-full"></div>
                      </div>
                      <div className="text-3xl sm:text-4xl font-bold text-[#c41e3a]">
                        £{currentAreaData.prices.discount}
                      </div>
                    </div>
                  </div>

                  {/* Test Day */}
                  <div className="bg-white border-2 border-gray-200 hover:border-[#c41e3a] rounded-2xl p-6 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                          Test Day
                        </h4>
                        <div className="h-1 w-full bg-gradient-to-r from-[#c41e3a] to-transparent rounded-full"></div>
                      </div>
                      <div className="text-3xl sm:text-4xl font-bold text-[#c41e3a]">
                        £{currentAreaData.prices.testDay}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Select the package that fits your goals. Whether you want a single refresher, a structured block booking,
                or an intensive course ahead of your test, we'll help you build the confidence you need on the road.
              </p>
              <Link
                href="/book-now"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#c41e3a]/30 hover:scale-105"
              >
                Book Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Features */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
                Why Choose Our Pricing?
              </h2>
              <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center p-6 bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-[#c41e3a] transition-all duration-300">
                  <div className="w-16 h-16 bg-[#c41e3a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Fair Pricing</h3>
                  <p className="text-gray-600">
                    Transparent rates based on local market standards with no hidden fees
                  </p>
                </div>

                <div className="text-center p-6 bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-[#c41e3a] transition-all duration-300">
                  <div className="w-16 h-16 bg-[#c41e3a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Special Discounts</h3>
                  <p className="text-gray-600">
                    Blue Light Card holders and students save £5 on every 2-hour lesson
                  </p>
                </div>

                <div className="text-center p-6 bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-[#c41e3a] transition-all duration-300">
                  <div className="w-16 h-16 bg-[#c41e3a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Options</h3>
                  <p className="text-gray-600">
                    Choose individual lessons or save more with block booking packages
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}