import { Link, useLocation } from "react-router-dom";
import { cn } from "../../../lib/utils";

type Props = {
  text?: string;
  icon?: React.ReactNode;
  to: string;
};

export const MenuItem = ({ text, icon, to }: Props) => {
  const { pathname } = useLocation();
  const isActive = to === "/" ? pathname === to : pathname.includes(to);
  return (
    <li>
      <Link
        to={to}
        className={cn(
          "flex items-center gap-x-2 rounded-full p-0.5 transition-colors",
          isActive && "bg-[#edff8c]"
        )}
      >
        <span className="size-9 border border-black/10 rounded-full flex items-center justify-center">
          {icon}
        </span>
        <span className="text-sm capitalize">{text}</span>
      </Link>
    </li>
  );
};
