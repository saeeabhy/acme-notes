import Link from "next/link";
import Logo from "./logo";
import Image from "next/image";

export const NAV_LINKS_LIST = [
  {
    label: "Explore",
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
  return (
    <nav className="lg:flex-row bg-gradient-to-t from-white to-amber-400 flex flex-col items-center justify-between py-16 px-64">
      <span className="flex gap-2 justify-start">
        <Image
          alt="Image"
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
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
