import React from "react";
import { SyncOutlined, HeatMapOutlined } from "@ant-design/icons";

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex gap-2 items-center">
        <HeatMapOutlined style={{ fontSize: '40px' }} /> <span className="font-bold text-md">CySync</span>
      </div>
      <div className="flex gap-2 items-center cursor-pointer">
        <span className="text-2xl font-semibold text-yellow-500">Synced</span>
        <SyncOutlined className="text-yellow-500" />
      </div>
    </div>
  );
}
