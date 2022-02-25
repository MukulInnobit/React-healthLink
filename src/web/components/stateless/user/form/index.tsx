import { Card, Col, message, Row, Upload } from "antd";
import Form from "antd/lib/form/Form";
import React, { useState } from "react";
import InputBox from "../../common/inputBox";
import ProfileIcon from "../../common/profileThumbnail";
import SelectInput from "../../common/selectInput";
import { PlusOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";
import "./userDetails.less";
import { org } from "../../../containers/organisation/organisationDetails/dumData";
import { camera, circle } from "../../../../images";
const UserForm = (props: any) => {
  const { obj, onSubmit, formID } = props;
  const [userdetails, setUserDetails] = useState<any>({});
  

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
  var userDetailsForm;

  if (props && props.obj && props.obj.userDetailsForm) {
    userDetailsForm = props.obj.userDetailsForm;
  }

  const handleChange = (e: any) => {
    var { name, value } = e.target;
    props.obj.getUserData({ [name]: value });
  };

  

  const subscriptionStatus = (value: any) => {
    props.obj.getUserData({ ["status"]: value });
  };

  const roleStatus = (value: any) => {
    props.obj.getUserData({ ["role"]: value });
  };

  function onChange(e: any) {
    console.log(`checked = ${e.target.checked}`);
  }
  const handleUpload = async ({ fileList }: any) => {
    setUserDetails({
      ...userdetails,
      logo: await getBase64(fileList?.[0]?.originFileObj),
    });
  };

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
    <div className="addUserForm">
      <Card >
        <Form
          id={formID}
          layout="vertical"
          onFinish={() => onSubmit(obj.userDetailsForm)}
        >
          <Row>
            <Col span={6} style={{ textAlign: "center" }}>
              <Upload
                beforeUpload={handleBeforeUpload}
                maxCount={1}
                openFileDialogOnClick={userdetails.logo ? false : true}
                onChange={handleUpload}
                showUploadList={false}
              >
                {userdetails.logo ? (
                  <ProfileIcon src={userdetails.logo} size="large" />
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
                <Col span={8}>
                  <InputBox
                    labelSubName="First Name"
                    name="firstName"
                    initialValue={obj.userDetailsForm.firstName}
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
                    initialValue={obj.userDetailsForm.mi}
                    rules={[
                      {
                        required: false,
                        message: "Please enter a organization name",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={8}>
                  <InputBox
                    labelSubName="Last Name"
                    name="lastName"
                    initialValue={obj.userDetailsForm.lastName}
                    rules={[
                      {
                        required: true,
                        message: "Please enter your last name",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={6}>
                  <SelectInput
                    labelSubName="Role"
                    placeholder="select"
                    name="role"
                    className="card-dropdown with-search"
                    bordered={true}
                    initialValue={obj.userDetailsForm.role}
                    optionValue={selectValue}
                    onChange={roleStatus}
                  />
                </Col>
                <Col span={12}>
                  <InputBox
                    labelSubName="EMAIL ID"
                    name="emailId"
                    initialValue={obj.userDetailsForm.emailId}
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Email",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col md={8} lg={8} xl={12} style={{ marginTop: "-24px" }}>
                  <Checkbox onChange={onChange} className="emailCheckbox">
                    Use email address
                  </Checkbox>
                  <InputBox
                    labelSubName="User Name"
                    name="userName"
                    initialValue={obj.userDetailsForm.userName}
                    rules={[
                      {
                        required: true,
                        message: "Please enter your user name",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={12}>
                  <InputBox
                    labelSubName="Contact Number"
                    name="contactNumber"
                    initialValue={obj.userDetailsForm.contactNumber}
                    rules={[
                      {
                        required: false,
                        message: "Please enter your user name",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={12}>
                  <InputBox
                    labelSubName="Mobile Number"
                    name="mobileNumber"
                    initialValue={obj.userDetailsForm.mobileNumber}
                    rules={[
                      {
                        required: true,
                        message: "Please enter your mobile number",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={12}>
                  <InputBox
                    labelSubName="Address 1"
                    name="Address1"
                    initialValue={obj.userDetailsForm.address1}
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Address",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={12}>
                  <InputBox
                    labelSubName="Address 2"
                    name="address2"
                    initialValue={obj.userDetailsForm.address2}
                    rules={[
                      {
                        required: false,
                        message: "Please enter your Address",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={6}>
                  <InputBox
                    labelSubName="City"
                    name="city"
                    initialValue={obj.userDetailsForm.city}
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
                    initialValue={obj.userDetailsForm.state}
                    rules={[
                      {
                        required: true,
                        message: "Please enter your State/Provience",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={6}>
                  <InputBox
                    labelSubName="Country"
                    name="country"
                    initialValue={obj.userDetailsForm.country}
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
                    initialValue={obj.userDetailsForm.zip}
                    rules={[
                      {
                        required: true,
                        message: "Please enter your zip/postalcode",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={12}>
                  <SelectInput
                    labelSubName="Subscription Status"
                    name="status"
                    className="card-dropdown with-search"
                    bordered={true}
                    initialValue={obj.userDetailsForm.status}
                    optionValue={selectValue}
                    onChange={subscriptionStatus}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};
export default UserForm;
