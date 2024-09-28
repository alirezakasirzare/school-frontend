import { StudentContent } from "../features/students/components/student-content";
import { StudentsList } from "../features/students/components/students-list";

export const StudentPage = () => {
  return (
    <div className="flex gap-x-1">
      <StudentsList />
      <div className="grow">
        <StudentContent />
      </div>
    </div>
  );
};
