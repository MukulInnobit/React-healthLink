import { Col, Row } from "antd"
import { AppRoutes } from "../../../../router/appRoutes"
import { Breadcrumbs } from "../../../stateless/common/breadCrumbs"
import "./dashboard.less"

export const Dashboard = () => {
    const dashboardPage = [
        {
            text: "Dashboard",
            link: AppRoutes.LANDING
        }
    ]
    return (
        <div>
            <Row>
                <Col>
            <Breadcrumbs breadcrumbs={dashboardPage}/>
            <span className='dashBoardPage'>Dashboard</span>
       </Col>
       </Row>
        </div>
    )

}