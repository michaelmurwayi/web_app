export interface AboutHeroStat {
  value: string;
  label: string;
}

export interface AboutHeroImage {
  id: string;
  src: string;
  alt: string;
}

export interface AboutHeroConfig {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string[];
  established: string;
  stats: AboutHeroStat[];
  images: AboutHeroImage[];
}
