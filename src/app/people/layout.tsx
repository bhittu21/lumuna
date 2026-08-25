import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our People",
  description: "Meet the 2025-26 Steering Committee and leadership team of LUMUNA.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

