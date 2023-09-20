import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
      <div className="h-screen">
        <div className="flex gap-4">
          <div className="bg-cyan-400 w-[200px] flex flex-col">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400" : ""
              }
              to="/dashboard/profile"
            >
              Profile
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400" : ""
              }
              to="/dashboard/price"
            >
              Price
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400" : ""
              }
              to="/dashboard/user"
            >
              User
            </NavLink>
          </div>

          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;