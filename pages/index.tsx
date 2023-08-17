import MainLayout from "../layouts/MainLayout";
import { ReactElement, useState } from "react";
import TabsMenu from "../components/TabsMenu";
import Example1 from "../components/Example1/Example1";
import Example2 from "../components/Example2";
import Example3 from "../components/Example3";

export default function Home() {
  // const [menuState, setMenuState] = useState("1");
  return (
    <div className="flex items-center flex-col">
      {/*<div className="w-fit">*/}
      {/*  <TabsMenu*/}
      {/*    menu={[*/}
      {/*      { id: "1", title: "Infinity scrolling with React" },*/}
      {/*      { id: "2", title: "Infinity scrolling with React-Query" },*/}
      {/*      { id: "3", title: "Infinity scrolling with React-Query2" },*/}
      {/*    ]}*/}
      {/*    menuState={menuState}*/}
      {/*    setMenuState={setMenuState}*/}
      {/*  />*/}
      {/*</div>*/}
      {/*{menuState === "3" ? (*/}
      {/*<Example3 />*/}
      {/*) : menuState === "2" ? (*/}
      {/*<Example2 />*/}
      {/*) : (*/}
      <Example1 />
      {/*)}*/}
      {/*<Example1 />*/}
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
