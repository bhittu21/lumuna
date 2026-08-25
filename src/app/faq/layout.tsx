import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about LUMUNA and Model UN.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

