import { Col, Row } from "antd";
import React, { useState } from "react";
import UserForm from "../../../stateless/user/form";
import Button from "../../../stateless/common/button";
import { deleteIcon, unlockIcon } from "../../../../images";
import {user} from "./userDummyData"
import { Breadcrumbs } from "../../../stateless/common/breadCrumbs";
import { AppRoutes } from "../../../../router/appRoutes";
import "./userDetails.less"
import { CompWrapper } from "../../../stateless/common/contentWrapper";

const UserDetailsForm = () => {
 
  const [userDetailsForm, setUserDetailsForm] = useState<any>({
    firstName: user.firstName,
    mi: user.mi,
    lastName: user.lastName,
    role: user.role,
    emailId: user.emailId,
    userName: user.userName,
    contactNumber: user.contactNumber,
    mobileNumber: user.mobileNumber,
    address1: user.address1,
    address2: user.address2,
    city: user.city,
    state: user.state,
    country: user.country,
    zip: user.zip,
    status: user.status,
  });

  const breadCrumbs = [
    {
        text: "Dashboard",
        link: AppRoutes.LANDING
    },
    {
        text: "Healthlink Users",
        link: AppRoutes.USERLIST
    },
    {
      text: user.firstName +" "+ user.lastName,
  }
]
     
   
        

const getUserData = (userData:any) =>{
  let name = Object.keys(userData)[0]
  let value = userData[name];
  setUserDetailsForm(()=>({
    ...userDetailsForm ,
    [name]: value
  }))
}

    var obj={
        userDetailsForm,
        getUserData,
    }
    
   
    const onUserEdit = (userDetailsForm: any) => {
      console.log("submitted", userDetailsForm)
  }

  return (
    <div className="addUserScreen">
      <Row className="addUsers">
        <Col span={12}>
        <Breadcrumbs breadcrumbs={breadCrumbs}/>
        <p className="brdUserName">{user.firstName+ " "+ user.lastName}</p>

        </Col>
        <Col span={12}>
          <Row gutter={16} className="userButtons"> 
            <Col  md ={7} lg={6} xl={6}>
              <Button type="primary"><img src={deleteIcon} style={{paddingRight:"5px"}}></img>Delete</Button>
            </Col>
            <Col md={9} lg={9} xl={9}>
            <Button type="primary"><img src={unlockIcon} style={{paddingRight:"5px"}}></img>Reset Password</Button>
            </Col>
            <Col md={8} lg={9} xl={9}>
            <Button type="primary" htmlType="submit" form="userEdit" >Save Changes</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <CompWrapper observeOn="addUsers">
      <UserForm  obj={obj} onSubmit={onUserEdit}  formID="userEdit" />
      </CompWrapper>
    </div>
  );
};
export default UserDetailsForm;
