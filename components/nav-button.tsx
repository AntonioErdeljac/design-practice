import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type NavButtonProps = {
  active?: boolean;
  icon: LucideIcon;
};

export const NavButton = ({ active, icon: Icon }: NavButtonProps) => {
  return (
    <button className={cn(
      "p-2 px-3 rounded-lg",
      active && "bg-sky-500/40"
    )}>
      <Icon className="text-neutral-800" />
    </button>
  );
};
