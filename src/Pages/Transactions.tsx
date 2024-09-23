import React from "react";
import { transactionsState } from "../Recoil/atoms";
import { Table } from "antd";
import { useRecoilValue } from "recoil";
import { Transaction } from "../Types";
import CustomTable from "../Components/CustomTable";
import BitcoinIcon from "../Assets/BitcoinIcon";
import DownArrow from "../Assets/DownArrow";
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
        <BitcoinIcon />
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
    render: (text: string) => <span>{text} BTC</span>,
  },
  {
    title: "Result",
    dataIndex: "result",
    key: "result",
    render: (text: string) => (
      <span className="flex gap-1 justify-center items-center text-blue-500">
        <DownArrow />
        {text}
      </span>
    ),
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
    <div className="w-full">
      <div className="flex justify-between items-center mb-14">
        <span className="text-xl text-yellow-600 font-bold">Transactions</span>
      </div>
      <div className="bg-gray-900 text-gray-300">
        <span className="inline-block text-xs font-semibold mb-4 pl-6">
          Total Transactions - {dataSource.length || 0}
        </span>
        <CustomTable columns={columns} dataSource={dataSource}></CustomTable>
      </div>
    </div>
  );
}
