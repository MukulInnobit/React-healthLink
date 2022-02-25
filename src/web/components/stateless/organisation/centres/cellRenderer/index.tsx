import { Form } from "antd";
import { useEffect, useState } from "react";
import { deleteSmall, editSmall } from "../../../../../images";
import InputBox from "../../../common/inputBox";
import "./cellRenderer.less"

export const DepartmentRenderer = (props: any) => {
    const { value } = props
    const [initialValue, setValue] = useState(value)
    const [isEditEnable, setEditEnable] = useState(false)

    useEffect(() => {
        if (value == "") {
            setEditEnable(true)
        }
    }, [])
    return (
        <div className="cellRenderer" >
            <div className="input-container">
                {isEditEnable ?
                    <Form id="centreForm" onFinish={() => console.log(value)}>
                        <InputBox name="centreName" initialValue={initialValue} value={initialValue} rules={[{ required: true, message: "Please enter the Name!" }]} onChange={(e: any) => setValue(e.target.value)} />
                    </Form>
                    :
                    <span>{value}</span>}
            </div>
            <div className="icon-container">
                <img src={deleteSmall} />
                <img src={editSmall} onClick={() => setEditEnable(!isEditEnable)} />
            </div>
        </div>
    )
}