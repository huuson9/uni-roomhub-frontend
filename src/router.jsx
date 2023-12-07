import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { DashboardLayout } from "@/layouts";
import { SystemMaintanceDialog, SuspenseContainer } from "@/components";

const AttendanceSheetPage = React.lazy(() =>
  import("@/pages/AttendanceSheetPage/AttendanceSheet")
);

const NotFoundPage = React.lazy(() =>
  import("@/pages/NotFoundPage/NotFoundPage")
);

const NewRoomPage = React.lazy(() =>
  import("@/pages/AttendanceSheetPage/NewRoomPage/NewRoomPage")
);

const isUnderDevelopment = true;

const underDevelopment = (component) =>
  isUnderDevelopment ? <SystemMaintanceDialog open /> : component;

function Router() {
  const routes = useRoutes([
    { path: "/", element: <Navigate to="/attendance-sheet" replace /> },
    {
      element: <DashboardLayout />,
      children: [
        { path: "/attendance-sheet", element: <AttendanceSheetPage /> },
        { path: "/new-room", element: <NewRoomPage /> },
        { path: "/dashboard", element: underDevelopment() },
        { path: "/student", element: underDevelopment() },
        { path: "/report", element: underDevelopment() },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return <SuspenseContainer>{routes}</SuspenseContainer>;
}

export default Router;
