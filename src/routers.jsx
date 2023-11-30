import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/layouts";

const AttendanceSheetPage = React.lazy(() =>
  import("@/pages/AttendanceSheetPage/AttendanceSheet")
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
        {/* <Route path="/" element={<AuthLayout />} />
        <Route path="/" element={<BaseLayout />} /> */}
        <Route path="/" element={<DashboardLayout />}>
          <Route path="attendance-sheet" element={<AttendanceSheetPage />} />
          <Route path="dashboard" element={<AttendanceSheetPage />} />
          <Route path="report" element={<AttendanceSheetPage />} />
          <Route path="student" element={<AttendanceSheetPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
