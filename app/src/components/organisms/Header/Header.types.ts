export interface HeaderAction {
  id: string;
  label: string;
  path: string;
  variant: "contained" | "outlined";
}

export interface HeaderConfig {
  showcaseImage: string;

  words: string[];

  description: string;

  actions: HeaderAction[];
}

export interface HeaderProps {
  config: HeaderConfig;
}
