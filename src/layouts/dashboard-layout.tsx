import { Outlet } from "react-router-dom";
import { DashboardHeader } from "../components/dashboard/dashboard-header";
import { DashboardSidebar } from "../components/dashboard/dashboard-sidebar";

export const DashboardLayout = () => {
  return (
    <div className="grow bg-neutral-300">
      <DashboardHeader />
      <main className="flex dashboard-container gap-x-1 min-h-[calc(100vh-64px)] pb-4">
        <div className="w-[200px] shrink-0">
          <DashboardSidebar />
        </div>
        <div className="grow">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
