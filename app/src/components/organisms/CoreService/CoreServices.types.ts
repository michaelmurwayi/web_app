import type { ServiceCardProps } from "@/components/molecules/CoreService";

export interface CoreServicesConfig {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  subtitle: string;
  services: ServiceCardProps["service"][];
}

export interface CoreServicesProps {
  config: CoreServicesConfig;
}
