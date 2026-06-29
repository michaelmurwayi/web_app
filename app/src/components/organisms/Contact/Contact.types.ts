import type { SvgIconComponent } from "@mui/icons-material";

export interface ContactItem {
  icon: SvgIconComponent;
  title: string;
  items: string[];
}

export interface SocialItem {
  icon: SvgIconComponent;
  url: string;
  label: string;
}

export interface ContactConfig {
  eyebrow: string;
  title: string;

  image: {
    src: string;
    alt: string;
  };

  contactItems: ContactItem[];

  socials: SocialItem[];
}
