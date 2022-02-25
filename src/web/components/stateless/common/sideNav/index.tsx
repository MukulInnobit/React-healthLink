import React from "react"
import { Menu } from "antd"
import { useHistory } from "react-router";

import { hlCollapsed,hlFull } from "../../../../images";
import "./sideNavStyles.less"
import { SideNavItems } from "../../../../constants/sideNavConstants";
import { SideBarStateSelector, setSideBarItem } from "../../../../../redux/reducers/sideBarReducer";
import { useDispatch, useSelector } from "react-redux";

const getIcon = (props: any) => {
    return <img src={props} />
}
const { SubMenu } = Menu;
export const SideBar = (props: any) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {selectedSideBarItem} = useSelector(SideBarStateSelector)
    const {collapsed} = props;
    const handleItemSelect = (selectedItem: any) => {
        dispatch(setSideBarItem(selectedItem.title))
        history.push(selectedItem.url)
    }
    return (
        <div>
            <div className="logoContainer">
                <img style={{height: "100%", width:"100%"}}src={collapsed? hlCollapsed : hlFull}/>
            </div>
            <Menu className="sideBar-menu" mode="inline" selectedKeys={selectedSideBarItem}>
                {SideNavItems.platformAdminItems.map((item: any) => {
                    return (
                        item.children ?
                            <SubMenu key={item.title} className="menu-item-row" icon={getIcon(item.icon)} title={item.title} level={1}>
                                {item.children.map((subItem: any) => {
                                    return (
                                        <Menu.Item key={subItem.title} className="menu-item-row subItem" onClick={() => handleItemSelect(subItem)} >{subItem.title}</Menu.Item>
                                    )
                                })
                                }
                            </SubMenu>
                            :
                            <Menu.Item key={item.title} className="menu-item-row" icon={getIcon(item.icon)} onClick={() => handleItemSelect(item)}>{item.title}</Menu.Item>
                    )
                })}
            </Menu>
        </div>
    )
}