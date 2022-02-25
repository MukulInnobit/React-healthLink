import React, { useState } from 'react'
import { Col, Layout, Row } from 'antd'
import { collapseIcon } from '../../../images'
import './mainLayoutStyles.less'
import { SideBar } from '../common/sideNav'
import { AppHeader } from '../common/mainHeader'

const { Header, Sider, Content } = Layout
const MainLayout = (props: any) => {
  const { children } = props;
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout className="mainLayout">
      <Sider
        className="mainSidebar"
        collapsible
        trigger={null}
        collapsed={collapsed}
        collapsedWidth={"5.62%"}
        width={"13.89%"}
      >
        <SideBar collapsed={collapsed} />
      </Sider>
      <Layout>
        <Header className="mainHeader" >
          <Row className="flex-header">
            <Col span={1}>
              <img src={collapseIcon} className="collapseIcon" onClick={() => { setCollapsed(!collapsed) }}/>
            </Col>
          <Col span={23}>
            <AppHeader/>
          </Col>
          </Row>
        </Header>
        <Content className="contentHolder">
        
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout