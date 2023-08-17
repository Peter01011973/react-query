import React, { FC } from "react";

const Header: FC = () => {
  return (
    <header className="w-full h-12 bg-blue-500 flex justify-between items-center px-8 text-amber-200">
      <h2>Todos</h2>
      <h4>Auth</h4>
    </header>
  );
};

export default Header;
