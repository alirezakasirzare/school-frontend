import { Route, Routes } from "react-router-dom";
import { DashboardLayout } from "./layouts/dashboard-layout";
import { StudentPage } from "./pages/student-page";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/students" element={<StudentPage />} />
      </Route>
    </Routes>
  );
};
