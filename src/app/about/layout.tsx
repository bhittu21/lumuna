import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the history, mission, and vision of the Leading University Model United Nations Association (LUMUNA) since its foundation in 2016.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

