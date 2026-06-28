export interface FooterConfig {
  copyright: string;
  website: {
    label: string;
    href: string;
  };
}

export interface FooterProps {
  config: FooterConfig;
}
