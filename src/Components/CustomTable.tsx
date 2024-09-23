import React from 'react'
import { Table } from 'antd'

export default function CustomTable({columns, dataSource}:any) {
  return (
    <Table
          columns={columns}
          dataSource={dataSource}
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
  )
}
