import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";

export const MenuItem = () => {
  return (
    <li>
      <Link to={"/"} className="flex items-center gap-x-2">
        <span className="size-8 border border-black/10 rounded-full flex items-center justify-center">
          <GoHome className="size-4 text-black/70" />
        </span>
        <span className="text-sm">Menu Item</span>
      </Link>
    </li>
  );
};
