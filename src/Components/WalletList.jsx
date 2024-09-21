import React from 'react';
import { Table, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

interface Wallet {
  key: string;
  name: string;
  balance: string;
}

const WalletList: React.FC = () => {
  // Sample wallet data
  const wallets: Wallet[] = [
    { key: '1', name: 'BITCOIN', balance: 'BTC 0.00256' },
    { key: '2', name: 'BITCOIN 1', balance: 'BTC 0.00256' },
    { key: '3', name: 'BITCOIN 2', balance: 'BTC 0.00256' },
    { key: '4', name: 'BITCOIN 3', balance: 'BTC 0.00256' },
    { key: '5', name: 'BITCOIN 4', balance: 'BTC 0.00256' },
  ];

  // Table columns configuration
  const columns = [
    {
      title: 'Coin',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <span className="text-white">{text}</span>,
    },
    {
      title: 'Holding',
      dataIndex: 'balance',
      key: 'balance',
      render: (balance: string) => <span className="text-white">{balance}</span>,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Wallet) => (
        <Button
          type="text"
          className="text-white hover:text-red-500"
          icon={<DeleteOutlined />}
          onClick={() => handleDelete(record.key)}
        />
      ),
    },
  ];

  // Handle deletion of a wallet
  const handleDelete = (key: string) => {
    console.log(`Delete wallet with key: ${key}`);
    // You can implement the deletion logic here
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <span className="text-white text-xl">Total Coins - {wallets.length}</span>
        <Button type="primary" className="bg-brown-600">
          Import Wallet
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={wallets}
        pagination={false}
        className="bg-gray-800 text-white"
      />
    </div>
  );
};

export default WalletList;
