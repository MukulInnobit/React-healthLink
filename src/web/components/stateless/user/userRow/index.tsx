import { Row, Col, Dropdown, Menu, Card } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons'
import "./userList.less"
import ProfileIcon from "../../common/profileThumbnail";
import { active, bin, resetPass, inactive, invited } from "../../../../images"
import { AppRoutes } from '../../../../router/appRoutes';
import { useHistory } from 'react-router-dom';

const UserRow = (props: any) => {
    const history = useHistory();
    const onListClick = () => {
        history.push(AppRoutes.USERDETAILSFORM)
    }
    const { dataUser } = props;
    const menu = (
        <Menu className="menuList">
            <Menu.Item key="0">
                <img src={resetPass} className="resetPass" alt="status" />Reset Password
            </Menu.Item>
            {dataUser.status == "Active" ?
                <Menu.Item key="1">
                    <img src={inactive} className="red" alt="status" />Deactivate
                </Menu.Item>
                :
                <Menu.Item key="1">
                    <img src={active} className="red" alt="status" />Activate
                </Menu.Item>
            }

            <Menu.Item key="2">
                <img src={bin} className="resetPass" alt="status" />Delete
            </Menu.Item>
            <Menu.Divider />
        </Menu>
    );


    return (
        <div className='userListContainer'>
            <Card className="userListCard">
                <Row >
                    <Col span={23} onClick={onListClick} className='userRow1'>
                        <Row className="userCard" >
                            <Col md={2} lg={2} xl={2} className="userProfile">
                                {/*  */}
                                <ProfileIcon name={dataUser.userName} />
                            </Col>
                            <Col md={4} lg={3} xl={4} className="userName">
                                <div className="orgNameContentSlicing">{dataUser.userName}</div>
                            </Col>
                            <Col md={3} lg={2} xl={2} className="userStatus">

                                {dataUser.status == "Active" ?
                                    <img src={active} className="Green-button" alt="status" />
                                    :
                                    dataUser.status == "Inactive" ?
                                        <img src={inactive} className="Green-button" alt="status" />
                                        :
                                        <img src={invited} className="Green-button" alt="status" />

                                }
                                {dataUser.status}
                            </Col>
                            <Col md={2} lg={3} xl={4} className="userProfile">
                                {dataUser.city}

                            </Col>
                            <Col md={7} lg={5} xl={5} className="userProfile">

                                {dataUser.email}

                            </Col>
                            <Col md={3} lg={3} xl={3} className="userContactNo">

                                {dataUser.contactNo}

                            </Col>
                            <Col md={2} lg={3} xl={2} className="userRole">

                                {dataUser.role}

                            </Col>
                            </Row>
                            </Col>
                            <Col span={1} className="userButton userRow2">
                                <Dropdown overlayClassName='menuList' overlay={menu} trigger={["click"]}>
                                    <a
                                        className="ant-dropdown-link"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <EllipsisOutlined />
                                    </a>
                                </Dropdown>

                            </Col>
                        </Row>
                    </Card>
                </div>
                )
}

                export default UserRow;
