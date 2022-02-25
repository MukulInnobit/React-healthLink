import { Breadcrumbs } from '../../../stateless/common/breadCrumbs';
import { Row, Col } from 'antd';
import React, { useState } from 'react';
import UserRow from "../../../stateless/user/userRow"
import DumData from './replica';
import Button from "../../../stateless/common/button"
import "./platformUser.less"
import { redo, filter, add, up, menu} from "../../../../images"
import { useHistory } from 'react-router-dom';
import { AppRoutes } from '../../../../router/appRoutes';
import { SearchBar } from '../../organisation/organisationListing/search';
import { CompWrapper } from '../../../stateless/common/contentWrapper';


const UserList = (props: any) => {

    const [status, setStatus] = useState<boolean | null>(null);
    const history = useHistory();
    const handleClick = () => {
        history.push(AppRoutes.ADDUSER)
    }
    const onFilterSelect = () => {
        status == true ? setStatus(false) : setStatus(true)
    }

    const onReset = () => {
        setStatus(null)
    }
    const nextTab = [
        {
            text: "Dashboard",
            link: AppRoutes.LANDING
        },
        {
            text: "Healthlink Users",
            link: AppRoutes.USERLIST
        }
    ]

    return (
        <div className='listContainer'>
            <Row style={{ alignItems: "center" }} className="platformUserBrd">
                <Col span={6} >
                    <Breadcrumbs breadcrumbs={nextTab} />

                    <span className='platformUsers'>Platform Users  </span>
                    <span className='dumDataLength'>(<span className='dumDataArr'>{DumData.length}</span>)</span>

                </Col>
                <Col span={18}>
                    <Row justify="end" gutter={[20, 10]}>
                        <Col md={12} lg={9} xl={10} >

                         <SearchBar />
                        </Col>
                        <Col md={12} lg={5} xl={4}>

                            <Button className="filter" type="secondary" htmlType='search' onClick={onFilterSelect}><img className='filterIcon' src={filter} />ACTIVE<img className='upIcon' src={up} /></Button>
                        </Col>
                        <Col md={8} lg={4} xl={4}>

                            <Button type="primary" className="resetButton" htmlType='search' onClick={onReset}><img className='redoIcon' src={redo} />RESET</Button>
                        </Col>
                        <Col md={12} lg={6} xl={6}>

                        <Button className="addUser" type="primary" onClick={handleClick} htmlType='search'><img className='addIcon' src={add} />Add User</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='userListRow'>
                <Col md={5} lg={4} xl={4} className="userFilter">
                    <p>USER NAME<img className="upIcon" src={up} /></p>
                </Col>
                <Col md={5} lg={4} xl={5} className="statusFilter">
                    <p>SUBSCRIPTION STATUS</p>
                </Col>
                <Col md={3} lg={2} xl={3} className="userFilter">
                    <p>CITY,STATE</p>
                </Col>
                <Col md={5} lg={5} xl={4} className="userFilter emailFilter">
                    <p>EMAIL ADDRESS</p>
                </Col>
                <Col md={3} lg={2} xl={3} className="userFilter">
                    <p>CONTACT NO.</p>
                </Col>
                <Col md={2} lg={4} xl={3} className="userFilter">
                    <p>ROLE</p>
                </Col>
                <Col md={1} lg={1} xl={2} className="userFilter">
                    <img src={menu} />
                </Col>
            </Row>
            <CompWrapper observeOn="userListRow">
                {
                    DumData.map((dum,index) => {
                        return (
                            status == null ? <UserRow dataUser={dum} key={index}/> :
                                status == true ? dum.status == "Active" ? <UserRow dataUser={dum} key={index}/> : null : dum.status
                                    == "Inactive" ? <UserRow dataUser={dum} key={index}/> : null)
                    }
                    )
                }
            </CompWrapper>
        </div>
    )

}

export default UserList;