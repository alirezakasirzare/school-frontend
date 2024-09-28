export const ContactCard = () => {
  return (
    <div className="bg-white/50 h-[400px] p-4 rounded-3xl">
      <p className="text-lg font-medium">Contact</p>
      <ul className="flex flex-col gap-y-3 mt-3">
        <Item />
        <Item />
        <Item />
        <Item />
      </ul>
    </div>
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
