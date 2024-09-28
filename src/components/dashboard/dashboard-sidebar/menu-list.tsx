import { MenuItem } from "./menu-item";

export const MenuList = () => {
  return (
    <ul className="flex flex-col gap-y-2">
      <h6 className="text-[10px] font-bold pl-2">My Works</h6>
      <MenuItem />
      <MenuItem active />
      <MenuItem />
      <MenuItem />
    </ul>
  );
};
