export interface Project {
  id: string;
  name: string;
  description: string;
  role: string;
  techStack: string[];
  interestingFeatures: string[];
  challengesSolved: string;
  image?: string;
}

export interface TechItem {
  name: string;
  iconName?: string;
  level?: "Expert" | "Proficient" | "Familiar";
}

export interface TechCategory {
  category: string;
  items: TechItem[];
}

export interface OpenSourceContribution {
  repo: string;
  url: string;
  description: string;
  role: string;
  impact?: string;
  stars?: number;
}

export interface ExperienceHighlight {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}
