import { authRoutes } from "./routes-list/auth-route"
import { dashboardRoutes } from "./routes-list/dashboard-route"
import { publicRoutes } from "./routes-list/public-route"


const useRoutes = ()=>{

    return [...publicRoutes, ...authRoutes, ...dashboardRoutes]
}
export default useRoutes