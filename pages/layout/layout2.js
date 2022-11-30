import React from "react";
import Sidebar from "../components/sidebar";

export const SidebarLayout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
};

export default SidebarLayout;
