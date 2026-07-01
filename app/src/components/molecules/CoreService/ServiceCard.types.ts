import type { SvgIconComponent } from "@mui/icons-material";

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: SvgIconComponent;
  deliverables: string[];
}

export interface ServiceCardProps {
  service: Service;
}
