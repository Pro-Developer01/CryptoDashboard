import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header, Sidebar } from "../Components";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/walletlist");
  }, []);

  return (
    <div className="bg-gray-900 text-gray-200 p-6">
      {/* Header section */}
      <Header />
      <div className="flex h-[calc(100vh-96px)] flex-row ">
        {/* Side Bar  */}
        <Sidebar />
        {/* Main dashBoard  */}
        <div className="w-3/4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
