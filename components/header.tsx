import { Logo } from "@/components/logo";
import { Actions } from "@/components/actions";
import { Navigation } from "@/components/navigation";

export const Header = () => {
  return (
    <header className="h-16 border-b">
      <nav className="flex justify-between max-w-screen-xl mx-auto h-full items-center px-6">
        <Logo />
        <Navigation />
        <Actions />
      </nav>
    </header>
  );
};
