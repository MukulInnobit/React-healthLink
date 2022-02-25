import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import { hlFull } from '../../../images';
import "./authLayout.less"
const { Header, Content, Footer } = Layout;

const AuthLayout = (props: any) => {
    const { children } = props;

    return (
        <div className="auth-layout">
            <Row className="auth-header">
                <Col span={6}>
                    <img className="logo" src={hlFull} />
                </Col>
            </Row>
            <Row className="auth-content">
                <Col span={24}>
                    {children}
                </Col>
            </Row> 
            <Row className="auth-footer" justify="center">
                <Col span={8}>
                    ©2022 HealthLink. All Right Reserved
                </Col>
            </Row>
        </div>

    )
}
export default AuthLayout

