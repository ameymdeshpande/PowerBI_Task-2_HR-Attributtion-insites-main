import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  variant?: "default" | "success" | "warning" | "destructive";
}

export function KPICard({ title, value, subtitle, icon: Icon, variant = "default" }: KPICardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "border-success text-success-foreground bg-success/5";
      case "warning":
        return "border-warning text-warning-foreground bg-warning/5";
      case "destructive":
        return "border-destructive text-destructive-foreground bg-destructive/5";
      default:
        return "border-primary text-primary-foreground bg-primary/5";
    }
  };

  const getIconStyles = () => {
    switch (variant) {
      case "success":
        return "text-success";
      case "warning":
        return "text-warning";
      case "destructive":
        return "text-destructive";
      default:
        return "text-primary";
    }
  };

  return (
    <Card className={`transition-all duration-200 hover:shadow-lg ${getVariantStyles()}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-foreground">{title}</CardTitle>
        <Icon className={`h-4 w-4 ${getIconStyles()}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
      </CardContent>
    </Card>
  );
}