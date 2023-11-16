import LeftMenu from "@/components/LeftMenu/LeftMenu";
import LeftMenuTop from "@/components/LeftMenuTop/LeftMenuTop";
import Link from "next/link";

const Solutions = () => {
  return (
    <div>
      <LeftMenuTop/>
      <div className="container flex justify-between">
        <LeftMenu />
        <div className="flex-1">
          <span className="font-bold text-[30px]">
            Решения от наших разработчиков
          </span>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
