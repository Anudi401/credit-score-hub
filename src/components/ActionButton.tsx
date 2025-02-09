
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ActionButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  variant?: "default" | "outline" | "secondary";
}

export const ActionButton = ({
  icon: Icon,
  label,
  onClick,
  variant = "default",
}: ActionButtonProps) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      className="flex items-center space-x-2 transition-all duration-300 hover:scale-105"
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </Button>
  );
};
