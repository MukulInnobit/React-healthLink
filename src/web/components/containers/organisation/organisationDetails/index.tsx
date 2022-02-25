import { Row, Col, Tabs } from "antd";
import { OrgansationInfo } from "../../../stateless/organisation/details";
import Button from "../.././../stateless/common/button";
import "./organizationDetails.less";
import OrgDetails from "./../../../stateless/organisation/summary";
import { org } from "./dumData";
import { useState } from "react";
import { add, filter, redo, Search, up, deleteIcon } from "../../../../images";
import { Breadcrumbs } from "../../../stateless/common/breadCrumbs";
import { AppRoutes } from "../../../../router/appRoutes";
import DumData from "../../user/list/replica";
import AdminUserList from "../../../stateless/organisation/admin";
import { OrganizaionCentres } from "../../../stateless/organisation/centres";
import WarnModal from "../../../stateless/common/warnModal";
import { ModalCallBackTypes, ModalPrimaryMessages, ModalSecondaryMessages, ModalType } from "../../../../constants/enums";
import { replaceAll } from "../../../../../utility/appUtil";

export const OrganisationDetails = () => {
  const { TabPane } = Tabs;
  const [selectedTab, setSelectedTab] = useState("1");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDelete = () => {
    setIsModalVisible(false);
  };

  const breadCrumbs = [
    {
      text: "Dashboard",
      link: AppRoutes.LANDING,
    },
    {
      text: "Organization",
      link: AppRoutes.ORGANIZATIONLIST,
    },
  ];
  const onTabChange = (key: any) => {
    setSelectedTab(key);
  };
  const onOrganisationUpdateSubmit = (updatedOrg: any) => {
    console.log("submit ted", updatedOrg);
  };

  const getHeaderContent = () => {
    switch (selectedTab) {
      case "1": {
        return (
          <Col span={4}>
            <Button type="primary" onClick={() => setSelectedTab("2")}>
              Edit
            </Button>
          </Col>
        );
      }
      case "2": {
        return (
          <>
            <Col md={11} lg={10} xl={8}>
              <Button type="primary" onClick={showModal}>
                <img className="searchIcon" src={deleteIcon} />
                Delete Organization
              </Button>
            </Col>
            <Col md={8} lg={6} xl={6}>
              <Button type="primary" htmlType="submit" form="organisationEdit">
                Save Changes
              </Button>
            </Col>
          </>
        );
      }
      case "3": {
        return (
          <Col span={5}>
            <Button type="primary" htmlType="submit" form="centreForm">
              Save Changes
            </Button>
          </Col>
        );
      }
      case "4": {
        return (
          <>
            <Col md={4} lg={2} xl={2}>
              <Button type="primary" htmlType="search">
                <img className="searchIcon" src={Search} />
              </Button>
            </Col>
            <Col md={8} lg={6} xl={5}>
              <Button className="filter" type="secondary" htmlType="search">
                <img className="filterIcon" src={filter} />
                ACTIVE
                <img className="upIcon" src={up} />
              </Button>
            </Col>
            <Col md={8} lg={5} xl={4}>
              <Button type="primary" htmlType="search">
                <img className="redoIcon" src={redo} />
                RESET
              </Button>
            </Col>
            <Col md={8} lg={7} xl={6}>
              <Button className="addUser" type="primary" htmlType="search">
                <img className="addIcon" src={add} />
                Add Admin User
              </Button>
            </Col>
          </>
        );
      }
    }
  };
  return (
    <div>
      <Row className="detailsHeader" style={{ alignItems: "center" }}>
        <Col span={6}>
          <Breadcrumbs breadcrumbs={breadCrumbs} />
          <p className="orgName">Shady Grove Hospital</p>
        </Col>
        <Col span={18}>
          <Row justify="end" gutter={[20, 10]}>
            {getHeaderContent()}
          </Row>
        </Col>
      </Row>
      <Row className="containerRow">
        <Tabs
          className="organization-tabs"
          activeKey={selectedTab}
          onChange={onTabChange}
        >
          <TabPane tab="Summary" key="1">
            <OrgDetails organization={org} onClick={setSelectedTab} />
          </TabPane>
          <TabPane tab="Org Details" key="2">
            <OrgansationInfo
              organisation={org}
              onSubmit={onOrganisationUpdateSubmit}
            />
          </TabPane>
          <TabPane tab="Centers" key="3">
          <OrganizaionCentres />
          </TabPane>
          <TabPane tab="Admin Users" key="4">
            <AdminUserList users={DumData} />
          </TabPane>
          <TabPane tab="Audit Logs" key="5"></TabPane>
          <TabPane tab="Biometric Devices" key="6"></TabPane>
          <TabPane tab="HIE" key="7"></TabPane>
        </Tabs>
      </Row>
      <WarnModal 
          type={ModalType.WARN} 
          isModalVisible={isModalVisible} 
          primaryText={ModalPrimaryMessages.DELETE_ORGANIZATION} 
          secondaryText={replaceAll(/\{0\}/gi, ModalSecondaryMessages.DELETE_ORGANIZATION, org.name)} 
          cancelButton={ModalCallBackTypes.CANCEL} confirmButton={ModalCallBackTypes.DELETE} 
          cancelCallback={handleCancel} 
          confirmCallback={handleDelete} 
        />
    </div>
  );
};
