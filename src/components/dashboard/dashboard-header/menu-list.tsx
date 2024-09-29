import { Button } from "~/components/ui/button";

import { CiSearch, CiBellOn } from "react-icons/ci";

export const MenuList = () => {
  return (
    <ul className="flex ml-auto gap-x-2">
      <li>
        <Button size={"icon"} className="relative">
          <CiBellOn />
          <span className="flex size-2 absolute right-0.5 bottom-0.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full size-2 bg-red-500"></span>
          </span>
        </Button>
      </li>
      <li>
        <Button size={"icon"}>
          <CiSearch />
        </Button>
      </li>
    </ul>
  );
};
