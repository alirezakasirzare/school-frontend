import { CiSearch } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { StudentItem } from "./student-item";

export const StudentsList = () => {
  return (
    <div className="w-[300px]">
      <div className="bg-white/40 rounded-3xl">
        {/* head */}
        <div className="h-20 flex items-center px-4 gap-x-1">
          <h6 className="font-bold text-lg">Students</h6>

          <button className="size-10 border rounded-full border-black/10 flex justify-center items-center ml-auto">
            <CiSearch className="size-4 text-black/70" />
          </button>

          <button className="size-10 border rounded-full border-black/10 flex justify-center items-center">
            <CiSearch className="size-4 text-black/70" />
          </button>

          <button className="size-10 border rounded-full border-black/10 flex justify-center items-center">
            <GoPlus className="size-4 text-black/70" />
          </button>
        </div>

        {/* list */}
        <ul className="pb-1 px-1 flex flex-col gap-y-1">
          <StudentItem />
          <StudentItem active />
          <StudentItem />
          <StudentItem />
          <StudentItem />
        </ul>
      </div>
    </div>
  );
};
