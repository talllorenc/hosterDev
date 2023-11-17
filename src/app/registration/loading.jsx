import Image from "next/image";

const loading = () => {
  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center">
      <div className="animate-spin">
        <Image src="/main-logo.svg" alt="Loading" width={300} height={300} />
      </div>
    </div>
  );
};

export default loading;
