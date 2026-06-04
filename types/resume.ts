export interface AdvancedItem {
  id: number;

  title: string;

  subtitle: string;

  date: string;

  content: string;
}

export interface BasicSection {
  id: number;

  type: "basic";

  heading: string;

  content: string;

  bullets: boolean;
}

export interface AdvancedSection {
  id: number;

  type: "advanced";

  heading: string;

  organization: string;

  date: string;

  title: string;

  subtitle: string;

  content: string;

  bullets: boolean;

  items: AdvancedItem[];
}

export type ResumeSection =
  | BasicSection
  | AdvancedSection;

export interface ResumeData {

  name: string;

  email: string;

  phone: string;

  address: string;

  summary: string;

  profilePhoto?: string;

  template: string;

  skills: string[];

  sections: ResumeSection[];

  padding: number;

  fontSize: number;
}