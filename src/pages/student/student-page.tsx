import { Outlet } from "react-router-dom";
import { StudentsList } from "../../features/students/components/students-list";

export const StudentPage = () => {
  return (
    <div className="flex gap-x-1">
      <StudentsList />
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
};
