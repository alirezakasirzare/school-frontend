import { StudentsList } from "../features/students/components/students-list";

export const StudentPage = () => {
  return (
    <div className="flex gap-x-2">
      <StudentsList />
      <div>Student Page</div>
    </div>
  );
};
