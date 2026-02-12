
export interface Project {
  id: string;
  title: string;
  category: string;
  businessProblem: string;
  dataset: string;
  tools: string[];
  methodology: string;
  insights: string[];
  impact: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  preview: string;
  content: string;
  tags: string[];
  readTime: string;
}

export interface Skill {
  category: string;
  items: string[];
}
