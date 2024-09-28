import { ContactCard } from "./contact-card";
import { StudentHead } from "./student-head";

export const StudentContent = () => {
  return (
    <div className="w-full rounded-3xl min-h-full relative overflow-hidden">
      <div className="absolute bg-gradient-to-br from-[#efff99] to-[#f5d3c4] inset-0 size-full"></div>
      <div className="absolute bg-gradient-to-r from-[#efff99]/30 to-[#fff]/30 inset-0 size-full"></div>
      <StudentHead />

      <div className="grid grid-cols-3 relative mt-2 gap-x-1 px-1">
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    </div>
  );
};
