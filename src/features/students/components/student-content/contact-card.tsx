import { Card, CardContent, CardHeader } from "~/components/ui/card";

export const ContactCard = () => {
  return (
    <Card className="bg-white/50 p-4">
      <CardHeader className="p-0 pb-4">
        <p className="text-lg font-medium">Contact</p>
      </CardHeader>
      <CardContent className="p-0">
        <ul className="flex flex-col gap-y-3">
          <Item />
          <Item />
          <Item />
          <Item />
        </ul>
      </CardContent>
    </Card>
  );
};

const Item = () => {
  return (
    <li>
      <div className="border-b border-black/5 pb-1">
        <p className="text-xs text-black/50">first name</p>
        <p className="text-sm">Alireza</p>
      </div>
    </li>
  );
};
