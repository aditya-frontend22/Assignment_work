import React from 'react'
import userimage from "../../assets/user-regular.svg"

function Home() {
  return (
    <div class="w-4/5 mx-4 my-4 ">
        <h1 class="text-start text-2xl">Profile</h1>
        <div class="flex justify-between max-lg:inline items-center">
            <div class="border rounded-lg shadow-xl p- w-full mr-[10px] flex h-32 items-center">
                <img src={userimage} width="60px" height="60px" class="mx-4"/>
                <div>
                <p class="text-2xl text-slate-500">Abhishek Kumar</p>
                <p class="text-xl text-slate-500">Class - VI 'A'</p>
                <p class="text-xl text-slate-500">Roll no. - 08</p>
                </div>
            </div>
            <div class="border rounded-lg w-full shadow-xl p-5 my-4 h-32">
                <p class="my-1">Reading skills</p>
                <div class="w-4/5 bg-blue-200 h-2.5 rounded-md">
                    <div class="w-4/5 bg-blue-600 h-2.5 rounded-md"></div>
                </div>
                <p class="my-2">Reading skills</p>
                <div class="w-4/5 bg-red-200 h-2.5 rounded-lg">
                    <div class="w-2/5 bg-red-600 h-2.5 rounded-lg"></div>
                </div>
            </div>
        </div>
        <div class="h-fit shadow-xl w-full my-4 border rounded-lg">
            <div class="flex border-b py-2">
             <p class="mx-4 hover:text-blue-400">Student</p>
             <p class="mx-4 hover:text-blue-400">Parents</p>
             </div>
             <div class="flex my-6">
             <p class="text-sky-600 mx-4">Birth Date</p>
             <p class="mx-20">12/08/2012</p>
             </div>
             <div class="flex my-6">
             <p class="text-sky-600 mx-4">Birth Date</p>
             <p class="mx-20">12/08/2012</p>
             </div>
        </div>
    </div>
  )
}

export default Home