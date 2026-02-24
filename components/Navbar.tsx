"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
      {
        label: "Automatic Driving Lessons",
        href: "/driving-lessons/automatic-driving-lessons",
      },
      { label: "Prices", href: "/driving-lessons/prices" },
      { label: "FAQ", href: "/driving-lessons/faq" },
    ],
  },
  { label: "Blogs", href: "/blogs" },
  { label: "Instructor Training", href: "/instructor-training" },
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

  const handleDropdownEnter = (label: string) => setOpenDropdown(label);
  const handleDropdownLeave = () => setOpenDropdown(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-black shadow-lg">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/zell_driving_school_logo.png"
              alt="Zell Driving School logo"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
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
                    onMouseEnter={() => handleDropdownEnter(label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown((v) => (v === label ? null : label))
                      }
                      className={`text-sm font-semibold transition ${
                        active ? "text-white" : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {label} ▾
                    </button>
                    {isOpen && (
                      /* Added top-full with negative margin-top trick + pt-2 so the
                         dropdown overlaps the gap, preventing mouseLeave firing when
                         moving from button → dropdown */
                      <div className="absolute left-0 top-full pt-2">
                        <div className="w-56 overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 py-2 shadow-xl">
                          {item.items.map((sub) => {
                            const subActive = isActivePath(pathname, sub.href);
                            return (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className={`block px-4 py-2.5 text-sm transition ${
                                  subActive
                                    ? "bg-gray-700 font-semibold text-white"
                                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                                }`}
                              >
                                {sub.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={`text-sm font-semibold transition ${
                    active ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/book-now"
              className="btn-primary hidden md:inline-flex"
            >
              Book Now
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-white md:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-gray-800 bg-black pb-4 md:hidden">
          <Container>
            <nav className="mt-3 space-y-1">
              {NAV.map((item) => {
                if ("items" in item) {
                  const open = openDropdown === item.label;
                  return (
                    <div key={item.label} className="border-b border-gray-800">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-3 text-left font-semibold text-white"
                        onClick={() =>
                          setOpenDropdown((v) =>
                            v === item.label ? null : item.label,
                          )
                        }
                      >
                        {item.label}
                        <span className="text-xs text-gray-400">
                          {open ? "▲" : "▼"}
                        </span>
                      </button>
                      {open && (
                        <div className="space-y-1 pb-3 pl-4">
                          {item.items.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block py-2 text-sm text-gray-400 hover:text-white"
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
                    href={item.href!}
                    className="block py-3 font-semibold text-white"
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
