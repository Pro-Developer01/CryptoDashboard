import React from "react";
import { Table, Button } from "antd";
import {
  WalletOutlined,
  SwapOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Sidebar } from "../Components";

const Dashboard: React.FC = () => {
  const columns = [
    {
      title: "Coin",
      dataIndex: "coin",
      key: "coin",
      render: (text: string) => (
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-yellow-700 flex items-center justify-center mr-3">
            <span className="text-yellow-500 text-lg">₿</span>
          </div>
          <span className="text-white">{text}</span>
        </div>
      ),
    },
    {
      title: "Holding",
      dataIndex: "holding",
      key: "holding",
      render: (text: string) => <span className="text-gray-400">{text}</span>,
    },
    {
      title: "Actions",
      key: "actions",
      render: () => (
        <DeleteOutlined className="text-gray-600 hover:text-gray-400 cursor-pointer" />
      ),
    },
  ];

  const data = [
    { key: "1", coin: "BITCOIN", holding: "BTC 0.00256" },
    { key: "2", coin: "BITCOIN 1", holding: "BTC 0.00256" },
    { key: "3", coin: "BITCOIN 2", holding: "BTC 0.00256" },
    { key: "4", coin: "BITCOIN 3", holding: "BTC 0.00256" },
    { key: "5", coin: "BITCOIN 4", holding: "BTC 0.00256" },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 p-6">
      <div className="flex">
        <Sidebar />
        <div className="w-3/4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl">Total Coins - 7</h2>
            <Button
              type="primary"
              className="bg-gray-700 border-gray-600 hover:bg-gray-600"
            >
              IMPORT WALLET
            </Button>
          </div>
          <div className="bg-gray-900 p-6 text-gray-300">
            <h2 className="text-xl mb-4">Total Coins - 7</h2>
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              className="bg-transparent"
              rowClassName={() => "bg-gray-800 hover:bg-gray-700"}
              components={{
                header: {
                  cell: ({ children }: any) => (
                    <th className="bg-gray-900 text-gray-500 font-normal py-2">
                      {children}
                    </th>
                  ),
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
