import React from 'react';
import logo from "../assets/school_logo_.png";
import user from "../assets/user-regular.svg"

function Sidebar() {
  return (
    <div class="border mr-4 min-w-80 mt-4 rounded-xl shadow-2xl items-center relative max-md:absolute max-md:bg-white 2xl:hidden max-md:inline">
        <div class="flex items-center">
            <img src={logo} width="80px" />
            <p class="text-base font-semibold w-40 text-center">Metaphile Public School</p>
        </div>
        <div class="text-start border w-72 m-4 rounded-xl bg-[#72f5e1] px-6 py-2 shadow-xl max-md:w-72 max-md:bg-[#72f5e1]">
            <p class="text-xl font-semibold text-center">Dashboard</p>
            <div>
              <div class="flex my-4">
                <img src={user} width="16px" height="16px" class="mx-2"/>
                <p class="font-extralight">Attendance</p>
              </div>
              <div class="flex my-4">
                <img src={user} width="16px" height="16px" class="mx-2"/>
                <p class="font-extralight">Attendance</p>
              </div>
              <div class="flex my-4">
                <img src={user} width="16px" height="16px" class="mx-2"/>
                <p class="font-extralight">Attendance</p>
              </div>
              <div class="flex my-4">
                <img src={user} width="16px" height="16px" class="mx-2"/>
                <p class="font-extralight">Attendance</p>
              </div>
              <div class="flex my-4">
                <img src={user} width="16px" height="16px" class="mx-2"/>
                <p class="font-extralight">Attendance</p>
              </div>
              <div class="flex my-4">
                <img src={user} width="16px" height="16px" class="mx-2"/>
                <p class="font-extralight">Attendance</p>
              </div>
              <div class="flex my-4">
                <img src={user} width="16px" height="16px" class="mx-2"/>
                <p class="font-extralight">Attendance</p>
              </div>
              <div class="flex my-4">
                <img src={user} width="16px" height="16px" class="mx-2"/>
                <p class="font-extralight">Attendance</p>
              </div>
              <div class="flex my-4">
                <img src={user} width="16px" height="16px" class="mx-2"/>
                <p class="font-extralight">Attendance</p>
              </div>
              <div class="flex my-4">
                <img src={user} width="16px" height="16px" class="mx-2"/>
                <p class="font-extralight">Attendance</p>
              </div>
              <div class="flex my-4">
                <img src={user} width="16px" height="16px" class="mx-2"/>
                <p class="font-extralight">Attendance</p>
              </div>
              <div class="flex my-4">
                <img src={user} width="16px" height="16px" class="mx-2"/>
                <p class="font-extralight">Attendance</p>
              </div>
            </div>
        </div>
        <div class="text-center my-6">
          <button class="bg-[#85fbe9] shadow-xl px-5 py-1 rounded-xl">Log out</button>
        </div>
    </div>
  )
}

export default Sidebar