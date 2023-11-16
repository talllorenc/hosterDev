import LeftMenu from "@/components/LeftMenu/LeftMenu";
import LeftMenuTop from "@/components/LeftMenuTop/LeftMenuTop";

const Documents = () => {
  return (
    <div>
      <LeftMenuTop />
      <div className="container flex justify-between">
        <LeftMenu />
        <div className="flex-1">Documents</div>
      </div>
    </div>
  );
};

export default Documents;
