// component
import { IconSVG } from "@/components";

// ----------------------------------------------------------------------

const icon = (name) => <IconSVG name={name} />;

const navConfig = [
  {
    title: "Attendance Sheet",
    path: "/attendance-sheet",
    icon: icon("report"),
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: icon("table-chart"),
  },
  {
    title: "Report",
    path: "/report",
    icon: icon("report"),
  },
  {
    title: "Student",
    path: "/student",
    icon: icon("student"),
  },
];

export { navConfig };
