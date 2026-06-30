export interface StoryFeature {
  id: string;
  title: string;
}

export interface OurStoryConfig {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  features: StoryFeature[];
}
