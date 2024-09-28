import { Outlet } from "react-router-dom";
import { DashboardHeader } from "../components/dashboard/dashboard-header";
import { DashboardSidebar } from "../components/dashboard/dashboard-sidebar";

export const DashboardLayout = () => {
  return (
    <div className="grow bg-[#d1d1d1]">
      <DashboardHeader />
      <main className="flex dashboard-container">
        <div className="w-[200px]">
          <DashboardSidebar />
        </div>
        <div className="bg-white/50 w-full h-[600px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
