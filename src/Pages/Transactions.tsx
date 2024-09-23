import React from "react";
import { transactionsState } from "../Recoil/atoms";
import { Table } from "antd";
import { useRecoilValue } from "recoil";
import { Transaction } from "../Types";
const dataSource: Transaction[] = [
  {
    time: "12/11/2020 10:31:20 AM",
    wallet: "Aru",
    amount: 0.5268,
    result: "RECEIVED",
    status: "SUCCESS",
  },
  {
    time: "15/12/2020 08:15:30 AM",
    wallet: "Aru",
    amount: 1.2321,
    result: "RECEIVED",
    status: "SUCCESS",
  },
  {
    time: "20/12/2020 02:45:50 PM",
    wallet: "Aru",
    amount: 0.8921,
    result: "RECEIVED",
    status: "SUCCESS",
  },
  {
    time: "25/12/2020 05:20:00 PM",
    wallet: "Aru",
    amount: 1.0,
    result: "RECEIVED",
    status: "SUCCESS",
  },
  {
    time: "30/12/2020 11:11:11 AM",
    wallet: "Aru",
    amount: 0.6598,
    result: "RECEIVED",
    status: "SUCCESS",
  },
];

const columns = [
  {
    title: "Coin",
    dataIndex: "time",
    key: "time",
    render: (text: string) => (
      <div className="flex items-center">
        <img
          src="https://cryptologos.cc/logos/bitcoin--logo.png?v=022"
          alt="Bitcoin"
          className="w-6 h-6 mr-2"
        />
        <div>{text}</div>
      </div>
    ),
  },
  {
    title: "Wallet",
    dataIndex: "wallet",
    key: "wallet",
    render: (text: string) => <span>{text}</span>,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Result",
    dataIndex: "result",
    key: "result",
    render: (text: string) => <span className="text-blue-500">{text}</span>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text: string) => <span className="text-blue-500">{text}</span>,
  },
];
export default function Transactions() {
  const transactions = useRecoilValue<Transaction[]>(transactionsState);
  console.log({ transactions });

  return (
    <div className="bg-gray-900 p-6">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        rowKey="time"
        className="bg-gray-800 text-white"
      />
    </div>
  );
}
