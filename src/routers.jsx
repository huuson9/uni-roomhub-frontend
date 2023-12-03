import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "@/layouts";

const AttendanceSheetPage = React.lazy(() =>
  import("@/pages/AttendanceSheetPage/AttendanceSheet")
);
const StudentPage = React.lazy(() => import("@/pages/StudentPage/StudentPage"));
const DashboardPage = React.lazy(() =>
  import("@/pages/DashboardPage/DashboardPage")
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
        {/* <Route path="/" element={<AuthLayout />} />
        <Route path="/" element={<BaseLayout />} /> */}
        <Route path="/" element={<Navigate to="/attendance-sheet" replace />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route path="attendance-sheet" element={<AttendanceSheetPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="report" element={<AttendanceSheetPage />} />
          <Route path="student" element={<StudentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
