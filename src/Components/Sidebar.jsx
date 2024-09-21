import React from "react";
import { Menu } from "antd";
import { WalletOutlined, SyncOutlined, SwapOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
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
  return (
    <div className="w-1/4  h-full flex flex-col justify-between bg-gray-800 rounded-lg pt-[56px]">
      <div>
        {menuItems?.map((item) => (
          <Link to={item.path}>
            <div className="flex gap-3 border-l-4 border-yellow-500 pl-9 min-h-[30px] text-yellow-500 mb-9 cursor-pointer">
              <span className="text-white">{item.icon}</span>{" "}
              <span>{item.label}</span>
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
