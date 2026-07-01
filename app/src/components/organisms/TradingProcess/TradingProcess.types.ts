export interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
}

export interface ProcessBadge {
  number: string;
  title: string;
  subtitle: string;
}

export interface TradingProcessConfig {
  eyebrow: string;

  title: string;

  highlightedTitle: string;

  image: string;

  badge: ProcessBadge;

  steps: ProcessStep[];
}

export interface TradingProcessProps {
  config: TradingProcessConfig;
}
