import { Link } from "react-router-dom";
import { cn } from "../../../../lib/utils";

type Props = {
  active?: boolean;
  to: string;
};

export const StudentItem = ({ active = false, to }: Props) => {
  return (
    <li>
      <Link
        className={cn(
          "bg-white/30 block p-4 rounded-3xl transition-colors",
          active && "bg-gradient-to-tr from-[#f7ffd0] to-[#edff8c]"
        )}
        to={to}
      >
        <div className="flex gap-x-4">
          <div className="size-10 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="user"
              className="size-full object-cover"
            />
          </div>

          <div>
            <p className="font-semibold">Alireza Kasirzare</p>
            <p className="text-[10px] font-medium">first customer call</p>
          </div>
        </div>

        <div className="flex items-end mt-2 gap-x-1">
          <div className="bg-white text-black/70 text-xs px-2 py-0.5 rounded-3xl">
            span
          </div>
          <div className="bg-white text-black/70 text-xs px-2 py-0.5 rounded-3xl">
            span
          </div>
          <div className="ml-auto size-8 rounded-full bg-[#d3f0ad] flex justify-center items-center text-xs text-black/60 font-light">
            90
          </div>
        </div>
      </Link>
    </li>
  );
};
