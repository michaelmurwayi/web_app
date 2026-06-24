import { Outlet } from "react-router-dom";

import { Navigation } from "@/components/organisms/Navigation";
import { navigationConfig } from "@/components/organisms/Navigation";

const MainLayout = () => {
  return (
    <>
      <Navigation config={navigationConfig} />

      <main
        style={{
          minHeight: "100vh",
          paddingTop: "120px",
        }}
      >
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
