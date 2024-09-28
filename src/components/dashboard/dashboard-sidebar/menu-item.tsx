import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { cn } from "../../../lib/utils";

type Props = {
  active?: boolean;
};

export const MenuItem = ({ active = false }: Props) => {
  return (
    <li>
      <Link
        to={"/"}
        className={cn(
          "flex items-center gap-x-2 rounded-full p-0.5",
          active && "bg-[#edff8c]"
        )}
      >
        <span className="size-9 border border-black/10 rounded-full flex items-center justify-center">
          <GoHome className="size-4 text-black/70" />
        </span>
        <span className="text-sm">Menu Item</span>
      </Link>
    </li>
  );
};
