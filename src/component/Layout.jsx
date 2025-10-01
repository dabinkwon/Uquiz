import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-screen h-screen flex items-start pt-28 justify-center bg-[rgb(207,207,207)] font-serif">
      <div className="min-w-[480px] p-2 flex flex-col justify-center gap-5 items-center min-h-[300px] bg-amber-50 rounded-2xl shadow-[0_0_29px_10px_rgba(100,100,100,0.3)] py-5">
        <h2 className="text-4xl">UQuiz?</h2>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
