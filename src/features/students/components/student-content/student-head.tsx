export const StudentHead = () => {
  return (
    <div className="text-black relative p-4">
      <div className="flex gap-x-1">
        <button className="border border-black/20 text-sm px-6 py-2 rounded-3xl text-black">
          Chat
        </button>
        <button className="border border-black/20 text-sm px-6 py-2 rounded-3xl text-black">
          Karname
        </button>
        <button className="border border-black/20 text-sm px-6 py-2 rounded-3xl text-black">
          Delete
        </button>
        <button className="border border-black/20 text-sm px-6 py-2 rounded-3xl text-black">
          hello
        </button>
        <button className="border border-black/20 text-sm px-6 py-2 rounded-3xl text-black">
          hello
        </button>
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
