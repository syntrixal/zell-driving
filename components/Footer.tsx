import Link from "next/link";
import { Car } from "lucide-react";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "About Us", href: "/" },
      { label: "Our Courses", href: "/driving-lessons" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/book-now" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Beginner Course", href: "/driving-lessons" },
      { label: "Advanced Course", href: "/driving-lessons" },
      { label: "Defensive Driving", href: "/driving-lessons" },
      { label: "Road Test Prep", href: "/driving-lessons/faq" },
    ],
  },
  {
    title: "Driving Lessons",
    links: [
      { label: "Areas", href: "/driving-lessons/areas" },
      {
        label: "Automatic Lessons",
        href: "/driving-lessons/automatic-driving-lessons",
      },
      { label: "Prices", href: "/driving-lessons/prices" },
      { label: "FAQ", href: "/driving-lessons/faq" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 py-20 md:py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-16 grid gap-12 lg:gap-16 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              {/* Replace logo-placeholder.png with the real brand logo here */}
              <img
                src="/zell_driving_school_logo_white.png"
                alt="Zell Driving School logo"
                className="h-20 w-40 "
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 pt-3">
              Professional driving school dedicated to building confident, safe
              drivers.building confident, safe drivers.
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 font-bold">{group.title}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {group.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="transition hover:text-[#FFD60A]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Zell Driving School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
