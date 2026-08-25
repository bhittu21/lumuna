import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the LUMUNA Executive Board.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

