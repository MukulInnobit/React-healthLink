import React, { useState, useEffect } from "react";
import { Row, Col, Form } from 'antd';
import { Card } from 'antd';
import Button from "../../../stateless/common/button";
import AuthLayout from "../../../stateless/layouts/authLayout";
import {savePass} from "../../../../images"
import "./createPassword.less"
import InputPassword from "../../../stateless/common/inputPassword";

const CreatePassword = (props: any) => {
    const [entries, setEntries] = useState({
        newPasssword: "",
        confirmPassword: ""
    });
    const handleChange = (event: any) => {
        setEntries({
            ...entries,
            [event.target.name]: event.target.value,
        })
    }
    const handleFormSubmit = (event: any) => {
        event.preventDefault();
        console.log(entries);

    }
    return (
        <AuthLayout>
            <Row justify="center">
                <Col xs={20} sm={16} md={12} lg={8} xl={8}>
                    <Card className="Card new" bordered={false}>
                        <p className="create"><b>Create Password</b></p>
                        <p className="read">Password for your account has been reset.<br/>
                        Please create a new password to login.</p>
                        <Form onFinish={handleFormSubmit} layout="vertical">
                        <Row className="newPass">

                            <Col span={24} >
                                <Row>
                                    <Col span={24}>
                                        <InputPassword
                                            labelSubName="New Password"
                                            placeholder="password"
                                            name='password'
                                            rules={[{required: true, message:"Please enter the password"}]}
                                            value={entries.newPasssword}
                                            onChange={handleChange}>
                                        </InputPassword>

                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                        <Row className="pass2">
                            <Col span={24}>
        
                                <Row>
                                    <Col span={24}>
                                        <InputPassword
                                            labelSubName="Confirm New Password"
                                            placeholder="password"
                                            name='password'
                                            rules={[{required: true, message:"Please enter the password"}]}
                                            value={entries.confirmPassword}
                                            onChange={handleChange}>
                                        </InputPassword>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                        <Row>
                            <Col span={24}>
                                <Button type="primary" htmlType="submit"><img className="icon" src={savePass}/>Save New Password</Button>
                            </Col> 
                        </Row> 
                        </Form>   
                    </Card>
                </Col>
            </Row>
            </AuthLayout>

    )


}


export default CreatePassword;