export interface CertificationChip {
  id: string;
  label: string;
}

export interface ServiceExcellenceConfig {
  eyebrow: string;

  title: string;

  highlightedTitle: string;

  description: string;

  backgroundImage: string;

  certifications: CertificationChip[];
}
