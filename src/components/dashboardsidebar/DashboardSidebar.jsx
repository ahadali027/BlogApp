import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarRail,
} from "../ui/sidebar";

import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import useRoutes from "@/routers";
import Logo from "../Logo";

export function DashboardSidebar({ ...props }) {
  const routes = useRoutes();


  return (
    <Sidebar {...props} className="border w-64 bg-gray-200"> {/* Ensure it's visible */}
      <SidebarHeader className="h-16 border-b justify-center">
      <Logo/>
      </SidebarHeader>
      <SidebarContent className="mt-5 px-2">
        {routes.length > 0 ? (
          routes.map(({ path, Icon, title, Pop_title }) =>
            Icon ? ( 
              <SidebarMenu key={path}>
                <SidebarMenuButton asChild>
                  <Link title={Pop_title} to={path} className="flex gap-4">
                    <Icon size={24} />
                    {title}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenu>
            ) : null
          )
        ) : (
          <p className="text-center text-gray-500">No menu items found</p>
        )}
      </SidebarContent>
      <div className="p-2">
        <Button className="w-full">Logout</Button>
      </div>
      <SidebarRail />
    </Sidebar>
  );
}
