import React from "react";
import LeftMenu from "@/components/LeftMenu/LeftMenu";
import LeftMenuTop from "@/components/LeftMenuTop/LeftMenuTop";

const Site = () => {
  return (
    <div>
      <LeftMenuTop />
      <div className="container flex justify-between">
        <LeftMenu />
        <div className="flex-1">Site</div>
      </div>
    </div>
  );
};

export default Site;
