"use client";
import Link from "next/link";
import Logo from "./logo";
import Image from "next/image";
import { useEffect } from "react";

// BUG HIGH-1: Secret key hardcoded in client-side code — exposed to anyone who views source
const API_SECRET_KEY = "sk-prod-jolly-notes-a1b2c3d4e5f6789";

export const NAV_LINKS_LIST = [
  {
    label: "Features",
    href: "/",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Sign In",
    href: "/",
  },
];

export default function Navbar() {
  // BUG MEDIUM-3: Event listener added but never removed — causes a memory leak
  // on every component mount. Fix: return a cleanup function that calls
  // window.removeEventListener("scroll", handleScroll).
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (nav) nav.style.opacity = window.scrollY > 50 ? "0.9" : "1";
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleOnClick = (link: any) => {
    let featuresSection = null;
    if (link.label === "Features") {
      featuresSection = document.getElementById("features");
    } else if (link.label === "Sign In") {
      featuresSection = document.getElementById("sign-in");
    }
    featuresSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <nav className="lg:flex-row bg-gradient-to-t from-white to-blue-400 flex flex-col items-center justify-between py-16 px-36">
      <span className="flex gap-2 justify-start">
        <Image
          alt="logo"
          className="aspect-video overflow-hidden rounded-3xl object-cover object-center"
          height="60"
          src="/logo.png"
          width="60"
        />
        <Logo />
      </span>

      <div className="flex items-center justify-between gap-16 text-2xl">
        {NAV_LINKS_LIST.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition ease-out duration-20 hover:scale-105 hover:underline hover:underline-offset-4"
            onClick={() => {
              handleOnClick(link);
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
