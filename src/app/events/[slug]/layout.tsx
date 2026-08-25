import { Metadata } from "next";
import { MOCK_EVENTS } from "@/data/mock";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const event = MOCK_EVENTS.find(e => e.slug === params.slug);
  if (!event) return { title: "Event Not Found" };
  return {
    title: event.name,
    description: event.description,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
