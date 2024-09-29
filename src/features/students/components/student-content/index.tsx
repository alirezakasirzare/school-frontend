import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { ContactCard } from "./contact-card";
import { StudentHead } from "./student-head";

export const StudentContent = () => {
  return (
    <Card className="grow bg-gradient-to-r from-[#f7ffd0] to-[#daf854]">
      <CardHeader>
        <StudentHead />
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-3 gap-x-1">
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
        </div>
      </CardContent>
    </Card>
  );
};
