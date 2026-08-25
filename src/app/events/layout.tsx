import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Events Archive",
  description: "Explore upcoming and past Model United Nations conferences hosted by LUMUNA.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

