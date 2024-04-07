import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const FAQStructuedData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Acme Notes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Acme Notes is a note-taking tool designed to help users capture and organize their thoughts, ideas, and information effectively.",
      },
    },
    {
      "@type": "Question",
      name: "How can I use Acme Notes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can use Acme Notes to create, edit, and organize your notes. It offers features such as text formatting, multimedia support, categorization, and sharing options.",
      },
    },
    {
      "@type": "Question",
      name: "Is Acme Notes available on mobile devices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Acme Notes is available on both iOS and Android devices. You can download the mobile app from the App Store or Google Play Store.",
      },
    },
    {
      "@type": "Question",
      name: "Does Acme Notes offer cloud synchronization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Acme Notes offers cloud synchronization, allowing you to access your notes from anywhere and sync them across multiple devices.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free trial available for Acme Notes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Acme Notes offers a free trial period for new users. You can sign up for a free account and explore the features before deciding to subscribe.",
      },
    },
  ],
};
export const metadata: Metadata = {
  title: "Acme Notes",
  description: "Tame your work, organize your life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQStructuedData) }}
        ></script>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
