export interface NavItem {
  label: string;
  href: string;
}

export interface Metric {
  label: string;
  value: string;
  trend: 'up' | 'down' | 'neutral';
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: Date;
  isThinking?: boolean;
}

export enum SectionId {
  HERO = 'hero',
  DIAGNOSIS = 'diagnosis',
  TRANSFORMATION = 'transformation',
  PROOF = 'proof',
  METRICS = 'metrics',
  TECHNOLOGY = 'technology',
  OPPORTUNITY = 'opportunity',
  INVESTORS = 'investors',
  CHAT = 'chat'
}