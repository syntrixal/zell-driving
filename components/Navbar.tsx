"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Car } from "lucide-react";
import { Container } from "@/components/ui/Container";

type NavItem =
  | { label: string; href: string }
  | { label: string; href?: string; items: { label: string; href: string }[] };

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Book Now", href: "/book-now" },

  {
    label: "Driving Lessons",
    href: "/driving-lessons",
    items: [
      // { label: "Areas", href: "/driving-lessons/areas" },
      {
        label: "Automatic Driving Lessons",
        href: "/driving-lessons/automatic-driving-lessons",
      },
      { label: "Prices", href: "/driving-lessons/prices" },
      { label: "FAQ", href: "/driving-lessons/faq" },
    ],
  },
  // { label: "Intensives", href: "/intensives" },
  // {
  //   label: "Instructor Training",
  //   href: "/instructor-training",
  //   items: [
  //     { label: "Instructor Training", href: "/instructor-training" },
  //     { label: "Franchise", href: "/instructor-training/franchise" },
  //     { label: "Jobs", href: "/instructor-training/jobs" },
  //     { label: "PDI Part 3 Rescue Plan", href: "/instructor-training/pdi-part-3-rescue-plan" },
  //   ],
  // },
  { label: "Blogs", href: "/blogs" },
  { label: "Careers", href: "/careers" },
  {
    label: "Useful Info",
    href: "/useful-info",
    items: [
      { label: "Requirements", href: "/useful-info/requirements" },
      { label: "Show Me / Tell Me", href: "/useful-info/show-me-tell-me" },
      { label: "Videos", href: "/useful-info/videos" },
      { label: "Post Test Tuition", href: "/useful-info/post-test-tuition" },
      { label: "Resources", href: "/useful-info/resources" },
    ],
  },
];

function isActivePath(pathname: string, href?: string) {
  if (!href) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  React.useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            {/* Replace logo-placeholder.png with the real brand logo here */}
            <img
              src="/zell_driving_school_logo.png"
              alt="Zell Driving School logo"
              className="h-15 w-30 "
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => {
              const label = item.label;
              if ("items" in item) {
                const active =
                  isActivePath(pathname, item.href) ||
                  item.items.some((i) => isActivePath(pathname, i.href));
                const isOpen = openDropdown === label;
                return (
                  <div
                    key={label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown((v) => (v === label ? null : label))
                      }
                      className={`text-sm font-semibold transition ${
                        active
                          ? "text-gray-900"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      {label} ▾
                    </button>
                    {isOpen && (
                      <div className="absolute left-0 top-full mt-2 w-56 overflow-hidden rounded-2xl border border-gray-100 bg-white py-2 shadow-lg">
                        {item.items.map((sub) => {
                          const subActive = isActivePath(pathname, sub.href);
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={`block px-4 py-2.5 text-sm transition ${
                                subActive
                                  ? "bg-gray-100 font-semibold text-gray-900"
                                  : "text-gray-700 hover:bg-gray-50"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold transition ${
                    active
                      ? "text-gray-900"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/book-now"
              className="btn-primary hidden md:inline-flex"
            >
              Book Now
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 md:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>
      </Container>

      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white pb-4 md:hidden">
          <Container>
            <nav className="mt-3 space-y-1">
              {NAV.map((item) => {
                if ("items" in item) {
                  const open = openDropdown === item.label;
                  return (
                    <div key={item.label} className="border-b border-gray-100">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-3 text-left font-semibold text-gray-900"
                        onClick={() =>
                          setOpenDropdown((v) =>
                            v === item.label ? null : item.label,
                          )
                        }
                      >
                        {item.label}
                        <span className="text-xs">{open ? "▲" : "▼"}</span>
                      </button>
                      {open && (
                        <div className="space-y-1 pb-3 pl-4">
                          {item.items.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block py-2 text-sm text-gray-600"
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-3 font-semibold text-gray-900"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/book-now"
                className="btn-primary mt-4 flex w-full"
                onClick={() => setMobileOpen(false)}
              >
                Book Now
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </nav>
  );
}
