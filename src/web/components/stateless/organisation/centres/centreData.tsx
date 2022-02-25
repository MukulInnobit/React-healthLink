import { Table } from "antd";
import { DepartmentRenderer } from "./cellRenderer";
import { DownOutlined, RightOutlined } from "@ant-design/icons"
import { CentreCellRenderer } from "./centreRowRenderer";

export const locationData = [
  {
    key: 0,
    centre: "Rockville, MD",
    children: [
      "Internal Medicine",

      "ENT",

      "Cardiology",
    ]
  },
  {
    key: 1,
    centre: "Bethesda, MD",
    children: [
      "Internal Medicine",

      "ENT",

      "Cardiology",
    ]
  },
  {
    key: 2,
    centre: "Fairfax, VA",
    children: [
    ]
  },
]
export const CentresTable = (props: any) => {
  const { tableData, selectedRow, onRowSelect } = props;

  const columns = [
    {
      title: 'Centre',
      dataIndex: 'centre',
      key: 'centre',
      width: "30%",
      render: (centre: any) => {
        return <CentreCellRenderer value={centre} />
      }
    },
    {
      title: 'Department',
      dataIndex: 'departments',
      key: 'department',
      render: (departments: any) => {
        return (
          departments?.map((dep: any, index: number) => {
            return <DepartmentRenderer value={dep} key={index} />
          })
        )
      },
      width: "30%",
    },
    { title: '', dataIndex: '', key: '', },
    { title: '', dataIndex: '', key: '', },
    { title: '', dataIndex: '', key: '', },
    {
      title: '', dataIndex: '', key: '', render: (row: any) => {
        return (row.children.length ? selectedRow == row.key ? <DownOutlined style={{ paddingLeft: "50%" }} onClick={() => onRowSelect(row, row.key)} /> : <RightOutlined style={{ paddingLeft: "50%" }} onClick={() => onRowSelect(row, row.key)} /> : null)
      }
    },
  ];
  return (
    <Table className="centreTable"
      dataSource={tableData}
      columns={columns}
      rowClassName={(record, index) => { return index == selectedRow ? "selected" : "" }}
      expandable={{ showExpandColumn: false }}
      pagination={false} />
  )
}