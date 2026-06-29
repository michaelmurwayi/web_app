import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <main
        style={{
          minHeight: "100vh",
          paddingTop: "0px",
        }}
      >
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
