import { Col, Row } from "antd";
import React, { useState } from "react";
import "./addProvider.less";
// import { DeleteModal } from "../../../stateless/organisation/modals/deleteOrganization";
import { provider } from "../providerDetails/providerDummyData";
import { deleteIcon, unlockIcon } from "../../../../images";
import { AppRoutes } from "../../../../router/appRoutes";
import { Breadcrumbs } from "../../../stateless/common/breadCrumbs";
import Button from "../../../stateless/common/button";
// import UserForm from "../../../stateless/user/form";
import ProviderForm from "../../../stateless/provider/form";
import { CompWrapper } from "../../../stateless/common/contentWrapper";

const AddProviderForm = (props: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [providerDetailsForm, setProviderDetailForm] = useState({
    title: "",
    firstName: "",
    mi: "",
    lastName: "",
    designation: "",
    role: "",
    speciality: "",
    providerType: "",
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
    npi: "",
    npiName: "",
  });

  const getProviderData = (providerData: any) => {
    let name = Object.keys(providerData)[0];
    let value = providerData[name];
    setProviderDetailForm(() => ({
      ...providerDetailsForm,
      [name]: value,
    }));
    console.log(providerDetailsForm);
  };

  const onProviderAdding = (providerDetailsForm: any) => {
    console.log(providerDetailsForm);
  };

  const obj = {
    providerDetailsForm,
    getProviderData,
  };

  const breadCrumbs = [
    {
      text: "Dashboard",
    },
    {
      text: "Users",
    },
  ];
  return (
    <div className="addProviderScreen">
      <Row className="addProviderBrd">
        <Col span={18}>
          <Breadcrumbs breadcrumbs={breadCrumbs} />
          <p className="brdUserName">ADD Users</p>
        </Col>
        <Col span={6}>
          <Row gutter={16} style={{ paddingBottom: "25px" }}>
            <Col span={12}>
              <Button type="primary" htmlType="submit" form="addProvider">
                SAVE
              </Button>
            </Col>
            <Col span={12}>
              <Button type="primary">send invite</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <CompWrapper observeOn="addProviderBrd">
        <ProviderForm
          obj={obj}
          onSubmit={onProviderAdding}
          formID="addProvider"
        />
      </CompWrapper>
    </div>
  );
};
export default AddProviderForm;
