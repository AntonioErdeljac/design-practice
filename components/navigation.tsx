import { Info, Map, Settings, ShoppingBag } from "lucide-react";

import { NavButton } from "@/components/nav-button";

export const Navigation = () => {
  return (
    <div className="flex gap-x-4">
      <NavButton
        active
        icon={Map}
      />
      <NavButton
        icon={ShoppingBag}
      />
      <NavButton
        icon={Info}
      />
      <NavButton
        icon={Settings}
      />
    </div>
  );
};