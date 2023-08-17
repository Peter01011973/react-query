import React, { Dispatch, FC, useEffect } from "react";
import { useRouter } from "next/router";

interface TabsMenuProps {
  menu: { title: string; id: string }[];
  menuState: string;
  setMenuState: Dispatch<string>;
  withChangeRoute?: string;
}

const TabsMenu: FC<TabsMenuProps> = ({
  menu,
  setMenuState,
  menuState,
  withChangeRoute = "",
}) => {
  const router = useRouter();

  useEffect(() => {
    const ind = menu.findIndex(
      (el) => `${withChangeRoute}/${el.id}` === router.asPath,
    );
    if (ind !== -1) setMenuState(menu[ind].id);
  }, [router.asPath]);

  const menuItem_after =
    'after:content-[""] after:bg-brand-orange-600 after:absolute after:left-0 after:bottom-0 after:w-full after:pt-[2px] after:transform after:origin-right after:scale-x-0 after:transition-transform after:duration-100 after:ease-in';
  const fadingEffect =
    "after:absolute after:right-0 after:top-0 after:block after:h-full after:w-[75px] after:xs:hidden after:content-[''] after:bg-gradient-to-r after:from-transparent after:to-white after:pointer-events-none";

  return (
    <div
      className={`relative mb-5 flex h-[46px] w-full items-center border-b border-solid border-gray-300 ${fadingEffect}`}
    >
      <nav
        className={`relative flex h-full items-center justify-start gap-4 overflow-x-auto scrollbar-hide md:gap-5`}
      >
        {menu &&
          menu.map((item) => {
            return (
              <p
                key={item.id}
                className={`relative flex h-full items-center px-2 transition duration-200 ${menuItem_after} cursor-pointer hover:after:origin-left hover:after:scale-x-100 hover:after:transform ${
                  item.id === menuState
                    ? "paragraph_normal_bold text-brand-orange-600 after:scale-x-100 "
                    : "paragraph_normal_regular text-gray-500"
                } whitespace-nowrap hover:text-brand-orange-600`}
                onClick={() => {
                  if (!!withChangeRoute) {
                    void router.push(`${withChangeRoute}/${item.id}`);
                  } else {
                    setMenuState(item.id);
                  }
                }}
              >
                {item.title}
              </p>
            );
          })}
      </nav>
    </div>
  );
};

export default TabsMenu;
