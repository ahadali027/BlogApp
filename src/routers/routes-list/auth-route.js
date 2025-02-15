import PublicPageLayout from "@/components/layout/PublicPageLayout";
import URLS from "@/config/config";
import SignInPage from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";


export const authRoutes = [
    {
        path:URLS.AUTH.LOGIN,
        element: PublicPageLayout(SignInPage)
    },
    {
        path:URLS.AUTH.REGISTER,
        element: PublicPageLayout(Register)
        
    }
]