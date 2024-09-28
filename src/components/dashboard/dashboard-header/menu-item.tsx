import { CiSearch } from "react-icons/ci";

export const MenuItem = () => {
  return (
    <li>
      <button className="size-10 border rounded-full border-black/10 flex justify-center items-center">
        <CiSearch className="size-4 text-black/70" />
      </button>
    </li>
  );
};
