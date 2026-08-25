import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Registration Hub",
  description: "Register as a Delegate or Head of Delegation for the next LUMUNA experience.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

