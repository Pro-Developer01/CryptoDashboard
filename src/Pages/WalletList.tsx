import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Input, message } from "antd";
import { DeleteOutlined, PlusCircleFilled } from "@ant-design/icons";
import { Sidebar } from "../Components";
import axios from "axios";
import BitcoinIcon from "../Assets/BitcoinIcon";
const API_KEY = process.env.REACT_APP_BLOCKCYPHER_API_KEY;

interface Wallet {
  id: string;
  name: string;
  address: string;
  balance: number;
}

interface Transaction {
  txid: string;
  amount: number;
  confirmations: number;
  time: string;
}

interface SyncItem {
  type: "balance" | "history";
  walletId: string;
}

const data = [
  { key: "1", coin: "BITCOIN", holding: "BTC 0.00256" },
  { key: "2", coin: "BITCOIN 1", holding: "BTC 0.00256" },
  { key: "3", coin: "BITCOIN 2", holding: "BTC 0.00256" },
  { key: "4", coin: "BITCOIN 3", holding: "BTC 0.00256" },
  { key: "5", coin: "BITCOIN 4", holding: "BTC 0.00256" },
];

const WalletList: React.FC = () => {
  const columns = [
    {
      title: "Coin",
      dataIndex: "coin",
      key: "coin",
      render: (text: string) => (
        <div className="flex gap-2 items-center">
          <BitcoinIcon />
          {/* <div className="w-8 h-8 rounded-full bg-yellow-900 flex items-center justify-center mr-3">
            <span className="text-yellow-400 font-bold text-lg">₿</span>
          </div> */}
          <span className="text-gray-400 ">{text}</span>
        </div>
      ),
    },
    {
      title: "Holding",
      dataIndex: "holding",
      key: "holding",
      render: (text: string) => <span className="text-gray-400 ">{text}</span>,
    },
    {
      title: "Actions",
      key: "actions",
      render: () => (
        <DeleteOutlined className="text-gray-400 hover:text-gray-400 cursor-pointer " />
      ),
    },
  ];
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [syncQueue, setSyncQueue] = useState<SyncItem[]>([]);
  const [syncStatus, setSyncStatus] = useState<"Syncing" | "Synced">("Synced");
  const [isImportModalVisible, setIsImportModalVisible] = useState(false);
  const [mnemonic, setMnemonic] = useState("");
  const [walletName, setWalletName] = useState("");
  const [error, setError] = useState({
    status: false,
    message: "",
  });

  const processQueue = async () => {
    if (syncQueue.length > 0 && syncStatus === "Synced") {
      setSyncStatus("Syncing");
      const item = syncQueue[0];
      try {
        if (item.type === "balance") {
          await fetchBalance(item.walletId);
        } else {
          await fetchTransactions(item.walletId);
        }
        setSyncQueue((prev) => prev.slice(1));
        await new Promise((resolve) => setTimeout(resolve, 200)); // 0.2 second delay
        processQueue();
      } catch (error) {
        console.error("Sync failed:", error);
        // Implement retry logic here
        setSyncQueue((prev) => [...prev.slice(1), item]); // Move failed item to end of queue
      }
    } else if (syncQueue.length === 0 && syncStatus === "Syncing") {
      setSyncStatus("Synced");
    }
  };

  const fetchBalance = async (walletId: string) => {
    const wallet = wallets.find((w) => w.id === walletId);
    if (wallet) {
      const response = await axios.get(
        `https://api.blockcypher.com/v1/btc/test3/addrs/${wallet.address}/balance?token=${API_KEY}`
      );
      setWallets((prev) =>
        prev.map((w) =>
          w.id === walletId
            ? { ...w, balance: response.data.balance / 100000000 }
            : w
        )
      );
    }
  };

  const fetchTransactions = async (walletId: string) => {
    const wallet = wallets.find((w) => w.id === walletId);
    if (wallet) {
      const response = await axios.get(
        `https://api.blockcypher.com/v1/btc/test3/addrs/${wallet.address}/full?token=${API_KEY}`
      );
      const newTransactions = response.data.txs.map((tx: any) => ({
        txid: tx.hash,
        amount: tx.outputs[0].value / 100000000,
        confirmations: tx.confirmations,
        time: new Date(tx.received).toLocaleString(),
      }));
      setTransactions((prev) => [...prev, ...newTransactions]);
    }
  };

  const importWallet = async () => {
    try {
      // In a real application, you'd use a library like bitcoinjs-lib to derive the address from the mnemonic
      // This is a placeholder implementation
      const address = `testnet-address-${Math.random()
        .toString(36)
        .substring(7)}`;
      const newWallet: Wallet = {
        id: Math.random().toString(36).substring(7),
        name: walletName,
        address: address,
        balance: 0,
      };
      setWallets((prev) => [...prev, newWallet]);
      setSyncQueue((prev) => [
        ...prev,
        { type: "balance", walletId: newWallet.id },
        { type: "history", walletId: newWallet.id },
      ]);
      setIsImportModalVisible(false);
      setMnemonic("");
      setWalletName("");
      message.success("Wallet imported successfully");
    } catch (error: any) {
      console.error("Failed to import wallet:", error);
      message.error(error?.message || "Failed to import wallet");
    }
  };

  const resync = () => {
    const newQueue: SyncItem[] = wallets.flatMap((wallet) => [
      { type: "balance", walletId: wallet.id },
      { type: "history", walletId: wallet.id },
    ]);
    setSyncQueue((prev) => [...prev, ...newQueue]);
  };

  const handleSubmit = () => {
    if (!mnemonic || !walletName) {
      setError({
        status: true,
        message: "Please enter wallet name and mnemonic",
      });
      return;
    }
    importWallet();
  };

  const handleModel = () => {
    setIsImportModalVisible(true);
    setError({
      status: false,
      message: "",
    });
  };

  useEffect(() => {
    processQueue();
  }, [syncQueue]);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-14">
        <span className="text-xl text-yellow-600 font-bold">Wallet list</span>
        <Button
          type="primary"
          className="bg-gray-700 text-white-900 border-gray-600 hover:bg-gray-600"
          icon={<PlusCircleFilled style={{ color: "#85633E" }} />}
          onClick={handleModel}
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
                <th className="!bg-gray-900 !border-0 !text-white-800 font-normal py-2 ">
                  {children}
                </th>
              ),
            },
            body: {
              cell: ({ children }: any) => (
                <td className=" text-white-700 !border-b-[11px] !border-black font-normal py-2 ">
                  {children}
                </td>
              ),
            },
          }}
        />
        <Modal
          title="Import Wallet"
          visible={isImportModalVisible}
          onOk={importWallet}
          onCancel={() => setIsImportModalVisible(false)}
          footer={null}
          className="bg-gray-900 text-white"
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="walletName"
                className="block text-sm font-medium text-gray-400"
              >
                Enter your wallet name :
              </label>
              <Input
                id="walletName"
                value={walletName}
                onChange={(e) => setWalletName(e.target.value)}
                className="mt-1 block w-full bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div>
              <label
                htmlFor="mnemonic"
                className="block text-sm font-medium text-gray-400"
              >
                Enter your Mnemonic :
              </label>
              <Input.TextArea
                id="mnemonic"
                value={mnemonic}
                onChange={(e) => setMnemonic(e.target.value)}
                className="mt-1 block w-full bg-gray-800 border-gray-700 text-white"
                rows={4}
              />
            </div>
            {error.status && (
              <div className="text-red-500 text-xs">{error.message}</div>
            )}
            <div className="flex justify-center">
              <Button
                onClick={handleSubmit}
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default WalletList;
