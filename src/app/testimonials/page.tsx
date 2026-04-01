import Image from "next/image";
import Link from "next/link";
import { StarsIcon } from "../icons";

const reviewersData = [
  {
    name: "Harsaroor Sohal",
    position: "CTO - Junglee Games",
    imageUrl:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1180&q=80",
    rating: 5,
    review:
      "Acme Notes has been a game-changer for me! Its intuitive interface and powerful features make it easy for me to jot down ideas, collaborate with clients, and keep track of deadlines. Highly recommended!",
  },
  {
    name: "Saee Abhyankar",
    position: "CPO - Builder.io",
    imageUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1180&q=80",
    rating: 5,
    review:
      "I've tried several note-taking apps in the past, but Acme Notes stands out for its simplicity and effectiveness. Whether I'm in a meeting, brainstorming ideas, or jotting down reminders, Acme Notes makes the process seamless. It's become an essential tool in my daily workflow!",
  },
  {
    name: "Saransh Chauhan",
    position: "Data Lead - Atlan",
    imageUrl:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    rating: 4,
    review:
      "Acme Notes has been a lifesaver for keeping track of lecture notes, assignments, and study materials. With Acme Notes, I feel more confident and prepared for success in my academic journey.",
  },
  {
    name: "Priya Mehta",
    position: "Product Manager - Razorpay",
    imageUrl:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1180&q=80",
    rating: 5,
    review:
      "Our entire product team switched to Acme Notes and the difference is night and day. The collaboration features and tagging system keep us perfectly aligned. I can't imagine going back to anything else.",
  },
  {
    name: "Rohan Verma",
    position: "Engineering Lead - Freshworks",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1180&q=80",
    rating: 5,
    review:
      "The search and rich-text editing in Acme Notes is unmatched. I can find any note within seconds, and the formatting options make technical documentation a breeze. Absolutely love it.",
  },
  {
    name: "Ananya Krishnan",
    position: "Founder - Leaf Studio",
    imageUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1180&q=80",
    rating: 5,
    review:
      "As a solo founder, staying organized is everything. Acme Notes gives me the structure I need without getting in the way of my creativity. The clean UI is a breath of fresh air.",
  },
];

const caseStudies = [
  {
    company: "Junglee Games",
    logo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=120&q=80",
    industry: "Gaming",
    result: "40% faster meeting follow-ups",
    summary:
      "How Junglee Games streamlined cross-team communication and reduced follow-up time with Acme Notes.",
    href: "#",
  },
  {
    company: "Builder.io",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=120&q=80",
    industry: "Developer Tools",
    result: "3x more productive product reviews",
    summary:
      "Builder.io's product team replaced five tools with Acme Notes, making product reviews faster and more collaborative.",
    href: "#",
  },
  {
    company: "Atlan",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=120&q=80",
    industry: "Data Infrastructure",
    result: "Zero knowledge loss across rotations",
    summary:
      "Atlan's data team uses Acme Notes to maintain a living knowledge base that survives team rotations and onboarding cycles.",
    href: "#",
  },
];

export default function TestimonialsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-t from-white to-yellow-400 py-20 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-black md:text-5xl">
          Loved by teams everywhere
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          See what our customers are saying across reviews, ratings, and real
          stories.
        </p>

        {/* External review platform links */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-6 py-4 shadow-sm hover:shadow-md transition hover:scale-[1.03]"
          >
            <span className="text-2xl font-extrabold text-orange-500">G2</span>
            <div className="text-left">
              <p className="font-semibold text-gray-900 text-sm">
                4.8 / 5 on G2
              </p>
              <p className="text-xs text-gray-500">Read our G2 reviews</p>
            </div>
            <svg
              className="ml-2 h-4 w-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-6 py-4 shadow-sm hover:shadow-md transition hover:scale-[1.03]"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <div className="text-left">
              <p className="font-semibold text-gray-900 text-sm">
                4.9 / 5 on Google
              </p>
              <p className="text-xs text-gray-500">Read our Google reviews</p>
            </div>
            <svg
              className="ml-2 h-4 w-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="bg-white py-16 px-4">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-black md:text-3xl mb-10">
            What our customers say
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviewersData.map((review, i) => (
              <blockquote
                key={i}
                className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8 transition hover:scale-[1.03] hover:bg-yellow-50"
              >
                <div className="flex items-center gap-4">
                  <Image
                    alt={`${review.name}-avatar`}
                    src={review.imageUrl}
                    className="size-14 rounded-full object-cover"
                    width={100}
                    height={100}
                  />
                  <div>
                    {StarsIcon(review.rating)}
                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      {review.name}
                    </p>
                    <p className="text-gray-500 text-sm">{review.position}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">{review.review}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-black md:text-3xl mb-2">
            Customer case studies
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Go deeper with stories from teams using Acme Notes every day.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {caseStudies.map((study, i) => (
              <div
                key={i}
                className="rounded-xl bg-white p-8 shadow-sm border border-gray-100 flex flex-col justify-between transition hover:shadow-md"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src={study.logo}
                      alt={`${study.company} logo`}
                      width={48}
                      height={48}
                      className="rounded-lg object-cover size-12"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {study.company}
                      </p>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                  </div>

                  <p className="text-xl font-bold text-yellow-500 mb-2">
                    {study.result}
                  </p>
                  <p className="text-gray-600 text-sm">{study.summary}</p>
                </div>

                <a
                  href={study.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-black hover:underline hover:underline-offset-4"
                >
                  Read case study
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-400 py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-black md:text-3xl">
          Ready to join thousands of happy users?
        </h2>
        <p className="mt-3 text-gray-800 max-w-xl mx-auto">
          Start taking better notes today — free to try, no credit card needed.
        </p>
        <Link
          href="/#sign-in"
          className="mt-6 inline-block bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Get started free
        </Link>
      </section>
    </main>
  );
}
