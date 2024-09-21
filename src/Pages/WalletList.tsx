import React from "react";
import { Table, Button } from "antd";
import { DeleteOutlined, PlusCircleFilled } from "@ant-design/icons";
import { Sidebar } from "../Components";

const WalletList: React.FC = () => {
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
          <span className="text-gray-400 ">{text}</span>
        </div>
      ),
    },
    {
      title: "Holding",
      dataIndex: "holding",
      key: "holding",
      render: (text: string) => <span className="text-gray-400 text-center">{text}</span>,
    },
    {
      title: "Actions",
      key: "actions",
      render: () => (
        <DeleteOutlined className="text-gray-400 hover:text-gray-400 cursor-pointer text-center" />
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
    <div className="w-full">
      <div className="flex justify-between items-center mb-14">
        <span className="text-xl text-yellow-500 font-bold">Wallet list</span>
        <Button
          type="primary"
          className="bg-gray-700 border-gray-600 hover:bg-gray-600"
          icon={
            <PlusCircleFilled style={{ color: "#EAB308" }} />
          }
        >
          IMPORT WALLET
        </Button>
      </div>
      <div className="bg-gray-900 text-gray-300">
        <span className="inline-block text-xs font-semibold mb-4 pl-6">
          Total Coins - {data?.length || 0}
        </span>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          className="!bg-black"
          rowClassName={() => "bg-[#161C23] hover:!bg-black"}
          components={{
            header: {
              cell: ({ children }: any) => (
                <th className="!bg-gray-900 !border-0 !text-gray-500 font-normal py-2 text-center">
                  {children}
                </th>
              ),
            },
            body: {
              cell: ({ children }: any) => (
                <td className=" text-gray-700 !border-b-[11px] !border-black font-normal py-2 text-center">
                  {children}
                </td>
              ),
            },
          }}
        />
      </div>
    </div>
  );
};

export default WalletList;
