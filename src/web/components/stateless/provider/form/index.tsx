import {
  Card,
  Checkbox,
  Col,
  Form,
  message,
  Row,
  Typography,
  Upload,
} from "antd";
import React, { useState } from "react";
import { camera, circle } from "../../../../images";
import Button from "../../common/button";
import InputBox from "../../common/inputBox";
import ProfileIcon from "../../common/profileThumbnail";
import SelectInput from "../../common/selectInput";
import "./providerForm.less";
import { PlusOutlined } from "@ant-design/icons";

const ProviderForm = (props:any) => {
  const { obj, onSubmit, formID } = props;
const [providerDetails, setProviderDetails] = useState<any>(obj.providerDetailsForm);

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

  // function onChange(e: any) {
  //   console.log(`checked = ${e.target.checked}`);
  // }


  var providerDetailsForm;

  if (props && props.obj && props.obj.providerDetailsForm) {
    providerDetailsForm = props.obj.providerDetailsForm;
  }

  const handleChange = (e: any) => {
    var { name, value } = e.target;
    props.obj.getProviderData({ [name]: value });
  };

  const subscriptionStatus = (value: any) => {
    props.obj.getProviderData({ ["status"]: value });
  };

  const roleStatus = (value: any) => {
    props.obj.getProviderData({ ["role"]: value });
  };
 const providerTypeValue = (value:any)=>{
   props.obj.getProviderData({["providerType"]: value});
 }

 const titleType = (value:any)=>{
   props.obj.getProviderData({["title"]: value});
 }

 const specialityType= (value: any)=>{
   props.obj.getProviderData({["speciality"]: value})
 }
  function onChange(checkedValues: any) {
    console.log("checked = ", checkedValues);
  }
  const plainOptions = ["SMS", "Email"];

  const handleUpload = async ({ fileList }: any) => {
    setProviderDetails({
      ...providerDetails,
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
    <div className="formCardContainer">
      <Card className="formCard">
        <Form layout="vertical" id={formID} onFinish={() => onSubmit(obj.providerDetailsForm)}>
          <Row>
            <Col span={6} className="uploadImage">
              <Upload
                beforeUpload={handleBeforeUpload}
                maxCount={1}
                openFileDialogOnClick={providerDetails.logo ? false : true}
                onChange={handleUpload}
                showUploadList={false}
              >
                {providerDetails.img ? (
                  <ProfileIcon src={providerDetails.img} size="large" />
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
            </Col>{" "}
            <Col span={18}>
              <Row gutter={[30, 20]}>
                <Col span={2}>
                  <SelectInput
                    labelSubName="Title"
                    placeholder="select"
                    name="title"
                    mode="multiple"
                    className="title-dropdown"
                    bordered={true}
                    value={providerDetails.title}
                    initialValue={providerDetails.title}

                    optionValue={selectValue}
                    onChange={titleType}
                  />
                 
                </Col>
                <Col span={7}>
                  <InputBox
                    labelSubName="First Name"
                    name="firstName"
                    value={providerDetails.firstName}
                    initialValue={providerDetails.firstName}

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
                    value={providerDetails.mi}
                    initialValue={providerDetails.mi}

                    rules={[
                      {
                        required: false,
                        message: "Please enter a organization name",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={7}>
                  <InputBox
                    labelSubName="Last Name"
                    name="lastName"
                    value={providerDetails.lastName}
                    initialValue={providerDetails.lastName}

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
                  <InputBox
                    labelSubName="Designation"
                    name="designation"
                    value={providerDetails.lastName}

                    initialValue={providerDetails.designation}
                    rules={[
                      {
                        required: true,
                        message: "Please enter your last name",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={24}>
                  <InputBox
                    labelSubName="Address 1"
                    name="address1"
                    value={providerDetails.address1}
                    initialValue={providerDetails.address1}

                    rules={[
                      {
                        required: true,
                        message: "Please enter address",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={6} className="specialityCol">
              <Row gutter={[10,25]} className="specialityContainer">
                <Col span={24}>
                <SelectInput
                    labelSubName="Speciality"
                    placeholder="select"
                    name="speciality"
                    className="title-dropdown"
                    bordered={true}
                    value={providerDetails.speciality}
                    initialValue={providerDetails.speciality}

                    optionValue={selectValue}
                    onChange={specialityType}
                  />
                </Col>
                <Col span={24}>
                <SelectInput
                    labelSubName="Provider Type"
                    placeholder="select"
                    name="providerType"
                    className="title-dropdown"
                    bordered={true}
                    value={providerDetails.providerType}
                    initialValue={providerDetails.providerType}

                    optionValue={selectValue}
                    onChange={providerTypeValue}
                  />
                </Col>
                <Col span={24}>
                <SelectInput
                    labelSubName="Role"
                    placeholder="select"
                    name="role"
                    className="title-dropdown"
                    bordered={true}
                    value={providerDetails.role}
                    initialValue={providerDetails.role}

                    optionValue={selectValue}
                    onChange={roleStatus}
                  />
                </Col>
                <Col span={24}>
                <SelectInput
                    labelSubName="Status"
                    placeholder="select"
                    name="status"
                    className="title-dropdown"
                    bordered={true}
                    value={providerDetails.status}
                    initialValue={providerDetails.status}

                    optionValue={selectValue}
                    onChange={subscriptionStatus}
                  />
                </Col>
                <Col span={24}>
                  <p>Preferred Communication Method</p>
                  <Checkbox.Group options={plainOptions} onChange={onChange} />
                </Col>
              </Row>
            </Col>
            <Col span={18}>
              <Row gutter={[30, 20]} className="addressContainer">
                <Col span={24}>
                  <InputBox
                    labelSubName="Address 2"
                    name="address2"
                    value={providerDetails.address2}
                    initialValue={providerDetails.address2}

                    rules={[
                      {
                        required: false,
                        message: "Please enter address",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={6}>
                  <InputBox
                    labelSubName="City"
                    name="city"
                    value={obj.providerDetailsForm.city}
                    initialValue={obj.providerDetailsForm.city}

                    rules={[
                      {
                        required: true,
                        message: "Please enter city",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={6}>
                  <InputBox
                    labelSubName="State/Provience"
                    name="state"
                    value={obj.providerDetailsForm.state}
                    initialValue={obj.providerDetailsForm.state}

                    rules={[
                      {
                        required: true,
                        message: "Please enter your provience",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={6}>
                  <InputBox
                    labelSubName="Zip/Postal code"
                    name="zip"
                    value={obj.providerDetailsForm.zip}
                    initialValue={obj.providerDetailsForm.zip}

                    rules={[
                      {
                        required: true,
                        message: "Please enter your postal code",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={6}>
                  <InputBox
                    labelSubName="Country"
                    name="country"
                  value={obj.providerDetailsForm.country}
                  initialValue={obj.providerDetailsForm.country}

                    rules={[
                      {
                        required: true,
                        message: "Please enter your country",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={12}>
                  <InputBox
                    labelSubName="Email Address"
                    name="email"
                    value={obj.providerDetailsForm.email}
                    initialValue={obj.providerDetailsForm.email}

                    rules={[
                      {
                        required: true,
                        message: "Please enter email address",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={12} style={{marginTop:"-24PX"}}>
                <Checkbox onChange={onChange} className="emailCheckbox">
                    Use email address
                  </Checkbox>
                  <InputBox
                    labelSubName="User Name"
                    name="userName"
                    value={providerDetails.userName}
                    initialValue={providerDetails.userName}

                    rules={[
                      {
                        required: false,
                        message: "Please enter address",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={12}>
                  <InputBox
                    labelSubName="Contact Number"
                    name="contactNumber"
                    value={providerDetails.contactNumber}
                    initialValue={providerDetails.contactNumber}

                    rules={[
                      {
                        required: false,
                        message: "Please enter your contact number",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={12}>
                  <InputBox
                    labelSubName="Mobile Number"
                    name="mobileNumber"
                    value={providerDetails.mobileNumber}
                    initialValue={providerDetails.mobileNumber}

                    rules={[
                      {
                        required: true,
                        message: "Please enter your mobile number",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={8}>
                  <InputBox
                    labelSubName="NPI"
                    name="npi"
                    value={providerDetails.npi}
                    initialValue={providerDetails.npi}

                    rules={[
                      {
                        required: true,
                        message: "Please enter your mobile number",
                      },
                    ]}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={4} className="lookUpBtn">
                  <Button htmlType="button" type="primary">Look up</Button>
                </Col>
                <Col span={12}>
                  <InputBox
                    labelSubName="NPI Name"
                    name="npiName"
                    value={providerDetails.npiName}
                    initialValue={providerDetails.npiName}

                    rules={[
                      {
                        required: false,
                        message: "Please enter your mobile number",
                      },
                    ]}
                    onChange={handleChange}
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
export default ProviderForm;
