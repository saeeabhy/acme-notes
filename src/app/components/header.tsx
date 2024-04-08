import Link from "next/link";
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const typeWriterInput = [
  {
    text: "Introducing,",
    className: "font-thin",
  },
  {
    text: "Acme Notes.",
    className: "font-semibold text-yellow-500",
  },
];

export default function Header() {
  return (
    <section className="">
      <div className="px-12 h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]">
          <div className="container md:px-6"></div>
        </div>
        <div className="gap-8 max-[800px]:flex-col flex justify-between">
          <div className="flex flex-col justify-center items-center gap-0">
            <TypewriterEffectSmooth
              className="width-[400px] pt-7"
              words={typeWriterInput}
            ></TypewriterEffectSmooth>
            <p className="text-center text-black text-3xl font-semibold">
              Tame your work, organize your life.
            </p>
            <Link
              className=" w-[25rem] border-2 border-black bo flex h-10 items-center justify-center rounded-lg bg-gradient-to-b from-yellow-200 to-yellow-400 hover:bg-yellow-500 px-20 mt-6 py-8 text-xl transition-colors"
              href="#"
            >
              Try for Free!
            </Link>
          </div>
          <Image
            alt="acme-notes-demo-image"
            height="600"
            src="/acme-notes-demo.png"
            width="800"
            priority
          />
        </div>
      </div>
    </section>
  );
}
