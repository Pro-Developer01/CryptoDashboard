import React from 'react';
import { Table, Button } from 'antd';
import { WalletOutlined, SwapOutlined, DeleteOutlined } from '@ant-design/icons';

const Dashboard: React.FC = () => {
  const columns = [
    {
      title: 'Coin',
      dataIndex: 'coin',
      key: 'coin',
      render: (text: string, record: any) => (
        <div className="flex items-center">
          <img src="/api/placeholder/24/24" alt={text} className="mr-2 rounded-full" />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: 'Holding',
      dataIndex: 'holding',
      key: 'holding',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <DeleteOutlined className="text-gray-400 hover:text-gray-200 cursor-pointer" />
      ),
    },
  ];

  const data = [
    { key: '1', coin: 'BITCOIN', holding: 'BTC 0.00256' },
    { key: '2', coin: 'BITCOIN 1', holding: 'BTC 0.00256' },
    { key: '3', coin: 'BITCOIN 2', holding: 'BTC 0.00256' },
    { key: '4', coin: 'BITCOIN 3', holding: 'BTC 0.00256' },
    { key: '5', coin: 'BITCOIN 4', holding: 'BTC 0.00256' },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-yellow-500">Synced</h1>
      </div>
      <div className="flex">
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
        <div className="w-3/4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl">Total Coins - 7</h2>
            <Button type="primary" className="bg-gray-700 border-gray-600 hover:bg-gray-600">
              IMPORT WALLET
            </Button>
          </div>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            className="bg-gray-800 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;