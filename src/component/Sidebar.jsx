import React from 'react';
import logo from "../assets/school_logo_.png";
import user from "../assets/user-regular.svg"
import Dashboard from './Props/DashBoard';

function Sidebar() {
  return (
    <div className="mr-2 min-w-80 rounded-md shadow-lg h-full relative max-xl:absolute max-xl:bg-white overflow-scroll scrollbar-hide">
        <div className="flex items-center">
            <img src={logo} width="80px" />
            <p className="text-base font-semibold w-40 text-start">Metaphile Public School</p>
        </div>
        <div className="text-start border w-72 m-2 rounded-xl bg-[#72f5e1] px-6 py-2 shadow-xl max-md:w-72 max-md:bg-[#72f5e1]">
            <p className="text-xl font-semibold text-center">Dashboard</p>
              <Dashboard image={user} name="Assignment"/>
              <Dashboard image={user} name="Assignment"/>
              <Dashboard image={user} name="Assignment"/>
              <Dashboard image={user} name="Assignment"/>
              <Dashboard image={user} name="Assignment"/>
              <Dashboard image={user} name="Assignment"/>
            </div>
        <div className="text-center my-6">
          <button className="bg-[#85fbe9] shadow-xl px-5 py-1 rounded-xl">Log out</button>
        </div>
    </div>
  )
}

export default Sidebar