import React from "react";
import { Menu } from "antd";
import { WalletOutlined, SyncOutlined, SwapOutlined } from "@ant-design/icons";

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/4 pr-6">
    <div className="bg-gray-800 rounded-lg p-4 mb-4">
      <div className="flex items-center mb-4 text-gray-400 hover:text-gray-200 cursor-pointer">
        <WalletOutlined className="mr-2" />
        <span>Wallets</span>
      </div>
      <div className="flex items-center mb-4 text-gray-400 hover:text-gray-200 cursor-pointer">
        <SwapOutlined className="mr-2" />
        <span>Last Transactions</span>
      </div>
    </div>
    <div className="bg-gray-800 rounded-lg p-4">
      <span className="text-gray-400">Support</span>
    </div>
  </div>
  );
};

export default Sidebar;
