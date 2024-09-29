import { useParams } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { GoPlus } from "react-icons/go";

import { Button } from "~/components/ui/button";
import { StudentItem } from "./student-item";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { ScrollArea } from "~/components/ui/scroll-area";

export const StudentsList = () => {
  const { studentId } = useParams();

  return (
    <Card className="bg-neutral-200 w-[300px] shrink-0 max-h-[calc(100vh-80px)] h-min min-h-[600px] sticky top-[64px] overflow-hidden">
      {/* head */}
      <CardHeader className="flex items-center gap-x-1">
        <h6 className="font-bold text-lg">Students</h6>

        <Button size={"icon"} className="ml-auto">
          <GoPlus />
        </Button>

        <Button size={"icon"}>
          <CiSearch />
        </Button>
      </CardHeader>

      {/* list */}
      <CardContent className="pb-0">
        <ScrollArea viewportClassName="max-h-[calc(100vh-80px-72px-4px)]">
          <ul className="flex flex-col gap-y-1 pb-1">
            <StudentItem to="/students/1" active={studentId === "1"} />
            <StudentItem to="/students/2" active={studentId === "2"} />
            <StudentItem to="/students/3" active={studentId === "3"} />
            <StudentItem to="/students/4" active={studentId === "4"} />
            <StudentItem to="/students/5" active={studentId === "5"} />
            <StudentItem to="/students/5" active={studentId === "6"} />
            <StudentItem to="/students/5" active={studentId === "7"} />
            <StudentItem to="/students/5" active={studentId === "8"} />
          </ul>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
