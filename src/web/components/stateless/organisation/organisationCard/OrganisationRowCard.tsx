import { Card, Col, Dropdown, Row } from "antd";
import React, { useState } from "react";
import { Menu } from "antd";
import "./organisationRowCard.less";
import { orgNameIcon, activeIcon } from "../../../../images";
import { EllipsisOutlined } from '@ant-design/icons'
import { AppRoutes } from "../../../../router/appRoutes";
import { useHistory } from "react-router-dom";
import ProfileIcon from "../../common/profileThumbnail";
import WarnModal from "../../common/warnModal";
import { ModalCallBackTypes, ModalPrimaryMessages, ModalSecondaryMessages, ModalType } from "../../../../constants/enums";
import { replaceAll } from "../../../../../utility/appUtil";

const OrganisationRowCard = (props: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();
  const onRowClick = () => {
    history.push(AppRoutes.ORGANIZATIONDETAILS)
  }
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDelete = () => {
    setIsModalVisible(false);
  };
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="#">Deactivate</a>
      </Menu.Item>
      <Menu.Item key="1" onClick={showModal}>
        Delete
      </Menu.Item>
      <Menu.Divider />
    </Menu>
  );
  return (
    <div>
      <Card className="organisationListCard" >
        <Row >
          <Col span={23} onClick={onRowClick} className="orgColumn1">
            <Row className="orgCard">
              <Col md={1} lg={2} xl={1} className="organisationLogoPic">
              <ProfileIcon name={props.el.name} size="medium" />
              </Col>
              <Col md={4} lg={3} xl={4} className="organisationName">
                <div className="orgNameContentSlicing">{props.el.name}</div>
              </Col>
              <Col md={3} lg={3} xl={3} className="organisationContactName">
                <div className="orgContactNameSlicing">{props.el.city}</div>
              </Col>
              <Col md={4} lg={4} xl={4} className="organisationContactNo">
                <div className="orgContactNameSlicing">
                  {props.el.primaryContact.firstName} {props.el.primaryContact.lastName}
                </div>
              </Col>
              <Col md={4} lg={4} xl={3} className="organisationContactNoo">
                <div className="orgContactNameSlicing">
                  {props.el.primaryContact.mobileNo}
                </div>
              </Col>
              <Col md={4} lg={3} xl={4} className="organisationEmail">
                <div className="orgContactNameSlicing">
                  {props.el.primaryContact.email}
                </div>
              </Col>
              <Col md={4} lg={5} xl={5} className="organisationStatus">
                <div className="orgContactNameSlicing">
                  <img src={activeIcon} className="activeAccount" alt="status" />
                  {props.el.status}
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={1} className="orgColumn2" >
            <Dropdown overlayClassName="organisationButton" overlay={menu} trigger={["click"]}>
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
      <WarnModal 
          type={ModalType.WARN} 
          isModalVisible={isModalVisible} 
          primaryText={ModalPrimaryMessages.DELETE_ORGANIZATION} 
          secondaryText={replaceAll(/\{0\}/gi, ModalSecondaryMessages.DELETE_ORGANIZATION, props.el.name)} 
          cancelButton={ModalCallBackTypes.CANCEL} confirmButton={ModalCallBackTypes.DELETE} 
          cancelCallback={handleCancel} 
          confirmCallback={handleDelete} 
        />     
      </div>
      );
};

      export default OrganisationRowCard