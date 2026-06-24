export interface NavigationItem {
  id: string;
  label: string;
  path: string;
}

export interface NavigationCTA {
  label: string;
  path: string;
}

export interface NavigationBrand {
  name: string;
  logo?: string;
}

export interface NavigationConfig {
  brand: NavigationBrand;
  menuItems: NavigationItem[];
  cta: NavigationCTA;
}

export interface NavigationProps {
  config: NavigationConfig;
}
