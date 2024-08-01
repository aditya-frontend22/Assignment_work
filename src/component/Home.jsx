import React from 'react'
import userimage from "../assets/user-regular.svg"

function Home() {
  return (
    <div class="w-[80%] my-[20px] mx-[10px]">
        <h1 class="text-start text-[28px]">Profile</h1>
        <div class="flex">
            <div class="border rounded-lg shadow-xl p-[20px] w-[50%] mr-[10px] flex h-[180px] items-center">
                <img src={userimage} width="60px" height="60px" class="mx-[10px]"/>
                <div>
                <p class="text-[24px] text-slate-500">Abhishek Kumar</p>
                <p class="text-[18px] text-slate-500">Class - VI 'A'</p>
                <p class="text-[18px] text-slate-500">Roll no. - 08</p>
                </div>
            </div>
            <div class="border rounded-lg w-[40%] shadow-xl p-[20px]">
                <p class="my-[5px]">Reading skills</p>
                <div class="w-[90%] bg-blue-200 h-[10px] rounded-md">
                    <div class="w-[40%] bg-blue-600 h-[10px] rounded-md">

                    </div>
                </div>
                <p class="my-[5px]">Reading skills</p>
                <div class="w-[90%] bg-red-200 h-[10px] rounded-md">
                    <div class="w-[40%] bg-red-600 h-[10px] rounded-md">

                    </div>
                </div>
            </div>
        </div>
        <div class="h-[400px] shadow-xl w-[90%] my-[20px]">
            <div class="flex border-b py-[10px]">
             <p class="mx-[10px] hover:text-blue-400">Student</p>
             <p class="mx-[10px] hover:text-blue-400">Parents</p>
             </div>
             <div class="flex my-[20px]">
             <p class="text-sky-600 mx-[10px]">Birth Date</p>
             <p class="mx-[80px]">12/08/2012</p>
             </div>
        </div>
    </div>
  )
}

export default Home