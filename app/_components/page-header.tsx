"use client";

import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, Compass } from "lucide-react"; // Import the icon you want

const pageMeta: { pattern: RegExp; title: string; description: string }[] = [
  {
    pattern: /^\/events(\/\w+)?$/,
    title: "Events",
    description: "Explore upcoming events on campus",
  },
  {
    pattern: /^\/events\/[\w-]+$/,
    title: "Event Details",
    description: "See the details for this event",
  },
  {
    pattern: /^\/journals$/,
    title: "Journal",
    description: "Track your thoughts and emotions",
  },
  {
    pattern: /^\/journals\/\w+$/,
    title: "Journal Entry",
    description: "Review or edit your entry",
  },
  {
    pattern: /^\/resources$/,
    title: "Resources",
    description: "Curated articles, podcasts, and guides",
  },
  {
    pattern: /^\/profile$/,
    title: "Profile",
    description: "Manage your account and preferences",
  },
  {
    pattern: /^\/chat$/,
    title: "Mental Guide",
    description: "Your mental wellness companion",
  },
];

export default function PageHeader() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/") return null;

  const matchedMeta = pageMeta.find((meta) => meta.pattern.test(pathname)) || {
    title: pathname.split("/").pop()?.replace(/-/g, " ") || "Page",
    description: "You're viewing this page",
  };

  const isCompassGuide = /^\/chat$/.test(pathname);

  return (
    <div className="fixed top-0 z-40 bg-background shadow-sm w-screen py-3">
      <div className="flex items-center gap-3">
        <button
          className="p-2 rounded-md hover:bg-muted transition-colors"
          onClick={() => router.back()}
          aria-label="Go back"
        >
          <ArrowLeft className="h-5 w-5 text-foreground" />
        </button>

        {isCompassGuide && (
          <Compass className="h-7 w-7 text-primary" aria-hidden="true" />
        )}

        <div className="flex flex-col">
          <h1 className="text-lg font-semibold capitalize leading-tight">
            {matchedMeta.title}
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {matchedMeta.description}
          </p>
        </div>
      </div>
    </div>
  );
}
