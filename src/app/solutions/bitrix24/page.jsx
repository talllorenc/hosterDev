import React from "react";
import LeftMenu from "@/components/LeftMenu/LeftMenu";
import LeftMenuTop from "@/components/LeftMenuTop/LeftMenuTop";

const Bitrix24 = () => {
  return (
    <div>
      <LeftMenuTop />
      <div className="container flex justify-between">
        <LeftMenu />
        <div className="flex-1">Bitrix24</div>
      </div>
    </div>
  );
};

export default Bitrix24;
