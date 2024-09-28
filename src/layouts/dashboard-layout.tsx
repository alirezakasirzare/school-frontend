import { Outlet } from "react-router-dom";
import { DashboardHeader } from "../components/dashboard/dashboard-header";
import { DashboardMenu } from "../components/dashboard/dashboard-menu";

export const DashboardLayout = () => {
  return (
    <div className="grow bg-[#d1d1d1]">
      <DashboardHeader />
      <main className="flex dashboard-container">
        <div className="w-[200px]">
          <DashboardMenu />
        </div>
        <Outlet />
      </main>
    </div>
  );
};
