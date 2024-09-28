import { Outlet } from "react-router-dom";
import { DashboardHeader } from "../components/dashboard/dashboard-header";
import { DashboardSidebar } from "../components/dashboard/dashboard-sidebar";

export const DashboardLayout = () => {
  return (
    <div className="grow bg-[#d1d1d1]">
      <DashboardHeader />
      <main className="flex dashboard-container gap-x-1">
        <div className="w-[200px] shrink-0">
          <DashboardSidebar />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
