import React from 'react'
import bell from "../assets/bell-regular.svg"
import user from "../assets/user-regular.svg"
import coin from "../assets/coin_files/24px.svg"

function BodyCenter() {
  return (
    <section class="w-[80%] mx-[10px] p-[20px] shadow-xl">
    <div class="flex justify-between border shadow-lg py-[20px] px-[10px] rounded-lg">
        <div>
            <div class="flex">
                <img src={user} width="80px" height="80px" class="mx-[8px] border-[4px] p-[2px] rounded-full"/>
                <div>
                    <p>Hi, Aditya</p>
                    <p>Class 4th-B | Roll No.21</p>
                    <span class="bg-[#c0f1ea] rounded-lg px-[8px] py-[4px] shadow-md">2023-24</span>
                </div>
            </div>
        </div>
        <div>
            <img src={bell} width="60px" height="60px"/>
        </div>
    </div>
    <p class="text-[22px] my-[10px] font-medium">Fee Status</p>
    <div class="bg-[#85fbe9] w-[full] h-[200px] rounded-lg shadow-xl flex justify-between items-center px-[8%]">
        <div class="bg-white w-[200px] h-[160px] shadow-xl rounded-lg text-center justify-center">
            <img src="https://media.istockphoto.com/id/1314193409/vector/coins-stack-gold-coins-icon-flat-stacked-golden-coins-vector-illustration.jpg?s=612x612&w=0&k=20&c=Oqh3DMbPLCvYaiDq2nNK-F7PB84UcbjB_2OJu3e1MqQ=" width="100px" height="100px" class="m-auto"/>
            <p class="text-[18px] font-medium">₹ 5000</p> 
            <p>Total Payable</p>
        </div>
        <div class="bg-white w-[200px] h-[160px] shadow-xl rounded-lg text-center justify-center">
        <img src="https://media.istockphoto.com/id/1314193409/vector/coins-stack-gold-coins-icon-flat-stacked-golden-coins-vector-illustration.jpg?s=612x612&w=0&k=20&c=Oqh3DMbPLCvYaiDq2nNK-F7PB84UcbjB_2OJu3e1MqQ=" width="100px" height="100px" class="m-auto"/>
            <p class="text-[18px] font-medium">₹ 5000</p>
            <p>Total Payable</p>
        </div>
        <div class="bg-white w-[200px] h-[160px] shadow-xl rounded-lg text-center">
        <img src="https://media.istockphoto.com/id/1314193409/vector/coins-stack-gold-coins-icon-flat-stacked-golden-coins-vector-illustration.jpg?s=612x612&w=0&k=20&c=Oqh3DMbPLCvYaiDq2nNK-F7PB84UcbjB_2OJu3e1MqQ=" width="100px" height="100px" class="m-auto"/>
            <p class="text-[18px] font-medium">₹ 5000</p>
            <p>Total Payable</p>
        </div>
    </div>
    <p class="text-[22px] my-[10px] font-medium">Subject's Progress</p>
    <div class="bg-[#85fbe9] w-[80%] h-[280px] rounded-lg shadow-xl py-[10px] overflow-auto ">
        <div class="bg-white w-[96%] h-[50px] rounded-lg m-auto flex items-center justify-between px-[10px] my-[10px] shadow-2xl">
            <p class="text-blue-400">Math</p>
            <p>Chapter 6</p>
            <div class="w-[68%] h-[14px] bg-green-200 rounded-full">
                <div class="w-[59%] h-[14px] bg-green-400 rounded-full"></div>
            </div>
        </div>
        <div class="bg-white w-[96%] h-[50px] rounded-lg m-auto flex items-center justify-between px-[10px] my-[10px] shadow-2xl">
            <p class="text-blue-400">English</p>
            <p>Chapter 4.6</p>
            <div class="w-[68%] h-[14px] bg-orange-200 rounded-full">
                <div class="w-[89%] h-[14px] bg-orange-400 rounded-full"></div>
            </div>
        </div>
        <div class="bg-white w-[96%] h-[50px] rounded-lg m-auto flex items-center justify-between px-[10px] my-[10px] shadow-2xl">
            <p class="text-blue-400">Hindi</p>
            <p>Chapter 5.5</p>
            <div class="w-[68%] h-[14px] bg-yellow-200 rounded-full">
                <div class="w-[49%] h-[14px] bg-yellow-400 rounded-full"></div>
            </div>
        </div>
        <div class="bg-white w-[96%] h-[50px] rounded-lg m-auto flex items-center justify-between px-[10px] my-[10px] shadow-2xl">
            <p class="text-blue-400">Science</p>
            <p>Chapter 8</p>
            <div class="w-[68%] h-[14px] bg-red-200 rounded-full">
                <div class="w-[29%] h-[14px] bg-red-400 rounded-full"></div>
            </div>
        </div>
        <div class="bg-white w-[96%] h-[50px] rounded-lg m-auto flex items-center justify-between px-[10px] my-[10px] shadow-2xl">
            <p class="text-blue-400">Social Science</p>
            <p>Chapter 8</p>
            <div class="w-[68%] h-[14px] bg-red-200 rounded-full">
                <div class="w-[29%] h-[14px] bg-red-400 rounded-full"></div>
            </div>
        </div>
        <div class="bg-white w-[96%] h-[50px] rounded-lg m-auto flex items-center justify-between px-[10px] my-[10px] shadow-2xl">
            <p class="text-blue-400">Computer</p>
            <p>Chapter 8</p>
            <div class="w-[68%] h-[14px] bg-red-200 rounded-full">
                <div class="w-[29%] h-[14px] bg-red-400 rounded-full"></div>
            </div>
        </div>
        </div>
        
    </section>
  )
}

export default BodyCenter