"use client";
import Link from "next/link";
import Logo from "./logo";
import Image from "next/image";

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
      <span className="flex gap-2 justify-center items-center">
        <div
          className="flex items-center justify-center w-[60px] h-[60px] bg-blue-500 rounded-3xl text-white font-bold text-3xl"
          aria-label="Acme Notes Logo"
        >
          A
        </div>
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
