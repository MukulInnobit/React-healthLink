import { Row, Col, Table, Card, message } from "antd";
import Button from "../../common/button";
import { CentresTable, locationData } from "./centreData";
import "./organizatonCentres.less"
import { useState } from "react";
import { CompWrapper } from "../../common/contentWrapper";

export const OrganizaionCentres = (props: any) => {
    const [tableData, setTableData] = useState(locationData)
    const [selectedRow, setSelectedRow] = useState<any | null>()

    const handleAddCentre = () => {
        var count = tableData.length + 1;
        const newData: any = {
            key: count,
            centre: "",
            children: [
            ]
        }
        setTableData((tableData) => [...tableData, newData])
    };
    const handleAddDepartment = () => {
        const newData: any = ""
        if (selectedRow == null) {
            message.error("please select a centre")
        } else
            for (var i = 0; i < tableData.length; i++) {
                if (i == selectedRow) {
                    setTableData(prevstate => prevstate.map((centre: any) => { if (centre.key == tableData[i].key) { return { ...centre, ["departments"]: [...centre.children, newData] } } else { return centre } }));
                }
            }
    }

    const onRowSelect = (record: any, index: any) => {
        if (index !== selectedRow) {
            setSelectedRow(index)
            setTableData(prevstate => prevstate.map((centre: any) => { if (centre.centre == record.centre) { return { ...centre, ["departments"]: centre.children } } else { return { ...centre, ["departments"]: [] } } }))
        } else {
            console.log(record)
            setSelectedRow(null)
            setTableData(prevstate => prevstate.map((centre: any) => { if (centre.centre == record.centre) { return { ...centre, ["departments"]: [] } } else { return centre } }))
        }
    }
    return (
        <CompWrapper observeOn="detailsHeader" name="centres-container">
            <Card className="centres-container">
                <Row justify="end" gutter={20}>
                    <Col span={4}>
                        <Button type="primary" onClick={handleAddCentre}>Add Centre</Button>
                    </Col>
                    <Col span={4}>
                        <Button type="primary" onClick={handleAddDepartment}>Add Department</Button>
                    </Col>
                </Row>
                <Row className="tableContainer">
                    <Col span={24}>
                        <CentresTable tableData={tableData} selectedRow={selectedRow} onRowSelect={onRowSelect} />
                    </Col>
                </Row>
            </Card>
        </CompWrapper>
    )
}