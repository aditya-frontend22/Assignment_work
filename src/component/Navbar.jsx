import React from 'react'
import Logo from "../assets/school_logo_.png"
import Home from "./Pages/Home"
import Fees_Dues from './Pages/Fees_Dues'
import buttonsvg from "../assets/bars-solid.svg"
import Events from './Pages/Events'
import Examination from './Pages/Examination'


function Navbar() {
  return (
        <nav>
            <div class="border bg-[#4acbdc] rounded-lg w-full m-auto h-[80px] flex justify-between items-center shadow-md">
                <div class="flex items-center">
                    <button class="px-2.5 py-1.5 m-2 rounded-lg bg-[#a2d2d8]"><img src={buttonsvg} height="18px" width="18px"/></button>
                    <img src={Logo} width="60px" height="60px" class="mx-[10px]"/>
                    <p class="text-[18px] mx-[5px]">Metaphile Public School</p>
                </div>
            <div class="flex justify-between">
                <div class="mx-[24px] text-[18px] hover:bg-blue-500 hover:text-white hover:p-[4px] hover:rounded-md"><Home /></div>
                <div class="mx-[24px] text-[18px] hover:bg-blue-500 hover:text-white hover:p-[4px] hover:rounded-md"><Fees_Dues /></div>
                <div class="mx-[24px] text-[18px] hover:bg-blue-500 hover:text-white hover:p-[4px] hover:rounded-md"><Events /></div>
               <div class="mx-[24px] text-[18px]  hover:bg-blue-500 hover:text-white hover:p-[4px] hover:rounded-md"><Examination /></div>
            </div>
            </div>
        </nav>
  )
}

export default Navbar