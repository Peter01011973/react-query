import { ReactNode } from "react";
import Header from "../components/Header";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <main>
        <Header />
        {children}
      </main>
    </>
  );
};

export default MainLayout;
