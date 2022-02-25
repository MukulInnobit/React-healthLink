import { Row, Col } from 'antd';
import { Card } from 'antd';
import "./orgDetails.less"
import { active } from "../../../../images"
import { pencil } from "../../../../images"
import ProfileIcon from '../../common/profileThumbnail';
import { mail } from '../../../../images';
import { call } from "../../../../images"
import { location } from "../../../../images"
import { check } from "../../../../images"
import { family } from '../../../../images';
import { provider } from "../../../../images"
import { patients } from "../../../../images"
import { show } from "../../../../images"
import CustomTooltip from '../../common/toolTip';
import { useState } from 'react';
import { CompWrapper } from '../../common/contentWrapper';


const OrgDetails = (props: any) => {
  const { organization, onClick } = props;
  return (
    <CompWrapper observeOn="detailsHeader" name="summary-container">
      <div className='summaryContainer'>
      <Row gutter={20} className="summary-container">
        <Col md={12} lg={10} xl={10}>
          <Card className='summaryCard' bordered={false}>
            <Row>
              <Col md={23} lg={22} xl={22}><span className='summary Text'>
                SUBSCRIPTION STATUS
              </span>
                <p className='summary Status'><img className='green-button' src={active} /> Active</p>
              </Col>
              <Col md={1} lg={2} xl={2}>
                <img className='pencil' onClick={() => onClick("2")} src={pencil} />
              </Col>
            </Row>
            <Row justify='center'>
              <Col >
                <ProfileIcon name={organization.name} size="large" />
              </Col>
            </Row>
            <Row justify='center'>
              <Col className="summary organName" md={24} lg={24} xl={24}>
                <span>{organization.name}</span>
              </Col>
            </Row>
            <Row>
              <Col md={24} lg={24} xl={24}>
                <span className='summary primeContact'>Primary Contact Details</span>
              </Col>
            </Row>
            <Row>
              <Col md={24} lg={24} xl={24}>
                <span className='summary primeName'>{organization.primaryContact.firstName} {organization.primaryContact.lastName}</span>
              </Col>
            </Row>
            <Row>
              <Col md={24} lg={24} xl={24}>
                <span className='summary primeDetails'><img className='emailIcon' src={mail} />{organization.primaryContact.email}</span>
              </Col>
            </Row>
            <Row>
              <Col md={24} lg={24} xl={24}>
                <span className='summary primeDetails'><img className='emailIcon' src={call} />{organization.primaryContact.mobileNo}</span>
              </Col>
            </Row>
            <Row>
              <Col md={24} lg={24} xl={24}>
                <span className='summary primeContact'>SECONDARY Contact Details</span>
              </Col>
            </Row>
            <Row>
              <Col md={24} lg={24} xl={24}>
                <span className='summary primeName'>{organization.secondaryContact.firstName} {organization.secondaryContact.lastName}</span>
              </Col>
            </Row>
            <Row>
              <Col md={24} lg={24} xl={24}>
                <span className='summary primeDetails'><img className='emailIcon' src={mail} />{organization.secondaryContact.email}</span>
              </Col>
            </Row>
            <Row>
              <Col md={24} lg={24} xl={24}>
                <span className='summary primeDetails'><img className='emailIcon' src={call} />{organization.secondaryContact.mobileNo}</span>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* right side card */}

        <Col md={12} lg={14} xl={14}>
          <Card className='summaryCard right'>
            <Row gutter={[30, 30]}>
              <Col md={24} lg={12} xl={12}>
                <Card className='detailCard'>
                  <Row>
                    <Col md={5} lg={8} xl={7}>
                      <div className='iconCircle'>
                        <img className='summaryIcon' src={location} />
                      </div>
                    </Col>
                    <Col md={5} lg={12} xl={12} className='summary CardContent'>
                      <span className='summary CardDetails'>CENTERS</span>
                      <span className='summary Count'>100</span>
                    </Col>
                    <Col md={10} lg={4} xl={5} className='showButton'>
                      <CustomTooltip content="show" title="Lorem Ipsum is simply dummy text of the printing." color="#ffffff">
                        <img className='showIcon' src={show} />
                      </CustomTooltip>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md={24} lg={12} xl={12}>
                <Card className='detailCard'>
                  <Row >
                    <Col md={5} lg={8} xl={7}>
                      <div className='iconCircle'>
                        <img className='summaryIcon' src={check} />
                      </div>
                    </Col>
                    <Col md={5} lg={12} xl={12} className='summary CardContent'>
                      <span className='summary CardDetails'>Admin users</span>
                      <span className='summary Count'>100</span>
                    </Col>
                    <Col md={10} lg={4} xl={5} className='showButton'>
                      <CustomTooltip content="show" title="Lorem Ipsum is simply dummy text of the printing." color="#ffffff">
                        <img className='showIcon' src={show} />
                      </CustomTooltip>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md={24} lg={12} xl={12}>
                <Card className='detailCard'>
                  <Row>
                    <Col md={5} lg={8} xl={7}>
                      <div className='iconCircle'>
                        <img className='summaryIcon' src={provider} />
                      </div>
                    </Col>
                    <Col md={5} lg={12} xl={12} className='summary CardContent'>
                      <span className='summary CardDetails'>Providers</span>
                      <span className='summary Count'>100</span>
                    </Col>
                    <Col md={10} lg={4} xl={5} className='showButton'>
                      <CustomTooltip content="show" title="Lorem Ipsum is simply dummy text of the printing." color="#ffffff">
                        <img className='showIcon' src={show} />
                      </CustomTooltip>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md={24} lg={12} xl={12}>
                <Card className='detailCard'>
                  <Row>
                    <Col md={5} lg={8} xl={7}>
                      <div className='iconCircle'>
                        <img className='summaryIcon' src={patients} />
                      </div>
                    </Col>
                    <Col md={5} lg={12} xl={12} className='summary CardContent'>
                      <span className='summary CardDetails'>Patients</span>
                      <span className='summary Count'>100</span>
                    </Col>
                    <Col md={10} lg={4} xl={5} className='showButton'>
                      <CustomTooltip content="show" title="Lorem Ipsum is simply dummy text of the printing." color="#ffffff">
                        <img className='showIcon' src={show} />
                      </CustomTooltip>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md={24} lg={12} xl={12}>
                <Card className='detailCard'>
                  <Row>
                    <Col md={5} lg={8} xl={7}>
                      <div className='iconCircle'>
                        <img className='summaryIcon' src={family} />
                      </div>
                    </Col>
                    <Col md={5} lg={12} xl={12} className='summary CardContent'>
                      <span className='summary CardDetails'>Family</span>
                      <span className='summary Count'>100</span>
                    </Col>
                    <Col md={10} lg={4} xl={5} className='showButton'>
                      <CustomTooltip content="show" title="Lorem Ipsum is simply dummy text of the printing." color="#ffffff">
                        <img className='showIcon' src={show} />
                      </CustomTooltip>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
            <Row className='NotesRow'>
              <Col span={24}>
                <span className='summary Notes'>Notes</span>
              </Col>
              <Col>
                <span>{organization.notes}</span>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      </div>
    </CompWrapper>
  )



}

export default OrgDetails;