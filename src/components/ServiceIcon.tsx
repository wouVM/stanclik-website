import {
  AlertTriangle,
  RefreshCw,
  User,
  Briefcase,
  TrendingUp,
  Home,
  FileText,
  Shield,
  Globe,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  AlertTriangle,
  RefreshCw,
  User,
  Briefcase,
  TrendingUp,
  Home,
  FileText,
  Shield,
  Globe,
};

interface ServiceIconProps {
  name: string;
  className?: string;
}

export function ServiceIcon({ name, className }: ServiceIconProps) {
  const Icon = iconMap[name] || AlertTriangle;
  return <Icon className={className} />;
}
