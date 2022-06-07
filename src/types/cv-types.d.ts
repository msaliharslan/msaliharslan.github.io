export interface SocialAccount {
  username: string;
  link: string;
}

export interface Socials {
  email?: string;
  location?: string;
  github?: SocialAccount;
  linkedin?: SocialAccount;
  instagram?: SocialAccount;
  twitter?: SocialAccount;
  twitch?: SocialAccount;
  spotify?: SocialAccount;
  youtube?: SocialAccount;
  facebook?: SocialAccount;
}

export interface Language {
  language: string;
  level: string;
}

export interface CvSubsectionData {
  title: string;
  date: string;
  link?: string;
  description: Array<string>;
}

export interface CvSectionData {
  section: string;
  subsections: Array<CvSubsectionData>;
}

export interface Cv {
  name: string;
  socials: Socials;
  languages: Array<Language>;
  technicalSkills: Array<string>;
  softSkills: Array<string>;
  sections: Array<CvSectionData>;
}
