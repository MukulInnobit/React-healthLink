import React, { useState } from 'react';
import UserRow from "../../../stateless/user/userRow"
import "./adminUserList.less"
import { AppRoutes } from '../../../../router/appRoutes';
import { CompWrapper } from '../../common/contentWrapper';

const AdminUserList = (props: any) => {

    const [status, setStatus] = useState<boolean | null>(null);
    const { users } = props;
    return (
            <CompWrapper observeOn="detailsHeader" name="admin-list">
                <div className="admin-list">
                {
                    users.map((dum:any) => {
                        return (
                            status == null ? <UserRow dataUser={dum} /> :
                                status == true ? dum.status == "Active" ? <UserRow dataUser={dum} /> : null : dum.status
                                    == "Inactive" ? <UserRow dataUser={dum} /> : null)
                    }
                    )
                }
                </div>
            </CompWrapper>
    )

}

export default AdminUserList;