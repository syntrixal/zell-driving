import { EnquiryForm } from "@/components/EnquiryForm";
import { PageShell } from "@/components/PageShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Drive 4 Pass Driving School",
  description:
    "Join the Drive 4 Pass team. Apply to become a driving instructor and enjoy flexible working, great earnings, and full support.",
};

export default function CareersPage() {
  return (
    <PageShell
      title="Join Our Team"
      intro="Become a Drive 4 Pass driving instructor and enjoy flexible working hours, competitive earnings, and full ongoing support."
    >
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Form Section with Map */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                  Instructor Application
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Start your instructor journey today
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Whether you're a PDI or qualified ADI, we'd love to hear from
                you. Fill in the form and one of our team will be in touch to
                discuss the next steps.
              </p>
            </div>

            {/* Form and Map Grid */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {/* Map */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden lg:h-[850px] h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76173.64244203735!2d-2.3160566!3d53.4807593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester%2C%20UK!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Drive 4 Pass Location"
                />
              </div>

              {/* Form */}
              <div>
                <EnquiryForm allowedTabs={["Instructor Application"]} />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Boxes */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Call Us */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-[#c41e3a] transition-all duration-300 hover:shadow-lg">
                <div className="w-16 h-16 bg-[#c41e3a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Call Us
                </h3>
                <a
                  href="tel:03333357000"
                  className="text-2xl font-bold text-[#c41e3a] hover:text-[#a01830] transition-colors"
                >
                  0333 335 7000
                </a>
              </div>

              {/* Email Us */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-[#c41e3a] transition-all duration-300 hover:shadow-lg">
                <div className="w-16 h-16 bg-[#c41e3a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Email Us
                </h3>
                <a
                  href="mailto:franchisecenter@pass.co.uk"
                  className="text-lg font-semibold text-[#c41e3a] hover:text-[#a01830] transition-colors break-all"
                >
                  franchisecenter@pass.co.uk
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
