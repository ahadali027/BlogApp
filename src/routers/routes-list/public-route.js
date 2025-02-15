import PublicPageLayout from "@/components/layout/PublicPageLayout";
import URLS from "@/config/config";
import Home from "@/pages/public/Home";

export const publicRoutes = [
   {
    path:URLS.HOME,
    element: PublicPageLayout(Home),
   }
]