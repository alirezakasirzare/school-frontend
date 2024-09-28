import { MenuList } from "./menu-list";

export const DashboardSidebar = () => {
  return (
    <aside className="flex flex-col gap-y-4 pt-6">
      <h6 className="text-xl font-semibold pl-2">Menu</h6>
      <MenuList />
      <MenuList />
      <MenuList />
    </aside>
  );
};
