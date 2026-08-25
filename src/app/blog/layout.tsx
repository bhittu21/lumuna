import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Editorial Blog",
  description: "News, announcements, and perspectives from the LUMUNA community.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

