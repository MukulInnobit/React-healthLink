import { Card, Col, Row, Typography } from "antd";
import Form from "antd/lib/form/Form";
import React, { useState } from "react";
import InputBox from "../../../stateless/common/inputBox";
import SelectInput from "../../../stateless/common/selectInput";
import Button from "../../../stateless/common/button";
import { Upload, message } from "antd";
import "./addOrganisation.less";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import ProfileIcon from "../../../stateless/common/profileThumbnail";
import Avatar from "antd/lib/avatar/avatar";
import { camera, circle } from "../../../../images";
import { AppRoutes } from "../../../../router/appRoutes";
import { Breadcrumbs } from "../../../stateless/common/breadCrumbs";
import { CompWrapper } from "../../../stateless/common/contentWrapper";

const AddOrganisation = (props: any) => {
  const [organisationDetails, setDetails] = useState<any>({
    organizationName: "",
    Address1: "",
    Address2: "",
    city: "",
    state: "",
    status: "",
    country: "",
    zip: "",
    timeZone: "",
    notes: "",
    contactNumber: "",
    phoneNumber: "",
    firstname: "",
    mi: "",
    lastname: "",
    emailAddress: "",
    firstname2: "",
    mi2: "",
    lastname2: "",
    emailAddress2: "",
  });
  const handleChange = (e: any) => {
    var { name, value } = e.target;
    setDetails({ ...organisationDetails, [name]: value });
    console.log(organisationDetails);
  };

  const handleSubscriptionStatus = (value: any) => {
    setDetails({ ...organisationDetails, ["status"]: value });
    console.log(organisationDetails);
  };

  const handleTimezone = (value: any) => {
    setDetails({ ...organisationDetails, ["timeZone"]: value });
    console.log(organisationDetails);
  };

  const onSubmit = (updatedOrg: any) => {
    console.log("submit ted", updatedOrg);
  };
  const handleUpload = async ({ fileList }: any) => {
    setDetails({
      ...organisationDetails,
      logo: await getBase64(fileList?.[0]?.originFileObj),
    });
  };

  const handleSubmit = () => {
    console.log(organisationDetails);
  };
  const selectValue = [
    {
      text: "A",
      value: "a",
    },
    {
      text: "B",
      value: "b",
    },
  ];

  const breadCrumbs = [
    {
      text: "Dashboard",
      link: AppRoutes.LANDING,
    },
    {
      text: "Organizations",
      link: AppRoutes.ORGANIZATIONLIST,
    },
  ];
  const handleBeforeUpload = async (file: any, fileList: any) => {
    const isJpgOrPng =
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/jpg";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 0.25;
    if (!isLt2M) {
      message.error("Image must smaller than 250K!");
    }
    const isValid = await checkImageWH(file, 250, 250);
    return isJpgOrPng && isLt2M && isValid ? true : Upload.LIST_IGNORE;
  };

  const checkImageWH = (file: any, width: number, height: number) => {
    return new Promise<boolean>(function (resolve, reject) {
      let filereader = new FileReader();
      filereader.onload = (e: any) => {
        let src = e.target.result;
        const image: any = new Image();
        image.onload = function () {
          if (
            (this.width && this.width > width) ||
            (this.height && this.height > height)
          ) {
            message.error(
              "Please upload picture of size less than or equal to " +
                width +
                " * " +
                height
            );
            return false;
          } else {
            resolve(true);
          }
        };
        image.onerror = reject;
        image.src = src;
      };
      filereader.readAsDataURL(file);
    });
  };
  const getBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div>
      <div className="addOrgBrdContainer">
      <Row gutter={[16, 8]} className="brdCrumbOrg">
        <Col span={20}>
          <Breadcrumbs breadcrumbs={breadCrumbs} />
          <span className="brdOrganisations">Organzations</span>
        </Col>
        <Col span={4}>
          <Button type="primary" className="saveOrgBtn"  htmlType="submit" form="organisationAdd">
            save
          </Button>
        </Col>
      </Row>
      </div>
     

      {/* <div className="addOrgCardContainer"> */}
      <CompWrapper observeOn="brdCrumbOrg" name="infoContainerOrg">
      <div className="addOrgCardContainer">
      <Card  className="infoContainerOrg">
        <Form id="organisationAdd" layout="vertical" onFinish={()=>onSubmit(organisationDetails)}>
          <Row>
            <Col span={6} style={{ textAlign: "center" }}>
              <Upload
                beforeUpload={handleBeforeUpload}
                maxCount={1}
                openFileDialogOnClick={organisationDetails.logo ? false : true}
                onChange={handleUpload}
                showUploadList={false}
              >
                {organisationDetails.logo ? (
                  <ProfileIcon src={organisationDetails.logo} size="large" />
                ) : (
                  <div className="uploadContainer">
                    <div className="orgInfoLogo">
                      <PlusOutlined />
                      <p>Logo</p>
                    </div>
                    <span>
                      Upload Logo JPG, PNG, Max Size 250K Max Resolution 250px X
                      250px,
                    </span>
                    <span>
                      <img src={circle} className="circleImg"></img>
                      <img src={camera} className="cameraImg"></img>
                    </span>
                  </div>
                )}
              </Upload>
            </Col>

            <Col span={18}>
              <Row gutter={[30, 20]}>
                <Col span={18}>
                  <InputBox
                    labelSubName="Organization Name"
                    placeholder="organization name"
                    name="organizationName"
                    value={organisationDetails.organizationName}
                    rules={[
                      {
                        required: true,
                        message: "Please enter a organization name",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={6}>
                  <SelectInput
                    labelSubName="Subscription Status"
                    placeholder="select"
                    name="status"
                    className="card-dropdown with-search"
                    bordered={true}
                    value={organisationDetails.status}
                    optionValue={selectValue}
                    onChange={handleSubscriptionStatus}
                  />
                </Col>
                <Col span={12}>
                  <InputBox
                    labelSubName="Address 1"
                    name="Address1"
                    value={organisationDetails.Address1}
                    rules={[
                      {
                        required: true,
                        message: "Please enter a organization name",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={12}>
                  <InputBox
                    labelSubName="Address 2"
                    name="Address2"
                    value={organisationDetails.Address2}
                    rules={[
                      {
                        required: false,
                        message: "Please enter a organization name",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={6}>
                  <InputBox
                    labelSubName="City"
                    name="city"
                    value={organisationDetails.city}
                    rules={[
                      {
                        required: true,
                        message: "Please enter your city",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={6}>
                  <InputBox
                    labelSubName="State/Provience"
                    name="state"
                    value={organisationDetails.state}
                    rules={[
                      {
                        required: true,
                        message: "Please enter a state provience",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={6}>
                  <InputBox
                    labelSubName="Country"
                    name="country"
                    value={organisationDetails.country}
                    rules={[
                      {
                        required: true,
                        message: "Please enter your country",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={6}>
                  <InputBox
                    labelSubName="Zip/Postal Code"
                    name="zip"
                    value={organisationDetails.zip}
                    rules={[
                      {
                        required: true,
                        message: "Please enter your zip/postal code",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row gutter={[30, 30]} className="timeZoneRow">
            <Col span={6}>
              <SelectInput
                labelSubName="TimeZone"
                placeholder="select"
                name="timeZone"
                value={organisationDetails.timeZone}
                rules={[
                  {
                    required: true,
                    message: "Please enter your timezone",
                  },
                ]}
                className="card-dropdown with-search"
                bordered={true}
                optionValue={selectValue}
                onChange={handleTimezone}
              />
            </Col>
            <Col span={18}>
              <InputBox
                labelSubName="Notes"
                name="notes"
                value={organisationDetails.notes}
                rules={[
                  {
                    required: false,
                    message: "Please enter your zip/postal code",
                  },
                ]}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row gutter={[30, 10]} className="form-container">
            <Col span={24} className="primaryContactCol">
              <Typography className="contactCol">
                Primary Contact Details
              </Typography>
            </Col>
            <Col span={4}>
              <InputBox
                labelSubName="First Name"
                name="firstname"
                value={organisationDetails.firstname}
                rules={[
                  {
                    required: true,
                    message: "Please enter your first name",
                  },
                ]}
                onChange={handleChange}
              />
            </Col>
            <Col span={2}>
              <InputBox
                labelSubName="MI"
                name="mi"
                value={organisationDetails.mi}
                rules={[
                  {
                    required: false,
                    message: "Please enter your zip/postal code",
                  },
                ]}
                onChange={handleChange}
              />
            </Col>
            <Col span={4}>
              <InputBox
                labelSubName="Last Name"
                name="lastname"
                value={organisationDetails.lastname}
                rules={[
                  {
                    required: true,
                    message: "Please enter your last name",
                  },
                ]}
                onChange={handleChange}
              />
            </Col>
            <Col span={4}>
              <InputBox
                labelSubName="Contact Number"
                name="contactNumber"
                value={organisationDetails.contactNumber}
                rules={[
                  {
                    required: false,
                    message: "Please enter your last name",
                  },
                ]}
                onChange={handleChange}
              />
            </Col>
            <Col span={4}>
              <InputBox
                labelSubName="Mobile Number"
                name="mobilenumber"
                value={organisationDetails.mobilenumber}
                rules={[
                  {
                    required: true,
                    message: "Please enter your number",
                  },
                ]}
                onChange={handleChange}
              />
            </Col>
            <Col span={6}>
              <InputBox
                labelSubName="Email Address"
                name="emailAddress"
                value={organisationDetails.emailAddress}
                rules={[
                  {
                    required: true,
                    message: "Please enter your email address",
                  },
                ]}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row gutter={[30, 10]}>
            <Col span={24} className="primaryContactCol">
              <Typography className="contactCol">
                Secondary Contact Details
              </Typography>
            </Col>
            <Col span={4}>
              <InputBox
                labelSubName="First Name"
                name="firstname2"
                value={organisationDetails.firstname2}
                rules={[
                  {
                    required: false,
                    message: "Please enter your first name",
                  },
                ]}
                onChange={handleChange}
              />
            </Col>
            <Col span={2}>
              <InputBox
                labelSubName="MI"
                name="mi2"
                value={organisationDetails.mi2}
                rules={[
                  {
                    required: false,
                    message: "Please enter your zip/postal code",
                  },
                ]}
                onChange={handleChange}
              />
            </Col>
            <Col span={4}>
              <InputBox
                labelSubName="Last Name"
                name="lastname2"
                value={organisationDetails.lastname2}
                rules={[
                  {
                    required: false,
                    message: "Please enter your last name",
                  },
                ]}
                onChange={handleChange}
              />
            </Col>
            <Col span={4}>
              <InputBox
                labelSubName="Contact Number"
                name="contactNumber2"
                value={organisationDetails.contactNumber2}
                rules={[
                  {
                    required: false,
                    message: "Please enter your last name",
                  },
                ]}
                onChange={handleChange}
              />
            </Col>
            <Col span={4}>
              <InputBox
                labelSubName="Mobile Number"
                name="mobileNumber"
                value={organisationDetails.mobileNumber}
                rules={[
                  {
                    required: false,
                    message: "Please enter your last name",
                  },
                ]}
                onChange={handleChange}
              />
            </Col>
            <Col span={6}>
              <InputBox
                labelSubName="Email Address"
                name="emailAddress2"
                value={organisationDetails.emailAddress2}
                rules={[
                  {
                    required: false,
                    message: "Please enter your email address",
                  },
                ]}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </Form>
      </Card>
      </div>
      </CompWrapper>
      </div>
   
  );
};
export default AddOrganisation;
