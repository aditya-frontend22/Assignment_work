import React from 'react'
import bell from "../assets/bell-regular.svg"
import user from "../assets/user-regular.svg"
import coin from "../assets/coin_files/24px.svg"

function BodyCenter() {
  return (
    <section class="w-full p-5 shadow-xl">
    <div class="flex justify-between border shadow-lg py-5 px-4 rounded-lg">
        <div>
            <div class="flex">
                <img src={user} width="80px" height="80px" class="mx-2 p-1 rounded-full"/>
                <div>
                    <p>Hi, Aditya</p>
                    <p>Class 4th-B | Roll No.21</p>
                    <span class="bg-[#c0f1ea] rounded-lg px-2 py-1 shadow-md">2023-24</span>
                </div>
            </div>
        </div>
        <div>
            <img src={bell} width="60px" height="60px"/>
        </div>
    </div>
    <p class="text-2xl my-4 font-medium">Fee Status</p>
    <div class="bg-[#85fbe9] w-full h-52 rounded-lg shadow-xl flex justify-between items-center max-md:px-1 lg:px-36">
        <div class="bg-white w-48 h-40 shadow-xl rounded-lg text-center justify-center md:min-w-28">
            <img src="https://media.istockphoto.com/id/1314193409/vector/coins-stack-gold-coins-icon-flat-stacked-golden-coins-vector-illustration.jpg?s=612x612&w=0&k=20&c=Oqh3DMbPLCvYaiDq2nNK-F7PB84UcbjB_2OJu3e1MqQ=" width="100px" height="100px" class="m-auto"/>
            <p class="text-lg font-medium">₹ 5000</p> 
            <p>Total Payable</p>
        </div>
        <div class="bg-white w-48 h-40 shadow-xl rounded-lg text-center justify-center md:min-w-28">
        <img src="https://media.istockphoto.com/id/1314193409/vector/coins-stack-gold-coins-icon-flat-stacked-golden-coins-vector-illustration.jpg?s=612x612&w=0&k=20&c=Oqh3DMbPLCvYaiDq2nNK-F7PB84UcbjB_2OJu3e1MqQ=" width="100px" height="100px" class="m-auto"/>
            <p class="text-lg font-medium">₹ 5000</p>
            <p>Total Payable</p>
        </div>
        <div class="bg-white w-48 h-40 shadow-xl rounded-lg text-center md:min-w-28">
        <img src="https://media.istockphoto.com/id/1314193409/vector/coins-stack-gold-coins-icon-flat-stacked-golden-coins-vector-illustration.jpg?s=612x612&w=0&k=20&c=Oqh3DMbPLCvYaiDq2nNK-F7PB84UcbjB_2OJu3e1MqQ=" width="100px" height="100px" class="m-auto"/>
            <p class="text-lg font-medium">₹ 5000</p>
            <p>Total Payable</p>
        </div>
    </div>
    <p class="text-[22px] my-[10px] font-medium">Subject's Progress</p>
    <div class="bg-[#85fbe9] h-56 rounded-lg shadow-xl py-2 overflow-auto ">
        <div class="bg-white w-11/12 h-14 rounded-lg m-auto flex items-center justify-between px-4 my-4 shadow-2xl">
            <p class="text-blue-400">Math</p>
            <p class="max-md:mx-6">Chapter 6</p>
            <div class="w-2/3 bg-green-200 rounded-full">
                <div class="w-3/4 h-4 bg-green-400 rounded-full"></div>
            </div>
        </div>
        <div class="bg-white w-11/12 h-14 rounded-lg m-auto flex items-center justify-between px-4 my-4 shadow-2xl">
            <p class="text-blue-400">Math</p>
            <p class="max-md:mx-6">Chapter 6</p>
            <div class="w-2/3 bg-rose-200 rounded-full">
                <div class="w-3/4 h-4 bg-rose-400 rounded-full"></div>
            </div>
        </div>
        <div class="bg-white w-11/12 h-14 rounded-lg m-auto flex items-center justify-between px-4 my-4 shadow-2xl">
            <p class="text-blue-400">Math</p>
            <p class="max-md:mx-6">Chapter 6</p>
            <div class="w-2/3 bg-yellow-200 rounded-full">
                <div class="w-3/4 h-4 bg-yellow-400 rounded-full"></div>
            </div>
        </div>
        <div class="bg-white w-11/12 h-14 rounded-lg m-auto flex items-center justify-between px-4 my-4 shadow-2xl">
            <p class="text-blue-400">Math</p>
            <p class="max-md:mx-6">Chapter 6</p>
            <div class="w-2/3 bg-orange-200 rounded-full">
                <div class="w-3/4 h-4 bg-orange-400 rounded-full"></div>
            </div>
        </div>
        <div class="bg-white w-11/12 h-14 rounded-lg m-auto flex items-center justify-between px-4 my-4 shadow-2xl">
            <p class="text-blue-400">Math</p>
            <p class="max-md:mx-6">Chapter 6</p>
            <div class="w-2/3 bg-red-200 rounded-full">
                <div class="w-3/4 h-4 bg-red-400 rounded-full"></div>
            </div>
        </div>
        <div class="bg-white w-11/12 h-14 rounded-lg m-auto flex items-center justify-between px-4 my-4 shadow-2xl">
            <p class="text-blue-400">Math</p>
            <p class="max-md:mx-6">Chapter 6</p>
            <div class="w-2/3 bg-yellow-200 rounded-full">
                <div class="w-3/4 h-4 bg-yellow-400 rounded-full"></div>
            </div>
        </div>
        <div class="bg-white w-11/12 h-14 rounded-lg m-auto flex items-center justify-between px-4 my-4 shadow-2xl">
            <p class="text-blue-400">Math</p>
            <p class="max-md:mx-6">Chapter 6</p>
            <div class="w-2/3 bg-red-200 rounded-full">
                <div class="w-2/4 h-4 bg-red-400 rounded-full"></div>
            </div>
        </div>
     </div>
    </section>
  )
}

export default BodyCenter