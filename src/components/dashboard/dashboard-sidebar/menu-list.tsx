import { MenuItem } from "./menu-item";

type MenuItem = {
  text: string;
  to: string;
  icon: React.ReactNode;
};

type Props = {
  label: string;
  items: MenuItem[];
};

export const MenuList = ({ label, items }: Props) => {
  return (
    <ul className="flex flex-col gap-y-2">
      <h6 className="text-[10px] font-bold pl-2 capitalize">{label}</h6>
      {items.map((item) => (
        <MenuItem
          text={item.text}
          to={item.to}
          icon={item.icon}
          key={item.to}
        />
      ))}
    </ul>
  );
};
