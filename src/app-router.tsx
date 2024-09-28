import { Route, Routes } from "react-router-dom";
import { DashboardLayout } from "./layouts/dashboard-layout";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/students" element={<>students</>} />
      </Route>
    </Routes>
  );
};
