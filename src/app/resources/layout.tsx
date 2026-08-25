import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Resources",
  description: "Official study guides and procedural documents for LUMUNA delegates.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

