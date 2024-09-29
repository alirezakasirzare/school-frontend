import { Logo } from "./logo";
import { MenuList } from "./menu-list";
import { User } from "./user";

export const DashboardHeader = () => {
  return (
    <header className="h-[64px] flex items-center gap-x-2 dashboard-container sticky top-0 bg-neutral-300/80 z-50 backdrop-blur-sm">
      <Logo />
      <MenuList />
      <User />
    </header>
  );
};
