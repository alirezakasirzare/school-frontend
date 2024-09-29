import { useParams } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { GoPlus } from "react-icons/go";

import { Button } from "~/components/ui/button";
import { StudentItem } from "./student-item";

export const StudentsList = () => {
  const { studentId } = useParams();

  return (
    <div className="w-[300px]">
      <div className="bg-white/40 rounded-3xl">
        {/* head */}
        <div className="h-20 flex items-center px-4 gap-x-1">
          <h6 className="font-bold text-lg">Students</h6>

          <Button size={"icon"} className="ml-auto">
            <GoPlus />
          </Button>

          <Button size={"icon"}>
            <CiSearch />
          </Button>
        </div>

        {/* list */}
        <ul className="pb-1 px-1 flex flex-col gap-y-1">
          <StudentItem to="/students/1" active={studentId === "1"} />
          <StudentItem to="/students/2" active={studentId === "2"} />
          <StudentItem to="/students/3" active={studentId === "3"} />
          <StudentItem to="/students/4" active={studentId === "4"} />
          <StudentItem to="/students/5" active={studentId === "5"} />
        </ul>
      </div>
    </div>
  );
};
