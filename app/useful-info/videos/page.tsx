"use client";

import { PageShell } from "@/components/PageShell";
import { PAGE_CONTENT } from "@/lib/pageContent";
import { useState } from "react";
import { Play, Clock, CheckCircle, BookOpen, Video } from "lucide-react";

const videoCategories = [
  {
    id: "theory",
    title: "Theory Test Preparation",
    icon: BookOpen,
    videos: [
      {
        title: "Theory test 2025: official DVSA guide",
        duration: "15:30",
        description: "Complete guide to passing your theory test with official DVSA information",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Hazard Perception Test Tips & Tricks",
        duration: "12:45",
        description: "Master the hazard perception section with expert guidance",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: "show-me-tell-me",
    title: "Show Me, Tell Me Questions",
    icon: CheckCircle,
    videos: [
      {
        title: "'Show me, tell me': tell me questions 2024",
        duration: "4:30",
        description: "Learn all the tell me questions for your driving test",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Show Me Questions Demonstrations",
        duration: "8:15",
        description: "Visual demonstrations of all show me questions",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: "vehicle-checks",
    title: "Vehicle Safety Checks",
    icon: CheckCircle,
    videos: [
      {
        title: "Tyre checks",
        duration: "0:55",
        description: "How to properly check your tyres for safety",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Handbrake checks",
        duration: "0:25",
        description: "Ensuring your handbrake is working correctly",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Fluid checks",
        duration: "1:02",
        description: "Checking oil, coolant, and other essential fluids",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Brakes, lights, indicators and horn checks",
        duration: "0:41",
        description: "Complete guide to checking all vehicle lights and controls",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: "driving-tips",
    title: "Driving Skills & Tips",
    icon: Video,
    videos: [
      {
        title: "The Honest Truth",
        duration: "4:59",
        description: "Important insights for new drivers",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Parallel Parking Made Easy",
        duration: "6:20",
        description: "Step-by-step guide to perfect parallel parking",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoId: "dQw4w9WgXcQ"
      },
      {
        title: "Roundabout Navigation",
        duration: "8:45",
        description: "Master roundabouts with confidence",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        videoId: "dQw4w9WgXcQ"
      }
    ]
  }
];

export default function VideosPage() {
  const content = PAGE_CONTENT.videos || {
    title: "Video Learning Centre",
    intro: "Accelerate your learning with our comprehensive video guides"
  };

  const [selectedCategory, setSelectedCategory] = useState(videoCategories[0].id);
  const [currentVideo, setCurrentVideo] = useState(videoCategories[0].videos[0]);

  const currentCategory = videoCategories.find(cat => cat.id === selectedCategory);

  return (
    <PageShell title={content.title} intro={content.intro}>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Accelerate your learning
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                We've gathered some great videos together for you so you can watch & learn to help your driving theory and skill 24/7
              </p>
            </div>
          </div>
        </section>

        {/* Main Video Player Section */}
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Video Player */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Video Embed */}
                    <div className="relative bg-black aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${currentVideo.videoId}`}
                        title={currentVideo.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0"
                      />
                    </div>

                    {/* Video Info */}
                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="px-3 py-1 bg-[#c41e3a] text-white text-xs font-bold rounded-full">
                          {currentCategory?.title}
                        </div>
                        <div className="flex items-center gap-1 text-gray-600 text-sm">
                          <Clock className="w-4 h-4" />
                          {currentVideo.duration}
                        </div>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                        {currentVideo.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {currentVideo.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Playlist Sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-gray-900">
                        Some useful watching!
                      </h4>
                      <span className="text-sm text-gray-600">
                        {videoCategories.reduce((acc, cat) => acc + cat.videos.length, 0)} Videos
                      </span>
                    </div>

                    <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                      {currentCategory?.videos.map((video, index) => (
                        <div
                          key={index}
                          onClick={() => setCurrentVideo(video)}
                          className={`group cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${
                            currentVideo.videoId === video.videoId
                              ? 'ring-2 ring-[#c41e3a]'
                              : 'hover:ring-2 hover:ring-gray-300'
                          }`}
                        >
                          <div className="flex gap-3 p-3 bg-gray-50 hover:bg-gray-100 transition-colors">
                            <div className="relative flex-shrink-0 w-24 h-16 bg-gray-200 rounded-lg overflow-hidden">
                              <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                                <Play className="w-6 h-6 text-white" />
                              </div>
                              <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                                {video.duration}
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h5 className="font-semibold text-sm text-gray-900 line-clamp-2 mb-1">
                                {video.title}
                              </h5>
                              <p className="text-xs text-gray-600 line-clamp-1">
                                {video.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
                Browse by Category
              </h3>

              {/* Category Buttons */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {videoCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setCurrentVideo(category.videos[0]);
                      }}
                      className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-[#c41e3a] border-[#c41e3a] text-white shadow-lg'
                          : 'bg-white border-gray-200 text-gray-900 hover:border-[#c41e3a]'
                      }`}
                    >
                      <Icon className={`w-8 h-8 mx-auto mb-3 ${
                        selectedCategory === category.id ? 'text-white' : 'text-[#c41e3a]'
                      }`} />
                      <h4 className="font-bold text-sm sm:text-base text-center">
                        {category.title}
                      </h4>
                      <p className={`text-xs mt-2 text-center ${
                        selectedCategory === category.id ? 'text-white/80' : 'text-gray-600'
                      }`}>
                        {category.videos.length} videos
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Video Grid for Selected Category */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentCategory?.videos.map((video, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setCurrentVideo(video);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group cursor-pointer bg-white border-2 border-gray-200 hover:border-[#c41e3a] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="relative aspect-video bg-gray-200">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 flex items-center justify-center transition-all duration-300">
                        <div className="w-16 h-16 bg-[#c41e3a] group-hover:bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                          <Play className="w-8 h-8 text-white group-hover:text-[#c41e3a] ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/80 text-white text-sm px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-5">
                      <h5 className="font-bold text-gray-900 mb-2 line-clamp-2">
                        {video.title}
                      </h5>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {video.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
                Why Learn with Videos?
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#c41e3a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Visual Learning
                  </h4>
                  <p className="text-gray-600">
                    See exactly how to perform each maneuver and safety check with clear demonstrations
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#c41e3a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Learn 24/7
                  </h4>
                  <p className="text-gray-600">
                    Study at your own pace, whenever it suits you - day or night
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#c41e3a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Test Preparation
                  </h4>
                  <p className="text-gray-600">
                    Get fully prepared for your theory and practical tests with comprehensive guides
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
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Ready to start your driving journey?
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                Combine video learning with professional instruction for the best results
              </p>
              <a
                href="/book-now"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Book Your First Lesson
                <Play className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}