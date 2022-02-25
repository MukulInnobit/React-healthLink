import { Card, Col, Dropdown, Menu, Row } from "antd";
import React, {useState} from "react";
import "./organisationCard.less";
import { activeIcon, messageIcon, orgNameIcon, phoneIcon } from "../../../../images";
import { EllipsisOutlined } from "@ant-design/icons";
import { AppRoutes } from "../../../../router/appRoutes";
import { useHistory } from "react-router-dom";
import ProfileIcon from "../../common/profileThumbnail";
import WarnModal from "../../common/warnModal";
import { ModalCallBackTypes, ModalPrimaryMessages, ModalSecondaryMessages, ModalType } from "../../../../constants/enums";
import { replaceAll } from "../../../../../utility/appUtil";

const OrganisationCard = (props: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();
  const onCardClick = () => {
    history.push(AppRoutes.ORGANIZATIONDETAILS);
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
  
          <Card className="orgCardMatrix" >
            <Row justify="end" className="orgRow1">
              <Col>
              <div className="orgDropDown">
                  <Dropdown overlay={menu} trigger={["click"]}>
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      <EllipsisOutlined />
                    </a>
                  </Dropdown>
                </div>
              </Col>
            </Row>
            <Row className="orgRow2" onClick={onCardClick}>
              <Col span={5}>
                <div className="orgIconSlicing">
                  <ProfileIcon name={props.el.name} size="medium" />

                </div>
              </Col>
              <Col span={16}>
                <div className="orgNameSlicing">{props.el.name}</div>
                <div className="orgStateSlicing">{props.el.city}</div>
                <div className="orgStateSlicing">{props.el.primaryContact.firstName} {props.el.primaryContact.lastName}</div>
                <div className="orgStateSlicing"><img src={phoneIcon} />{props.el.primaryContact.mobileNo} </div>
                <div className="orgStateSlicing"><img src={messageIcon}/>{props.el.primaryContact.email} </div>
              </Col>
              <Col span={3}>
                <div className="orgStatusSlicing">
                  <img src={activeIcon} className="activeAccount" alt="status" />
                  {props.el.status}
                </div>
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
export default OrganisationCard;
