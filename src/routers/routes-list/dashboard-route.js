import { DashboardSidebar } from "@/components/dashboardsidebar/DashboardSidebar";
import URLS from "@/config/config";
import Analytics from "@/pages/authorDashboard/Analytics";
import CreateBlog from "@/pages/authorDashboard/CreateBlog";
import Dashboard from "@/pages/authorDashboard/Dashboard";
import MyBlogs from "@/pages/authorDashboard/MyBlogs";
import Profile from "@/pages/authorDashboard/Profile";
import Setting from "@/pages/authorDashboard/Setting";
import { Book, ChartColumn, Home, NotebookPen, Settings, User } from "lucide-react";

export const dashboardRoutes = [
  {
    path: URLS.USER_DASHBOARD.DASHBOARD,
    element: Dashboard,
    Icon: Home,
    title: "Dashboard",
    isLayout: true,
  },
  {
    path: URLS.USER_DASHBOARD.PROFILE,
    element: Profile,
    Icon: User,
    title: "Profile",
    isLayout: true,
  },
  {
    path:URLS.USER_DASHBOARD.MY_BLOGS,
    element:MyBlogs,
    Icon:Book,
    title:"My Blogs",
    isLayout:true
  },
  {
    path: URLS.USER_DASHBOARD.CREATE_BLOG,
    element: CreateBlog,
    Icon: NotebookPen,
    title: "Create new blog",
    isLayout: true,
  },
  {
    path: URLS.USER_DASHBOARD.ANALYTICS,
    element: Analytics,
    Icon: ChartColumn,
    title: "Analytics",
    isLayout: true,
  },
  {
    path: URLS.USER_DASHBOARD.SETTINGS,
    element: Setting,
    Icon: Settings,
    title: "Setting",
    isLayout: true,
  }
];
