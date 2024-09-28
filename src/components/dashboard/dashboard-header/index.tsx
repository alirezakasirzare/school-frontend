import { Logo } from "./logo";
import { MenuList } from "./menu-list";
import { User } from "./user";

export const DashboardHeader = () => {
  return (
    <header className="h-16 flex items-center gap-x-2 dashboard-container">
      <Logo />
      <MenuList />
      <User />
    </header>
  );
};
