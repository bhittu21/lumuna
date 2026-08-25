export type Member = {
  id: string;
  name: string;
  role: string;
  category: "Advisory Board" | "Executive Board" | "Mid-Level" | "Organising";
  photo?: string;
  bio?: string;
  session: string;
  order: number;
};

export type Event = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  date: string;
  location: string;
  status: "Upcoming" | "Ongoing" | "Past";
  type: string;
  theme?: string;
  description: string;
  coverImage?: string;
  registrationLink?: string;
  stats?: {
    delegates?: number;
    committees?: number;
    eb?: number;
  };
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  content: string; // Markdown or HTML
};

export type RegistrationForm = {
  id: string;
  title: string;
  status: "OPEN" | "CLOSED" | "COMING SOON";
  deadline?: string;
  googleFormUrl?: string;
  description: string;
  fee?: string;
};

export type Milestone = {
  id: string;
  year: string;
  title: string;
  description: string;
};

export const MOCK_MEMBERS: Member[] = [
  {
    id: "m-1",
    name: "Ashfaque Ahmad Shovon",
    role: "Advisor",
    category: "Advisory Board",
    session: "2025-2026",
    order: 1,
  },
  {
    id: "m-2",
    name: "Md. Jonaid Siddiki Asif",
    role: "President",
    category: "Executive Board",
    session: "2025-2026",
    order: 1,
  },
  {
    id: "m-3",
    name: "Faiyaz Shahdib Sakib",
    role: "General Secretary",
    category: "Executive Board",
    session: "2025-2026",
    order: 2,
  },
];

export const MOCK_EVENTS: Event[] = [
  {
    id: "e-1",
    slug: "lu-diplomatic-convention-2025",
    name: "Leading University Diplomatic Convention 2025",
    shortName: "LUDC 2025",
    date: "July 11–12, 2025",
    location: "Leading University, Sylhet",
    status: "Past",
    type: "Convention",
    theme: "Turning the Tide: Global Diplomacy in the Face of Floods and Rising Seas",
    description: "A major diplomatic convention addressing global climate challenges, bringing together over 150 delegates across 5 specialized committees.",
    stats: {
      delegates: 150,
      committees: 5,
      eb: 15,
    }
  },
  {
    id: "e-2",
    slug: "lu-intra-mun-2024",
    name: "Leading University Intra-MUN 2024",
    shortName: "LU Intra-MUN '24",
    date: "September 20–21, 2024",
    location: "Leading University, Sylhet",
    status: "Past",
    type: "Intra-University Conference",
    theme: "Fostering International Cooperation for Peacebuilding and Durable Solutions in Conflict Zones",
    description: "An intra-university conference dedicated to finding durable solutions in conflict zones and promoting global peacebuilding initiatives.",
    stats: {
      delegates: 143,
      committees: 5,
      eb: 13,
    }
  },
];

export const MOCK_MILESTONES: Milestone[] = [
  {
    id: "ms-1",
    year: "2016",
    title: "Foundation of LUMUNA",
    description: "Leading University Model United Nations Association is founded, establishing a new platform for youth diplomacy in northeastern Bangladesh. The association organizes its first intra-university MUN.",
  },
  {
    id: "ms-2",
    year: "2017",
    title: "First Regional Conference",
    description: "LUMUNA organizes the first regional Model United Nations event in Sylhet, expanding its reach beyond the university campus and inviting delegates from across the region.",
  },
  {
    id: "ms-3",
    year: "2024",
    title: "LU Intra-MUN 2024",
    description: "Successfully hosted the LU Intra-MUN focusing on peacebuilding and durable solutions in conflict zones, featuring 143 delegates and 5 committees.",
  },
  {
    id: "ms-4",
    year: "2025",
    title: "Diplomatic Convention",
    description: "Organized the Leading University Diplomatic Convention 2025 centered around global climate diplomacy, gathering over 150 delegates.",
  },
];

export const MOCK_BLOGS: BlogPost[] = [
  {
    id: "b-1",
    slug: "founding-lumuna",
    title: "A Retrospective on LUMUNA's Foundation",
    date: "2025-10-15",
    author: "LUMUNA Historical Archive",
    category: "History",
    excerpt: "Looking back at 2016 when the premier Model UN association of Sylhet was established.",
    content: "<p>Content pending.</p>",
  },
  {
    id: "b-2",
    slug: "ludc-2025-recap",
    title: "Turning the Tide: Recap of LUDC 2025",
    date: "2025-07-20",
    author: "LUMUNA Editorial",
    category: "Event Coverage",
    excerpt: "Reflections on the Leading University Diplomatic Convention and the crucial discourse on global floods.",
    content: "<p>Content pending.</p>",
  },
  {
    id: "b-3",
    slug: "importance-of-diplomacy-education",
    title: "The Role of MUN in Shaping Future Leaders",
    date: "2025-05-10",
    author: "LUMUNA Academics",
    category: "Education",
    excerpt: "How Model UN fosters critical thinking, research skills, and diplomatic tact among university students.",
    content: "<p>Content pending.</p>",
  }
];

export const MOCK_REGISTRATIONS: RegistrationForm[] = [
  {
    id: "reg-1",
    title: "Upcoming Conference Registration",
    status: "COMING SOON",
    description: "Registration details for our next flagship conference will be announced shortly.",
  }
];
