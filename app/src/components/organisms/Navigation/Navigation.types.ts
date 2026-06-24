export interface NavigationItem {
  id: string;
  label: string;
  path: string;
}

export interface NavigationResource {
  id: string;
  label: string;
  fileUrl: string;
}

export interface NavigationBrand {
  name: string;
  logo?: string;
}

export interface NavigationConfig {
  brand: NavigationBrand;
  menuItems: NavigationItem[];
  resources: NavigationResource;
}

export interface NavigationProps {
  config: NavigationConfig;
}
