import { Outlet } from "react-router-dom";
import { Header, Footer } from "@widgets";

export const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
