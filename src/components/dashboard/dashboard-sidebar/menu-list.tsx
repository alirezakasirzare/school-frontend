import { MenuItem } from "./menu-item";

export const MenuList = () => {
  return (
    <ul className="flex flex-col gap-y-2">
      <h6 className="text-xs font-bold">Home</h6>
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </ul>
  );
};
