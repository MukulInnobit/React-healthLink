import { Row, Col, Menu, Dropdown } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { downIcon, notifcationIcon } from "../../../../images";
import "./mainHeader.less"


export const AppHeader = (props: any) => {
    const userMenu = () => {
        return (
            <Menu>
                <Menu.Item key="1">
                    Account Settings
                </Menu.Item>
                <Menu.Item key="2">
                    Sign Out
                </Menu.Item>
            </Menu>
        )
    }
    const getUserMenu = () => {
        return (
            <Dropdown overlay={userMenu} trigger={["click"]} placement="bottomRight">
                <div className="userMenu">
                    <div>
                        <UserOutlined />
                    </div>
                    <div className="userDetails">
                        <p className="header-userName">
                            Paul Merenbloom
                            <img src={downIcon} style={{ paddingLeft: "5px" }} />
                        </p>
                        <p className="header-userRole">
                            Super Admin
                        </p>
                    </div>
                </div>
            </Dropdown>
        )
    }
    return (
        <Row style={{ textAlign: "center" }}>
            <Col span={24}>
                <Row justify="end">
                    <Col sm={4} md={3} lg={2} xl={2}>
                        <img src={notifcationIcon} />
                    </Col>
                    <Col sm={8} md={7} lg={6} xl={5} className="userMenuCol">
                        {getUserMenu()}
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}