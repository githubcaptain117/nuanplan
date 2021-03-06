import React from "react";
import { FaTachometerAlt, FaGithub, FaRegLaughWink } from 'react-icons/fa';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import sidebarBg from '../../img/bgsidemenu.png';
import { NavLink } from "react-router-dom";
import * as constants from "../../constants";


function SideNavBar({ image, collapsed, toggled, handleToggleSidebar }) {
  return (
    <ProSidebar
      image={image ? sidebarBg : false}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      {/* <div className="sideNavBar-customize"> */}
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {"sidebarTitle"}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">{"new"}</span>}
          >
            <NavLink to={`${constants.DEFUALT_URL_PATH}/dashboard`}>
              <div className="navLink">{"dashboard"}</div>
            </NavLink>
          </MenuItem>
          {/* <MenuItem icon={<FaGem />}>
            <NavLink to="/plan">
              <div className="navLink">{"สร้างแผน"}</div>
            </NavLink>
          </MenuItem> */}
          <SubMenu
            // suffix={<span className="badge yellow">3</span>}
            title={"แผน"}
            icon={<FaRegLaughWink />}
          >
            <SubMenu
              // suffix={<span className="badge yellow">3</span>}
              title={"โครงการ/งาน"}
              icon={<FaRegLaughWink />}
            >
              <MenuItem>
                <NavLink to={`${constants.DEFUALT_URL_PATH}/plan`}>
                  <div className="navLink">{"สร้าง"}</div>
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to={`${constants.DEFUALT_URL_PATH}/planlist`}>
                  <div className="navLink">{"รายการ"}</div>
                </NavLink>
              </MenuItem>
              {/* <MenuItem>{"submenu"} 3</MenuItem> */}
            </SubMenu>

            <SubMenu
              // suffix={<span className="badge yellow">3</span>}
              title={"จัดทำกิจกรรม"}
              icon={<FaRegLaughWink />}
            >
              <MenuItem>
                <NavLink to={`${constants.DEFUALT_URL_PATH}/activity`}>
                  <div className="navLink">{"สร้าง"}</div>
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to={`${constants.DEFUALT_URL_PATH}/activitylist`}>
                  <div className="navLink">{"รายการ"}</div>
                </NavLink>
              </MenuItem>
              {/* <MenuItem>{"submenu"} 3</MenuItem> */}
            </SubMenu>
          </SubMenu>
          {/* <SubMenu
              prefix={<span className="badge gray">3</span>}
              title={"withPrefix"}
              icon={<FaHeart />}
            >
              <MenuItem>{"submenu"} 1</MenuItem>
              <MenuItem>{"submenu"} 2</MenuItem>
              <MenuItem>{"submenu"} 3</MenuItem>
            </SubMenu>
            <SubMenu title={"multiLevel"} icon={<FaList />}>
              <MenuItem>{"submenu"} 1 </MenuItem>
              <MenuItem>{"submenu"} 2 </MenuItem>
              <SubMenu title={`${"submenu"} 3`}>
                <MenuItem>{"submenu"} 3.1 </MenuItem>
                <MenuItem>{"submenu"} 3.2 </MenuItem>
                <SubMenu title={`${"submenu"} 3.3`}>
                  <MenuItem>{"submenu"} 3.3.1 </MenuItem>
                  <MenuItem>{"submenu"} 3.3.2 </MenuItem>
                  <MenuItem>{"submenu"} 3.3.3 </MenuItem>
                </SubMenu>
              </SubMenu>
            </SubMenu> */}
        </Menu>
      </SidebarContent>
      {/* </div> */}
      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              {"viewSource"}
            </span>
          </a>
        </div>
      </SidebarFooter>

    </ProSidebar>
  );
}

export default SideNavBar;
