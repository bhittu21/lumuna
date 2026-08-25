export type MemberCategory = 
  | "Advisor" 
  | "President" 
  | "General Secretary" 
  | "Vice Presidents" 
  | "Treasurers" 
  | "Joint General Secretaries" 
  | "Organising Secretaries" 
  | "Mid-Level Members" 
  | "Executive Members";

export type Member = {
  id: string;
  name: string;
  role: string;
  category: MemberCategory;
  photo?: string;
  bio?: string;
  session: string;
  order: number;
};

export type EventLeadership = {
  role: string;
  name: string;
};

export type Event = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  year: string;
  dateStart: string;
  dateEnd: string;
  displayDate: string;
  location: string;
  status: "Upcoming" | "Ongoing" | "Past";
  type: string;
  theme?: string;
  description: string;
  stats?: {
    delegates?: number | string;
    committees?: number;
    eb?: number;
  };
  leadership?: EventLeadership[];
  coverImage?: string;
  gallery?: string[];
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
  coverImage?: string;
};

export type RegistrationConfig = {
  delegate: {
    status: "OPEN" | "CLOSED" | "COMING SOON";
    title: string;
    description: string;
    eligibility: string;
    deadline?: string;
    fee?: string;
    googleFormUrl?: string;
  };
  hod: {
    status: "OPEN" | "CLOSED" | "COMING SOON";
    title: string;
    description: string;
    eligibility: string;
    deadline?: string;
    fee?: string;
    googleFormUrl?: string;
  };
};

export type Resource = {
  id: string;
  title: string;
  category: "Guides" | "Forms" | "Study Guides";
  description: string;
  url: string;
};

export type FAQ = {
  id: string;
  category: "General" | "Registration" | "MUN" | "Events" | "Membership";
  question: string;
  answer: string;
};

export const MOCK_MEMBERS: Member[] = [
  { id: "m-1", name: "Ashfaque Ahmad Shovon", role: "Advisor", category: "Advisor", session: "2025-2026", order: 1 },
  { id: "m-2", name: "Md. Jonaid Siddiki Asif", role: "President", category: "President", session: "2025-2026", order: 1 },
  { id: "m-3", name: "Faiyaz Shahdib Sakib", role: "General Secretary", category: "General Secretary", session: "2025-2026", order: 1 },
  { id: "m-vp-1", name: "Najifa Nujhat Chowdhury", role: "Vice President", category: "Vice Presidents", session: "2025-2026", order: 1 },
  { id: "m-vp-2", name: "Sohag Sarker", role: "Vice President", category: "Vice Presidents", session: "2025-2026", order: 2 },
  { id: "m-vp-3", name: "Saleha Begum Nisa", role: "Vice President", category: "Vice Presidents", session: "2025-2026", order: 3 },
  { id: "m-vp-4", name: "Jahed Mahmud", role: "Vice President", category: "Vice Presidents", session: "2025-2026", order: 4 },
  { id: "m-t-1", name: "Sakib Mohammad Jami", role: "Treasurer", category: "Treasurers", session: "2025-2026", order: 1 },
  { id: "m-t-2", name: "Mosiur Rahman Spondon", role: "Treasurer", category: "Treasurers", session: "2025-2026", order: 2 },
  { id: "m-jgs-1", name: "Hamza Al Ahram", role: "Joint General Secretary", category: "Joint General Secretaries", session: "2025-2026", order: 1 },
  { id: "m-jgs-2", name: "Pritom Ranjam Dash", role: "Joint General Secretary", category: "Joint General Secretaries", session: "2025-2026", order: 2 },
  { id: "m-jgs-3", name: "Md. Abdullah Al Tashdid", role: "Joint General Secretary", category: "Joint General Secretaries", session: "2025-2026", order: 3 },
  { id: "m-jgs-4", name: "Afi Shahrin Adib", role: "Joint General Secretary", category: "Joint General Secretaries", session: "2025-2026", order: 4 },
  { id: "m-jgs-5", name: "Samia Ahmed Saki", role: "Joint General Secretary", category: "Joint General Secretaries", session: "2025-2026", order: 5 },
  { id: "m-jgs-6", name: "Fariha Jannat Surovy", role: "Joint General Secretary", category: "Joint General Secretaries", session: "2025-2026", order: 6 },
  { id: "m-jgs-7", name: "Nishat Saiyara Sristy", role: "Joint General Secretary", category: "Joint General Secretaries", session: "2025-2026", order: 7 },
  { id: "m-jgs-8", name: "Padmasri Dey Parama", role: "Joint General Secretary", category: "Joint General Secretaries", session: "2025-2026", order: 8 },
  { id: "m-os-1", name: "Nusrat Jahan Nilom", role: "Organising Secretary", category: "Organising Secretaries", session: "2025-2026", order: 1 },
  { id: "m-os-2", name: "Humaira Begum", role: "Organising Secretary", category: "Organising Secretaries", session: "2025-2026", order: 2 },
  { id: "m-os-3", name: "Riazul Islam Rumon", role: "Organising Secretary", category: "Organising Secretaries", session: "2025-2026", order: 3 },
  { id: "m-os-4", name: "Jonmojoy Paul Jibon", role: "Organising Secretary", category: "Organising Secretaries", session: "2025-2026", order: 4 },
  { id: "m-os-5", name: "Sabyasachi Das", role: "Organising Secretary", category: "Organising Secretaries", session: "2025-2026", order: 5 },
  { id: "m-os-6", name: "Pritom Dash", role: "Organising Secretary", category: "Organising Secretaries", session: "2025-2026", order: 6 },
  { id: "m-os-7", name: "Anmesha Purkayastha", role: "Organising Secretary", category: "Organising Secretaries", session: "2025-2026", order: 7 },
  { id: "m-os-8", name: "Ehsan Siddiqi", role: "Organising Secretary", category: "Organising Secretaries", session: "2025-2026", order: 8 },
  { id: "m-os-9", name: "Tahmid Ali Shahi", role: "Organising Secretary", category: "Organising Secretaries", session: "2025-2026", order: 9 },
];

export const MOCK_EVENTS: Event[] = [
  {
    id: "e-1",
    slug: "lu-diplomatic-convention-2025",
    name: "Leading University Diplomatic Convention 2025",
    shortName: "LUDC 2025",
    year: "2025",
    dateStart: "2025-07-11",
    dateEnd: "2025-07-12",
    displayDate: "July 11–12, 2025",
    location: "Leading University, Sylhet",
    status: "Past",
    type: "Conventions",
    theme: "Turning the Tide: Global Diplomacy in the Face of Floods and Rising Seas",
    description: "A major diplomatic convention addressing global climate challenges, bringing together over 150 delegates across 5 specialized committees. This convention emphasized actionable solutions to rising sea levels and devastating regional floods.",
    stats: { delegates: "150+", committees: 5, eb: 15 },
    leadership: [
      { role: "Advisor", name: "Ashfaque Ahmad Shovon" },
      { role: "Chief Conference Consultant", name: "Jogat Jyoti Talukder" },
      { role: "Secretary General", name: "Haris Rahman Antor" },
    ],
  },
  {
    id: "e-2",
    slug: "lu-intra-mun-2024",
    name: "Leading University Intra-MUN 2024",
    shortName: "LU Intra-MUN '24",
    year: "2024",
    dateStart: "2024-09-20",
    dateEnd: "2024-09-21",
    displayDate: "September 20–21, 2024",
    location: "Leading University, Sylhet",
    status: "Past",
    type: "Intra-MUN",
    theme: "Fostering International Cooperation for Peacebuilding and Durable Solutions in Conflict Zones",
    description: "An intra-university conference dedicated to finding durable solutions in conflict zones and promoting global peacebuilding initiatives. It served as a vital training ground for emerging diplomats.",
    stats: { delegates: 143, committees: 5, eb: 13 },
    leadership: [
      { role: "Advisor", name: "Ashfaque Ahmad Shovon" },
      { role: "Chief Conference Consultant", name: "Kushol Kanti Dey" },
      { role: "Secretary General", name: "Dewan Sonubar Raza Chowdhury" },
    ]
  },
];

export const MOCK_BLOGS: BlogPost[] = [
  { 
    id: "b-1", 
    slug: "lumunas-story-since-2016", 
    title: "LUMUNA's Story Since 2016", 
    date: "2025-10-15", 
    author: "LUMUNA Executive Board", 
    category: "History", 
    excerpt: "Looking back at 2016 when the premier Model UN association of Sylhet was established.", 
    content: "<p>Since its foundation in 2016, the Leading University Model United Nations Association (LUMUNA) has served as a beacon of youth diplomacy in northeastern Bangladesh. Our journey began with a simple intra-university conference and has since evolved into organizing some of the most rigorous regional and national conventions.</p><blockquote><p>Prosperity Lies in Unity.</p></blockquote><p>Over the years, we have trained hundreds of delegates, fostering critical thinking, research acumen, and public speaking skills.</p>" 
  },
  { 
    id: "b-2", 
    slug: "lu-intra-mun-2024-recap", 
    title: "Recap: Leading University Intra-MUN 2024", 
    date: "2024-09-25", 
    author: "LUMUNA Editorial", 
    category: "Events", 
    excerpt: "Reflections on our 2024 intra-university conference focused on peacebuilding.", 
    content: "<p>On September 20–21, 2024, LUMUNA successfully hosted the Leading University Intra-MUN 2024. With the theme <strong>\"Fostering International Cooperation for Peacebuilding and Durable Solutions in Conflict Zones\"</strong>, 143 delegates across 5 committees engaged in intense debate.</p><ul><li>143 Delegates</li><li>5 Committees</li><li>13 Executive Board Members</li></ul><p>The conference successfully trained our new members in UN parliamentary procedures and diplomatic negotiation.</p>" 
  },
  { 
    id: "b-3", 
    slug: "lu-diplomatic-convention-2025", 
    title: "Leading University Diplomatic Convention 2025", 
    date: "2025-07-20", 
    author: "LUMUNA Editorial", 
    category: "Events", 
    excerpt: "Addressing global floods and rising seas at LUDC 2025.", 
    content: "<p>The Leading University Diplomatic Convention 2025 was held on July 11–12, 2025, drawing over 150 delegates. The theme <strong>\"Turning the Tide: Global Diplomacy in the Face of Floods and Rising Seas\"</strong> resonated deeply with the participants, especially given the regional context of Sylhet.</p><p>Led by Secretary General Haris Rahman Antor, the conference proved to be a milestone for LUMUNA's academic excellence.</p>" 
  },
  { 
    id: "b-4", 
    slug: "lumuna-steering-committee-2025-26", 
    title: "Introducing the LUMUNA Steering Committee 2025–26", 
    date: "2025-08-01", 
    author: "LUMUNA Executive Board", 
    category: "Announcements", 
    excerpt: "Meet the new leadership team guiding LUMUNA's vision.", 
    content: "<p>We are proud to announce the 2025–26 Steering Committee of the Leading University Model United Nations Association. Guided by Advisor Ashfaque Ahmad Shovon, President Md. Jonaid Siddiki Asif, and General Secretary Faiyaz Shahdib Sakib, the new committee is committed to elevating the standard of MUN in Sylhet.</p>" 
  },
  { 
    id: "b-5", 
    slug: "lumuna-at-jmun-2026", 
    title: "LUMUNA at Jahangirnagar Model United Nations 2026", 
    date: "2026-02-15", 
    author: "LUMUNA Delegation", 
    category: "Delegations", 
    excerpt: "Our delegation's journey and achievements at JMUN 2026.", 
    content: "<p>LUMUNA proudly sent a delegation to the Jahangirnagar Model United Nations 2026. Representing Leading University on a national stage, our delegates showcased exceptional diplomatic tact and research.</p>" 
  }
];

export const REGISTRATION_CONFIG: RegistrationConfig = {
  delegate: {
    status: "COMING SOON",
    title: "Delegate Registration",
    description: "Register as an individual delegate to represent a country in one of our simulated UN committees.",
    eligibility: "Open to all university and college students.",
    googleFormUrl: "", // Empty URL triggers "Coming Soon" behavior
  },
  hod: {
    status: "COMING SOON",
    title: "Head of Delegation Registration",
    description: "Register your institution's delegation. The Head of Delegation acts as the primary contact point.",
    eligibility: "Must represent an official educational institution or club.",
    googleFormUrl: "",
  }
};

export const MOCK_RESOURCES: Resource[] = [
  // Populated structurally. No fake PDFs will be added.
];

export const MOCK_FAQS: FAQ[] = [
  { id: "faq-1", category: "MUN", question: "What is Model United Nations?", answer: "Model United Nations (MUN) is an educational simulation in which students can learn about diplomacy, international relations, and the United Nations." },
  { id: "faq-2", category: "Membership", question: "Who can join LUMUNA?", answer: "LUMUNA membership is generally open to enrolled students of Leading University. Specific recruitment cycles are announced via our official Facebook page." },
  { id: "faq-3", category: "Events", question: "Does LUMUNA host national conferences?", answer: "Yes, since 2016 LUMUNA has hosted four national-level conferences and five regional conferences in Sylhet." },
];

export const CONTACT_INFO = {
  address: "Leading University Campus, Sylhet 3100",
  email: "lumuna@lus.ac.bd",
  phone: "+880 1777-847864",
  facebook: "https://www.facebook.com/lumuna.lu"
};

export const MOCK_MILESTONES: Milestone[] = [
  { id: 'ms-1', year: '2016', title: 'Foundation of LUMUNA', description: 'Leading University Model United Nations Association is founded, establishing a new platform for youth diplomacy in northeastern Bangladesh. The association organizes its first intra-university MUN.' },
  { id: 'ms-2', year: '2017', title: 'First Regional Conference', description: 'LUMUNA organizes the first regional Model United Nations event in Sylhet, expanding its reach beyond the university campus and inviting delegates from across the region.' },
  { id: 'ms-3', year: '2024', title: 'LU Intra-MUN 2024', description: 'Successfully hosted the LU Intra-MUN focusing on peacebuilding and durable solutions in conflict zones, featuring 143 delegates and 5 committees.' },
  { id: 'ms-4', year: '2025', title: 'Diplomatic Convention', description: 'Organized the Leading University Diplomatic Convention 2025 centered around global climate diplomacy, gathering over 150 delegates.' },
];


export type Milestone = { id: string; year: string; title: string; description: string; };

