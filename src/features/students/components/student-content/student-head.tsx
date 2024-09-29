import { CiChat1 } from "react-icons/ci";
import { Button } from "~/components/ui/button";

export const StudentHead = () => {
  return (
    <div className="text-black relative p-4">
      <div className="flex flex-wrap gap-1 items-center">
        <Button>
          <CiChat1 className="size-4 text-black/70 mr-2" />
          Chat
        </Button>
        <Button>
          <CiChat1 className="size-4 text-black/70 mr-2" />
          Contact
        </Button>
        <Button>
          <CiChat1 className="size-4 text-black/70 mr-2" />
          Score
        </Button>
        <Button>
          <CiChat1 className="size-4 text-black/70 mr-2" />
          Parent
        </Button>
        <Button>
          <CiChat1 className="size-4 text-black/70 mr-2" />
          Teachers
        </Button>
        <Button>
          <CiChat1 className="size-4 text-black/70 mr-2" />
          Lessions
        </Button>
        <Button>
          <CiChat1 className="size-4 text-black/70 mr-2" />
          Exams
        </Button>
        <Button>
          <CiChat1 className="size-4 text-black/70 mr-2" />
          Field Of Study
        </Button>
        <Button>
          <CiChat1 className="size-4 text-black/70 mr-2" />
          Delete
        </Button>
      </div>
      <div className="mt-4">
        <div className="flex gap-x-6">
          <div className="size-20 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="user"
              className="size-full"
            />
          </div>
          <h2 className="text-4xl font-bold">Alireza Kasirzare</h2>
        </div>
      </div>
    </div>
  );
};
