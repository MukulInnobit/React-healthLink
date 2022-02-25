import { Col, Row } from "antd";
import React, { useState } from "react";
// import UserForm from "../../../stateless/user/form";
import ProviderForm from "../../../stateless/provider/form";
// import { provider } from "./providerDummyData";
import Button from "../../../stateless/common/button";
import { deleteIcon, unlockIcon } from "../../../../images";
import {provider} from "./providerDummyData"
import { Breadcrumbs } from "../../../stateless/common/breadCrumbs";
import { AppRoutes } from "../../../../router/appRoutes";
import "./providerDetails.less"
import { CompWrapper } from "../../../stateless/common/contentWrapper";

const ProviderDetailsForm = () => {
 
  const [providerDetailsForm, setProviderDetailsForm] = useState<any>({
    firstName: provider.firstName,
    img:provider.img,
    title:provider.title,
    designation: provider.designation,
    speciality: provider.speciality,
    mi: provider.mi,
    lastName: provider.lastName,
    role: provider.role,
    email: provider.email,
    userName: provider.userName,
    contactNumber: provider.contactNumber,
    mobileNumber: provider.mobileNumber,
    address1: provider.address1,
    address2: provider.address2,
    city: provider.city,
    state: provider.state,
    country: provider.country,
    zip: provider.zip,
    status: provider.status,
    providerType:provider.providerType,
    npi:provider.npi,
    npiName: provider.npiName
  });

  const breadCrumbs = [
    {
        text: "Dashboard",
        link: AppRoutes.LANDING
    },
    {
        text: "Users",
        link: AppRoutes.USERLIST
    },
    {
      text: "EDIT PROVIDER",
  }
]
     
   
        

const getProviderData = (providerData:any) =>{
  let name = Object.keys(providerData)[0]
  let value = providerData[name];
  setProviderDetailsForm(()=>({
    ...providerDetailsForm ,
    [name]: value
  }))
}

    var obj={
        providerDetailsForm,
        getProviderData,
    }
    
   
    const onProviderEdit = (providerDetailsForm: any) => {
      console.log("submitted", providerDetailsForm)
  }

  return (
    <div className="addUserScreen">
      <Row className="addUsers">
        <Col span={12}>
        <Breadcrumbs breadcrumbs={breadCrumbs}/>
        <p className="brdUserName">EDIT USERs</p>

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
            <Button type="primary" htmlType="submit" form="providerEdit" >Save Changes</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <CompWrapper observeOn="addUsers">
      <ProviderForm  obj={obj} onSubmit={onProviderEdit}  formID="providerEdit" />
      </CompWrapper>
    </div>
  );
};
export default ProviderDetailsForm;
