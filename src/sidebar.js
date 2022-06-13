import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial',width:'max-content'}}
    >
      <CDBSidebar textColor="#000" backgroundColor="#fff">
        {/* <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/",,
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            HelloAR
          </a>
        </CDBSidebarHeader> */}

        <CDBSidebarContent className="sidebar-content" textColor="#000">
          <CDBSidebarMenu>
            <NavLink exact to="/products" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/demoscript" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Demoscript</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/customers" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Customers</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/sales" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Sales Team
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/demos" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Demos</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/settings" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Settings</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
