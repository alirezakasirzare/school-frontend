import { MenuList } from "./menu-list";

import { AiOutlineUser, AiOutlineBulb } from "react-icons/ai";
import { IoTimeOutline } from "react-icons/io5";
import { TbBoxMultiple } from "react-icons/tb";
import { GoPencil, GoHome } from "react-icons/go";
import { CiHeart, CiChat1 } from "react-icons/ci";

export const DashboardSidebar = () => {
  return (
    <aside className="flex flex-col gap-y-4 pt-6">
      <h6 className="text-xl font-semibold pl-2">Menu</h6>
      <MenuList
        label="Dashboard"
        items={[
          {
            text: "Home",
            to: "/",
            icon: <GoHome className="size-4 text-black/70" />,
          },
          {
            text: "Chats",
            to: "/chats",
            icon: <CiChat1 className="size-4 text-black/70" />,
          },
        ]}
      />

      <MenuList
        label="People"
        items={[
          {
            text: "students",
            to: "/students",
            icon: <AiOutlineUser className="size-4 text-black/70" />,
          },
          {
            text: "teachers",
            to: "teachers",
            icon: <AiOutlineBulb className="size-4 text-black/70" />,
          },
          {
            text: "parents",
            to: "parents",
            icon: <CiHeart className="size-4 text-black/70" />,
          },
        ]}
      />
      <MenuList
        label="management"
        items={[
          {
            text: "exams",
            to: "parents",
            icon: <GoPencil className="size-4 text-black/70" />,
          },
          {
            text: "years",
            to: "years",
            icon: <IoTimeOutline className="size-4 text-black/70" />,
          },
          {
            text: "fields of study",
            to: "fields",
            icon: <TbBoxMultiple className="size-4 text-black/70" />,
          },
        ]}
      />
    </aside>
  );
};
