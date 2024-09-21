import React from "react";
import { WalletOutlined, SwapOutlined } from "@ant-design/icons";
import { Link, useLocation, useParams } from "react-router-dom";
const menuItems = [
  {
    label: "Wallets",
    icon: <WalletOutlined />,
    path: "/walletlist",
  },
  {
    label: "Transactions",
    icon: <SwapOutlined />,
    path: "/transactions",
  },
];

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();
  const activePath = pathname;
  console.log({ activePath });

  return (
    <div className="w-1/5 h-full flex flex-col justify-between bg-gray-800 rounded-lg pt-[56px]">
      <div>
        {menuItems?.map((item) => (
          <Link to={item.path}>
            <div
              className={`flex gap-3 ${
                activePath === item.path
                  ? " border-l-4 text-yellow-500 pl-9"
                  : "border-0 text-white pl-[39px]"
              } border-yellow-500  min-h-[30px] mb-9 cursor-pointer hover:text-yellow-500 `}
            >
              <span className="text-white">{item.icon}</span>{" "}
              <span className="font-semibold">{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center min-h-[30px] bg-[#4B3C2B] rounded-lg p-4">
        <span className="text-gray-400">Support</span>
      </div>
    </div>
  );
};

export default Sidebar;
