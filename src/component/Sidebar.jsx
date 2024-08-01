import React from 'react';
import logo from "../assets/school_logo_.png";
import user from "../assets/user-regular.svg"

function Sidebar() {
  return (
    <div class="w-[26%] border mr-[10px] h-[100vh] rounded-xl shadow-2xl items-center">
        <div class="flex items-center">
            <img src={logo} width="80px"/>
            <p class="text-[14px] font-semibold w-[160px] text-center">Metaphile Public School</p>
        </div>
        <div class="text-start border w-[94%] m-auto rounded-xl bg-cyan-200 px-[18px] py-[6px] shadow-xl">
            <p class="text-[24px] font-semibold">Dashboard</p>
            <div>
              <div class="flex my-[10px]">
                <img src={user} width="16px" height="16px" class="mx-[10px]"/>
                <p>Attendance</p>
              </div>
              <div class="flex my-[10px]">
                <img src={user} width="16px" height="16px" class="mx-[10px]"/>
                <p>Attendance</p>
              </div>              <div class="flex">
                <img src={user} width="16px" height="16px" class="mx-[10px]"/>
                <p>Attendance</p>
              </div>
              <div class="flex my-[10px]">
                <img src={user} width="16px" height="16px" class="mx-[10px]"/>
                <p>Attendance</p>
              </div>
              <div class="flex my-[10px]">
                <img src={user} width="16px" height="16px" class="mx-[10px]"/>
                <p>Attendance</p>
              </div>
              <div class="flex my-[10px]">
                <img src={user} width="16px" height="16px" class="mx-[10px]"/>
                <p>Attendance</p>
              </div>
              <div class="flex my-[10px]">
                <img src={user} width="16px" height="16px" class="mx-[10px]"/>
                <p>Attendance</p>
              </div>
              <div class="flex my-[10px]">
                <img src={user} width="16px" height="16px" class="mx-[10px]"/>
                <p>Attendance</p>
              </div>
              <div class="flex my-[10px]">
                <img src={user} width="16px" height="16px" class="mx-[10px]"/>
                <p>Attendance</p>
              </div>
              <div class="flex my-[10px]">
                <img src={user} width="16px" height="16px" class="mx-[10px]"/>
                <p>Attendance</p>
              </div>
              <div class="flex my-[10px]">
                <img src={user} width="16px" height="16px" class="mx-[10px]"/>
                <p>Attendance</p>
              </div>
              <div class="flex my-[10px]">
                <img src={user} width="16px" height="16px" class="mx-[10px]"/>
                <p>Attendance</p>
              </div>
            </div>
        </div>
        <div class="text-center my-[20px]">
          <button class="bg-cyan-400 shadow-xl px-[18px] py-[6px] rounded-xl">Log out</button>
        </div>
    </div>
  )
}

export default Sidebar