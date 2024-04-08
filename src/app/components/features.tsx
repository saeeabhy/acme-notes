import Image from "next/image";
import { ArchiveIcon, BookOpenIcon, TypeIcon, UsersIcon } from "../icons";

const features = [
  {
    icon: <BookOpenIcon className="h-12 w-12 text-yellow-400" />,
    heading: "Effortless Note-Taking",
    description:
      "Quickly jot down your ideas with our intuitive note-taking interface.",
    imageUrl: "/note-taking.png",
  },
  {
    icon: <ArchiveIcon className="h-12 w-12 text-yellow-500" />,
    heading: "Powerful Organization",
    description:
      "Tag, sort, and search your notes to find the information you need when you need it.",
    imageUrl: "/search.png",
  },
  {
    icon: <UsersIcon className="h-12 w-12 text-yellow-500" />,
    heading: "Seamless Sharing",
    description:
      "Collaborate with others by sharing your notes, making it easy to work together.",
    imageUrl: "/share.png",
  },
  {
    icon: <TypeIcon className="h-12 w-12 text-yellow-500" />,
    heading: "Rich Formatting",
    description:
      "Enhance your notes with rich formatting options including bold, italic, and more, to create visually appealing and structured content.",
    imageUrl: "/rich.png",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="w-full py-12 px-4 md:py-24 lg:py-32 bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.1] "
    >
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl text-yellow-500 font-bold tracking-tighter sm:text-5xl pb-4">
              Capture. Organize. Share.
            </h2>
            <p className="max-w-[900px] text-black-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Acme Notes is designed to help you take better notes. From
              capturing your thoughts to organizing your ideas, it is a tool for
              students, professionals, and anyone who wants to be more
              productive.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start px-8 gap-12">
          {features.map((feature, index) => {
            const featureInfo = (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex justify-start gap-4 items-center">
                  {feature.icon}
                  <h3 className="sm:text-l md:text-2xl lg:text-3xl text-yellow-500 font-bold">
                    {feature.heading}
                  </h3>
                </div>
                <p className="sm:text-m md:text-l lg:text-xl text-black dark:text-gray-500">
                  {feature.description}
                </p>
              </div>
            );

            const featureImage = (
              <Image
                alt="feature-image"
                className="aspect-video rounded-3xl overflow-hidden object-cover object-top"
                height="500"
                src={feature.imageUrl}
                width="500"
              />
            );
            return (
              <div
                key={index}
                className="flex gap-4 justify-between items-center p-4 transform transition-transform hover:scale-105"
              >
                {index % 2 === 0 ? featureInfo : featureImage}
                {index % 2 === 1 ? featureInfo : featureImage}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
