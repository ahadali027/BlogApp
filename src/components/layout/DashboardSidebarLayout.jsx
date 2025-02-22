import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { DashboardSidebar } from "../DashboardSidebar/DashboardSidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Link, useLocation } from "react-router-dom";
import { Slash } from "lucide-react";

export default function DashboardSidebarLayout({ children }) {
  const { pathname } = useLocation();
  const breadCrumbs = pathname.split(/[/]/).filter((item) => item !== "");

  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              {breadCrumbs.map((pathname, ind, arr) => {
                const href = "/" + arr.slice(0, ind + 1).join("/");
                return (
                  <React.Fragment key={ind}>
                    <BreadcrumbItem>
                      {ind === arr.length - 1 ? (
                        <BreadcrumbPage>{pathname}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link to={href}>{pathname}</Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    {ind !== arr.length - 1 && (
                      <BreadcrumbSeparator className="hidden md:block">
                        /
                      </BreadcrumbSeparator>
                    )}
                  </React.Fragment>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex gap-5 items-center ml-auto">
            User
            <Avatar className="ml-auto">
              <AvatarImage />
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 ">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
