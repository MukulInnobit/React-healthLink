import React, { useState, useEffect } from "react";
import { Row, Col, Form } from 'antd';
import { Card } from 'antd';
import Button from "../../../stateless/common/button";
import InputBox from "../../../stateless/common/inputBox";
import AuthLayout from "../../../stateless/layouts/authLayout";
import {resend} from "../../../../images"
import "./forgetPassword.less"

const ForgetPassword = (props: any) => {
    const [entries, setEntries] = useState({
        email: ""
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
                    <Card className="Card change" bordered={false}>
                        <p className="forget"><b>Forgot Password</b></p>
                        <p className="text2">Enter the email address associated with your account,
                            and we will email you a link to reset your password.</p>
                        <Form onFinish={handleFormSubmit} layout="vertical">
                            <Row className="email">

                                <Col span={24} >
                                    <Row>
                                        <Col span={24}>
                                            <InputBox
                                                labelSubName="Email Address"
                                                placeholder="Email Address"
                                                name='Email Address'
                                                rules={[{ required: true, message: "Please enter the Email Address" }]}
                                                value={entries.email}
                                                onChange={handleChange}>
                                            </InputBox>

                                        </Col>
                                    </Row>
                                </Col>

                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Button type="primary" htmlType="submit"><img className="icon" src={resend} />Send reset link</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </AuthLayout>

    )


}


export default ForgetPassword;