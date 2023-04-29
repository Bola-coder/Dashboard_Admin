import React from "react";
import Navbar from "./Navbar";

const ContentLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <section>{children}</section>
    </div>
  );
};

export default ContentLayout;
