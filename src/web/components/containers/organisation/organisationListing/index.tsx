import { Col, Grid, Row } from "antd";
import React, { useEffect, useState } from "react";
import { navbarIcon, up, vector } from "../../../../images";
import OrganisationRowCard from "../../../stateless/organisation/organisationCard/OrganisationRowCard";
import organisationCard from "../../../stateless/organisation/organisationCard/organisationCard";
import { DummyData } from "./dummyData";
import "./organisationList.less";
import { SearchBar } from "./search";
import Button from "../../../stateless/common/button";
import { funnel } from "../../../../images";
import ReloadOutlined from "@ant-design/icons";
import { resetIcon } from "../../../../images";
import { addIcon } from "../../../../images";
import OrganisationCard from "../../../stateless/organisation/organisationCard/organisationCard";
import { AppRoutes } from "../../../../router/appRoutes";
import { Breadcrumbs } from "../../../stateless/common/breadCrumbs";
import { useHistory } from "react-router-dom";
import { CompWrapper } from "../../../stateless/common/contentWrapper";

const OrganisationList = () => {
  const [actBtn, setActBtn] = useState(false);
  const [dummyData, setDummyData] = useState(DummyData);
  const [listView, setListView] = useState(true);
  console.log(dummyData, "dsdsfdsf");

  const handleActiveInActiveBtn = () => {
    if (!actBtn) {
      setDummyData(DummyData.filter((i) => i.status == "Active"));
      setActBtn(true);
    } else {
      setDummyData(DummyData.filter((i) => i.status == "InActive"));
      setActBtn(false);
    }
  };
  const history = useHistory();
  const addingOrganisation = () => {
    history.push(AppRoutes.ADDORGANIZATION)
  }
  
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

  const columnCard = () => {
    return (
      <div className="container orgMapCol">
        <Row gutter={[16, 8]}>
          {dummyData.map((el, id) => (
            <Col sm={16} md={12} lg={10} xl={8} key={id}>
              <OrganisationCard el={el} />
            </Col>
          ))}
        </Row>
      </div>
    );
  };

  const rowCard = () => {
    return (
      <div className="container orgMap">
        {dummyData.map((el, id) => (
          <OrganisationRowCard el={el} key={id} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <Row gutter={16} className="brdCrumbOrg">
        <Col md={6} lg={8} xl={10}>
          <Breadcrumbs breadcrumbs={breadCrumbs} />
          <span className="brdOrg">ORGANIZATIONS</span>
          <span className='dummyDataLength'>(<span className='dumDataArr'>{dummyData.length}</span>)</span>

        </Col>
        <Col md={3} lg={4} xl={4} style={{ float: "left" }}>
          <SearchBar />
        </Col>
        {actBtn ? (
          <Col md={4} lg={3} xl={3}>
            <Button
              type="primary"
              className="activeBtn"
              onClick={handleActiveInActiveBtn}
            >
              <img src={funnel} className="funnelImage" />
              inactive
              <img src={up} className="upImage" />
            </Button>
          </Col>
        ) : (
          <Col md={4} lg={3} xl={3}>
            <Button
              type="secondary"
              className="activeBtn"
              onClick={handleActiveInActiveBtn}
            >
              <img src={funnel} className="funnelImage" />
              active
              <img src={up} className="upImage" />
            </Button>
          </Col>
        )}
        <Col md={4} lg={3} xl={2}>
          <Button
            type="primary"
            onClick={() => {
              setDummyData(DummyData);
            }}
            className="resetBtn"
          >
            <img src={resetIcon} className="resetImg"></img> Reset
          </Button>
        </Col>
        <Col md={6} lg={6} xl={5}>
          <Button type="primary" className="addOrgBtn" onClick={addingOrganisation}>
            <img src={addIcon} className="addIconImage" />
            add organisation
          </Button>
        </Col>
      </Row>
      <div className="tabLine">
        {listView ? (
          <Row>
            <Col md={5} lg={4} xl={5}>
              <div className="orgListHead">
                ORGANIZATION NAME
                <img src={up} className="upImage"></img>
              </div>
            </Col>
            <Col md={3} lg={4} xl={3}>
              <div className="orgListHead">CITY, STATE</div>
            </Col>
            <Col md={3} lg={3} xl={3}>
              <div className="orgListHead">CONTACT NAME</div>
            </Col>
            <Col md={3} lg={4} xl={3}>
              <div className="orgListHead">CONTACT NO</div>
            </Col>
            <Col md={4} lg={3} xl={4}>
              <div className="orgListHead">EMAIL ADDRESS</div>
            </Col>
            <Col md={3} lg={3} xl={4}>
              <div className="orgListHead">SUBSCRIPTON STATUS</div>
            </Col>
            <Col md={3} lg={3} xl={2}>
              <img
                src={listView ? vector : navbarIcon}
                onClick={() =>
                  listView ? setListView(false) : setListView(true)
                }
                className="vectorClass"
                alt="status"
              />
            </Col>
          </Row>
        ) : (
          <Row>
            <Col span={23} />
            <Col md={23} lg={23} xl={23} className="listing">
              <img
                src={listView ? vector : navbarIcon}
                onClick={() =>
                  listView ? setListView(false) : setListView(true)
                }
                className="vectorClass"
                alt="status"
              />
            </Col>
          </Row>
        )}
       
      </div>
      <CompWrapper observeOn="brdCrumbOrg">
      {listView ? rowCard() : columnCard()}
      </CompWrapper>
    </div>
  );
};

export default OrganisationList;
