import { Row, Col } from "antd"
import { Breadcrumbs } from "../../../stateless/common/breadCrumbs";
import Button from "../../../stateless/common/button"
import "./addUser.less"
import UserForm from "../../../stateless/user/form"
import { useState } from "react"
import { AppRoutes } from "../../../../router/appRoutes";
import { CompWrapper } from "../../../stateless/common/contentWrapper";

export const AddUser = (props: any) => {
  const [userDetailsForm, setUserDetailForm] = useState({
    firstName: "",
    mi: "",
    lastName: "",
    role: "",
    emailId: "",
    userName: "",
    contactNumber: "",
    mobileNumber: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    status: "",
  });

  const onUserEdit = () => {
    console.log(userDetailsForm);
  };

    const getUserData = (userData: any) => {
        let name = Object.keys(userData)[0]
        let value = userData[name];
        setUserDetailForm(() => ({
            ...userDetailsForm,
            [name]: value
        }))
    }
    const nextPage = [
        {
            text: "Dashboard",
            link: AppRoutes.LANDING
        },
        {
            text: "Healthlink Users",
            link: AppRoutes.USERLIST
        },
        {
            text: "ADD A USER"
        }
    ]
    const obj = {
        userDetailsForm,
        getUserData
    }

    return (
        <div className="addUserScreen">
            <Row gutter={20} className="addUserRow">
                <Col md={14} lg={16} xl={18}>
                    <Breadcrumbs breadcrumbs={nextPage}/>
                    <span className='addUserHeader'>ADD A USER</span>
                </Col>
                <Col md={5} lg={4} xl={3} >

                    <Button type="primary" htmlType="submit" className="saveButton" form="addUserDetails">SAVE
                    </Button>
                </Col>
                <Col md={5} lg={4} xl={3}>

                    <Button type="primary" className="saveButton">SEND INVITE</Button>
                </Col>
            </Row>
            <CompWrapper observeOn="addUserRow">
            <UserForm obj={obj} onSubmit={onUserEdit} formID="addUserDetails" />
            </CompWrapper>
        </div>
    )
}
