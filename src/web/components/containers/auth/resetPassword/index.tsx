import React, { useState, useEffect } from "react";
import { Row, Col, Form } from 'antd';
import { Card } from 'antd';
import Button from "../../../stateless/common/button";
import AuthLayout from "../../../stateless/layouts/authLayout";
import {reset} from "../../../../images"
import "./resetPassword.less"

const ResetPassword = (props: any) => {
    const [entries, setEntries] = useState({});
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
                    <Card className="Card resetLink" bordered={false}>
                        <p className="reset"><b>Forgot Password</b></p>
                        <p className="text">You have just requested to change  a password for your Healthlink account.
                            Please click the link below to reset your password.</p>
                        <Form onFinish={handleFormSubmit} >
                            <Row>
                                <Col span={24}>
                                    <Button type="primary" htmlType="submit"><img className="icon" src={reset} />Send reset link</Button>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col span={17}>
                                    <p className="note">If you did not request a new password, please ingnore this email.</p>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </AuthLayout>

    )


}


export default ResetPassword;