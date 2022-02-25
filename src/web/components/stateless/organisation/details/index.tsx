import { Row, Col, Form, Upload, message } from "antd"
import { PlusOutlined } from '@ant-design/icons';
import { useState } from "react"
import InputBox from "../../common/inputBox"
import SelectInput from "../../common/selectInput"
import "./organizationInfo.less"
import ProfileIcon from "../../common/profileThumbnail";
import { camera, circle } from "../../../../images";
import { CompWrapper } from "../../common/contentWrapper";

var options = [{ text: "first option", value: 1 }, { text: "second option", value: 1 }, { text: "third option", value: 1 }]

export const OrgansationInfo = (props: any) => {
    const { organisation, onSubmit } = props;
    const [organisationDetails, setDetails] = useState<any>({
            id: organisation.id,
            name: organisation.name,
            address1: organisation.address1,
            address2: organisation.address2,
            city: organisation.city,
            state: organisation.state,
            country: organisation.country,
            postalCode: organisation.postalCode,
            timeZone: organisation.timeZone,
            notes: organisation.notes,
            status: organisation.status,
            primaryContact: {
                firstName: organisation.primaryContact.firstName,
                mi: "",
                lastName: organisation.primaryContact.lastName,
                contactNo: organisation.primaryContact.contactNo,
                mobileNo: organisation.primaryContact.mobileNo,
                email: organisation.primaryContact.email
            },
            secondaryContact: {
                firstName: organisation.secondaryContact.firstName,
                mi: "",
                lastName: organisation.secondaryContact.lastName,
                contactNo: organisation.secondaryContact.contactNo,
                mobileNo: organisation.secondaryContact.mobileNo,
                email: organisation.secondaryContact.email
            }
        })
    const { primaryContact, secondaryContact } = organisationDetails;
    const [primary, setPrimary] = useState({
        firstName: primaryContact.firstName,
        mi: "",
        lastName: primaryContact.lastName,
        contactNo: primaryContact.contactNo,
        mobileNo: primaryContact.mobileNo,
        email: primaryContact.email
    })
    const [secondary, setSecondary] = useState({
        firstName2: secondaryContact.firstName,
        mi2: "",
        lastName2: secondaryContact.lastName,
        contactNo2: secondaryContact.contactNo,
        mobileNo2: secondaryContact.mobileNo,
        email2: secondaryContact.email
    })
    const handleBeforeUpload = async (file: any, fileList: any) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
        if (!isJpgOrPng) {
          message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 0.25;
        if (!isLt2M) {
          message.error('Image must smaller than 250K!');
        }
       const isValid = (await checkImageWH(file, 250, 250))
        return isJpgOrPng && isLt2M &&  isValid ?true:Upload.LIST_IGNORE;
      };
    
      const checkImageWH = (file: any, width: number, height: number) => {
        return new Promise<boolean>(function (resolve, reject) {
            let filereader = new FileReader();
            filereader.onload = (e: any) => {
                let src = e.target.result;
                const image: any = new Image();
                image.onload = function () {
                    if (this.width && this.width > width || this.height && this.height > height) {
                        message.error(
                          'Please upload picture of size less than or equal to ' + width + " X "+  height
                        )
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
    }
    const getBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };
    const handleUpload = async ({ fileList }: any) => {
        setDetails({
            ...organisationDetails,
            logo: await getBase64(fileList?.[0]?.originFileObj),
        });
    };
    const handleChange = (e: any) => {
        var { name, value } = e.target;
        console.log(name, value)
        setDetails({ ...organisationDetails, [name]: value })
    }
    const handlePrimaryChange = (e: any) => {
        var {name, value} = e.target;
        setPrimary({...primary, [name]: value})
        setDetails({...organisationDetails, primaryContact: primary})
    }
    const handleSecondaryChange = (e: any) => {
        var {name, value} = e.target;
        setSecondary({...secondary, [name]: value})
        setDetails({...organisationDetails, secondaryContact: secondary})
    }
    return (
        <CompWrapper observeOn="detailsHeader" name="infoContainer">
        <div className="infoContainer">
           
            <Form id="organisationEdit"layout="vertical" onFinish={()=>onSubmit(organisationDetails)} >
                <Row gutter={30}>
                    <Col span={6}  style={{display:"flex", justifyContent:"center"}}>
                        <Upload
                            maxCount={1}
                            openFileDialogOnClick={
                                organisationDetails.logo ? false : true
                            }
                            onChange={handleUpload}
                            beforeUpload={handleBeforeUpload}
                            showUploadList={false}   
                        >
                            {organisationDetails.logo ?
                            <ProfileIcon src={organisationDetails.logo} size="large" /> 
                            : 
                            <div className="uploadContainer">
                            <div className="orgInfoLogo"><PlusOutlined /><p>Logo</p></div>
                            <span>
                            Upload Logo JPG, PNG, Max Size 250K
                            Max Resolution 250px X 250px, 
                            </span>
                            <span><img src={circle} className="circleImg"></img>
                            <img src={camera} className="cameraImg"></img>
                            </span>
                            </div>
                            }
                        </Upload>

                    </Col>
                    <Col span={18}>
                        <Row gutter={[30, 20]}>
                            <Col span={18}>
                                <InputBox
                                    labelSubName="Organization Name"
                                    name="name"
                                    initialValue={organisationDetails.name}
                                    value={organisationDetails.name}
                                    placeholder="Organization name"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter the organization name",
                                        },
                                    ]}
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col span={6}>
                                <SelectInput
                                    labelSubName="Subscription Status"
                                    name="status"
                                    initialValue={organisationDetails.status}
                                    value={organisationDetails.status}
                                    placeholder="select"
                                    className="card-dropdown with-search"
                                    bordered={true}
                                    optionValue={options}
                                />
                            </Col>
                            <Col span={12}>
                                <InputBox
                                    labelSubName="Address 1"
                                    name="address1"
                                    initialValue={organisationDetails.address1}
                                    value={organisationDetails.address1}
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter an address.",
                                        },
                                    ]}
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col span={12}>
                                <InputBox
                                    labelSubName="Address 2"
                                    name="address2"
                                    initialValue={organisationDetails.address2}
                                    value={organisationDetails.address2}
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col span={6}>
                                <InputBox
                                    labelSubName="City"
                                    name="city"
                                    initialValue={organisationDetails.city}
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
                                    initialValue={organisationDetails.state}
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
                                    initialValue={organisationDetails.country}
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
                                    name="postalCode"
                                    initialValue={organisationDetails.postalCode}
                                    value={organisationDetails.postalCode}
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
                <Row gutter={[30, 30]} className="form-container">
                    <Col span={6}>
                        <SelectInput
                            labelSubName="TimeZone"
                            name="timeZone"
                            placeholder="select"
                            initialValue={organisationDetails.timeZone}
                            value={organisationDetails.timeZone}
                            className="card-dropdown with-search"
                            bordered={true}
                            rules={[
                                {
                                    required: true,
                                    message: "Please select a timezone.",
                                },
                            ]}
                            optionValue={options}
                        />
                    </Col>
                    <Col span={18}>
                        <InputBox
                            labelSubName="Notes"
                            name="notes"
                            initialValue={organisationDetails.notes}
                            value={organisationDetails.notes}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row gutter={[30, 10]} className="form-container">
                    <Col span={24} className="contact-col">
                        Primary Contact Details
                    </Col>
                    <Col span={4}>
                        <InputBox
                        id="primary"
                            labelSubName="First Name"
                            name="firstName"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your first name",
                                },
                            ]}
                            initialValue={primary.firstName}
                            value={primary.firstName}
                            onChange={handlePrimaryChange}
                        />
                    </Col>
                    <Col span={2}>
                        <InputBox
                            labelSubName="MI"
                            name="mi"
                            initialValue={primary.mi}
                            value={primary.mi}
                            onChange={handlePrimaryChange}
                        />
                    </Col>
                    <Col span={4}>
                        <InputBox
                            labelSubName="Last Name"
                            name="lastName"
                            initialValue={primary.lastName}
                            value={primary.lastName}
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your last name",
                                },
                            ]}
                            onChange={handlePrimaryChange}
                        />
                    </Col>
                    <Col span={4}>
                        <InputBox
                            labelSubName="Contact"
                            name="contactNo"
                            initialValue={primary.contactNo}
                            value={primary.contactNo}
                            onChange={handlePrimaryChange}
                        />
                    </Col>
                    <Col span={4}>
                        <InputBox
                            labelSubName="Mobile no"
                            name="mobileNo"
                            initialValue={primary.mobileNo}
                            value={primary.mobileNo}
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your mobile number",
                                },
                            ]}
                            onChange={handlePrimaryChange}
                        />
                    </Col>
                    <Col span={6}>
                        <InputBox
                            labelSubName="Email Address"
                            name="email"
                            initialValue={primary.email}
                            value={primary.email}
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your email address",
                                },
                            ]}
                            onChange={handlePrimaryChange}
                        />
                    </Col>
                </Row>
                <Row gutter={[30, 10]} className="form-container">
                    <Col span={24} className="contact-col">
                        Secondary Contact Details
                    </Col>
                    <Col span={4}>
                        <InputBox
                        id="secondary"
                            labelSubName="First Name"
                            name="firstName2"
                            initialValue={secondary.firstName2}
                            value={secondary.firstName2}
                            onChange={handleSecondaryChange}
                        />
                    </Col>
                    <Col span={2}>
                        <InputBox
                            labelSubName="MI"
                            name="mi2"
                            value={secondary.mi2}
                            initialValue={secondary.mi2}
                            rules={[
                                {
                                    required: false,
                                    message: "Please enter your zip/postal code",
                                },
                            ]}
                            onChange={handleSecondaryChange}
                        />
                    </Col>
                    <Col span={4}>
                        <InputBox
                            labelSubName="Last Name"
                            name="lastName2"
                            initialValue={secondary.lastName2}
                            value={secondary.lastName2}
                            onChange={handleSecondaryChange}
                        />
                    </Col>
                    <Col span={4}>
                        <InputBox
                            labelSubName="Contact"
                            name="contactNo"
                            initialValue={secondary.contactNo2}
                            value={secondary.contactNo2}
                            onChange={handleSecondaryChange}
                        />
                    </Col>
                    <Col span={4}>
                        <InputBox
                            labelSubName="Mobile no"
                            name="mobileNo2"
                            initialValue={secondary.mobileNo2}
                            value={secondary.mobileNo2}
                            onChange={handleSecondaryChange}
                        />
                    </Col>
                    <Col span={6}>
                        <InputBox
                            labelSubName="Email Address"
                            name="email2"
                            initialValue={secondary.email2}
                            value={secondary.email2}
                            onChange={handleSecondaryChange}
                        />
                    </Col>
                </Row>
            </Form> 
            </div>
        </CompWrapper>
    )
}