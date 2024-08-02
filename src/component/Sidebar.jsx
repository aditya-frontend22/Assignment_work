import React from 'react';
import logo from "../assets/school_logo_.png";
import user from "../assets/user-regular.svg"
import Dashboard from './Props/DashBoard';

function Sidebar() {
  return (
    <div class="border mr-2 min-w-80 rounded-xl shadow-2xl items-center relative max-xl:absolute max-xl:bg-white max-xl:h-full">
        <div class="flex items-center">
            <img src={logo} width="80px" />
            <p class="text-base font-semibold w-40 text-start">Metaphile Public School</p>
        </div>
        <div class="text-start border w-72 m-2 rounded-xl bg-[#72f5e1] px-6 py-2 shadow-xl max-md:w-72 max-md:bg-[#72f5e1]">
            <p class="text-xl font-semibold text-center">Dashboard</p>
              <Dashboard image={user} name="Assignment"/>
              <Dashboard image={user} name="Assignment"/>
              <Dashboard image={user} name="Assignment"/>
              <Dashboard image={user} name="Assignment"/>
              <Dashboard image={user} name="Assignment"/>
              <Dashboard image={user} name="Assignment"/>
              <Dashboard image={user} name="Assignment"/>
              <Dashboard image={user} name="Assignment"/>
              <Dashboard image={user} name="Assignment"/>
              <Dashboard image={user} name="Assignment"/>
              <Dashboard image={user} name="Assignment"/>
              <Dashboard image={user} name="Assignment"/>
              <Dashboard image={user} name="Assignment"/>
              <Dashboard image={user} name="Assignment"/>
              <Dashboard image={user} name="Assignment"/>
            </div>
        <div class="text-center my-6">
          <button class="bg-[#85fbe9] shadow-xl px-5 py-1 rounded-xl">Log out</button>
        </div>
    </div>
  )
}

export default Sidebar