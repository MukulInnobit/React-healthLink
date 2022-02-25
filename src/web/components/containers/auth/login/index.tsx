import React, { useState, useEffect } from "react";
import { Row, Col, Form } from 'antd';
import { Card } from 'antd';
import "./login.less"
import Button from "../../../stateless/common/button";
import InputBox from "../../../stateless/common/inputBox";
import {loginIcon} from "../../../../images"
import AuthLayout from "../../../stateless/layouts/authLayout";
import InputPassword from "../../../stateless/common/inputPassword";
import { AppRoutes } from "../../../../router/appRoutes";

const Login = (props: any) => {
    const [entries, setEntries] = useState({
        userName: "",
        password: ""
    });
    const handleChange = (Event: any) => {
        setEntries({
            ...entries,
            [Event.target.name]: Event.target.value,
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
                    <Card className="Card loginPage" bordered={false}>
                        <p className="para"><b>Welcome to HealthLink</b></p>
                        <p className="para2">Sign in to continue...</p>
                        <Form onFinish={handleFormSubmit} layout="vertical">
                        <Row className="user">
                            <Col span={24} >
                                <Row>
                                    <Col span={24}>
                                        <InputBox
                                            labelSubName="Username"
                                            placeholder="username"
                                            name='userName'
                                            rules={[{required: true, message:"Please enter your username"}]}
                                            value={entries.userName}
                                            onChange={handleChange}>
                                        </InputBox>

                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                        <Row className="pass">
                            <Col span={24}>
        
                                <Row>
                                    <Col span={24}>
                                        <InputPassword
                                            labelSubName="Password"
                                            placeholder="password"
                                            name='password'
                                            rules={[{required: true, message:"Please enter your password"}]}
                                            value={entries.password}
                                            onChange={handleChange}>
                                        </InputPassword>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                        <Row>
                            <Col span={24}>
                                <Button type="primary" htmlType="submit"><img className="icon" src={loginIcon}/> Login</Button>
                            </Col> 
                        </Row>
                        <Row>
                            <Col span={24}>
                        <p className="forgotLink"><u><a href={AppRoutes.FORGETPASSWORD}>Forgot Password?</a><br/></u></p>
                        </Col>
                        <Col span={24}>
                        <p className="help">By clicking login, you agree to our <u><a  href="">Terms of Service</a></u> and have read and
                            acknowledge our <u><a href="">Privacy Policy</a></u></p>
                            </Col>
                        </Row> 
                        </Form>   
                    </Card>
                </Col>
            </Row>
    
        </AuthLayout>

    )


}


export default Login;