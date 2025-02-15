
import "./App.css";
import { Route, Routes } from "react-router-dom";
import useRoutes from "./routers";
import DashboardSidebarLayout from "./components/layout/DashboardSidebarLayout";



function App() {
  const routes = useRoutes();
  console.log(routes);

  return (
    <>
    <Routes>
      {routes.map(
        ({ path, element: Element, isLayout, isProtected }, index) => {
          if (isLayout)
            return (
              <Route
                key={path + "_" + index}
                path={path}
                element={
                  <DashboardSidebarLayout>
                    <Element />
                  </DashboardSidebarLayout>
                }
              />
            );

          return (
            <Route key={path + "_" + index} path={path} element={<Element />} />
          );
        }
      )}

      <Route path="*" element={<div className="flex justify-center items-center w-full min-h-screen">Page Not Found</div>} />
    </Routes>
    </>
  );
}

export default App;
