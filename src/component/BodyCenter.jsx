import React from 'react'
import bell from "../assets/bell-regular.svg"
import user from "../assets/user-regular.svg"
import coin from "../assets/coin_files/24px.svg"
import ProgressBar from '@ramonak/react-progress-bar'
import FeesStatus from './Props/FeesStatus'
import DonutChart from 'react-donut-chart'


function BodyCenter() {
  return (
    <section class="w-3/5 p-4 shadow-xl h-fit max-xl:w-full">
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
    <div class="bg-[#85fbe9] w-full h-52 rounded-lg shadow-xl flex items-center max-md:px-1 lg:px-36 justify-center">
        <FeesStatus price="5000" about="Total pay"/>
        <FeesStatus price="5000" about="Pending fees"/>
        <FeesStatus price="5000" about="Paid fees"/>
    </div>
    <p class="text-2xl my-4 font-medium">Subject's Progress</p>
    <div class="flex">
    <div class="bg-[#85fbe9] w-3/4 h-60 rounded-lg shadow-xl py-2 overflow-auto max-lg:w-full">
        <div class="bg-white w-11/12 h-14 rounded-lg m-auto flex items-center justify-between px-4 my-4 shadow-2xl">
            <p class="text-blue-400">Math</p>
            <p class="max-md:mx-6">Chapter 6</p>
            <div class="w-2/3">
                <ProgressBar completed={40} height="16px" bgColor="red"/>
            </div>
         </div>
        <div class="bg-white w-11/12 h-14 rounded-lg m-auto flex items-center justify-between px-4 my-4 shadow-2xl">
            <p class="text-blue-400">Math</p>
            <p class="max-md:mx-6">Chapter 6</p>
            <div class="w-2/3">
                <ProgressBar completed={90} height="16px" bgColor="blue"/>
            </div>
        </div>
        <div class="bg-white w-11/12 h-14 rounded-lg m-auto flex items-center justify-between px-4 my-4 shadow-2xl">
            <p class="text-blue-400">Math</p>
            <p class="max-md:mx-6">Chapter 6</p>
            <div class="w-2/3">
                <ProgressBar completed={10} height="16px" bgColor="green"/>
            </div>
        </div>
        <div class="bg-white w-11/12 h-14 rounded-lg m-auto flex items-center justify-between px-4 my-4 shadow-2xl">
            <p class="text-blue-400">Math</p>
            <p class="max-md:mx-6">Chapter 6</p>
            <div class="w-2/3">
                <ProgressBar completed={40} height="16px" bgColor="orange"/>
            </div>
        </div>
        <div class="bg-white w-11/12 h-14 rounded-lg m-auto flex items-center justify-between px-4 my-4 shadow-2xl">
            <p class="text-blue-400">Math</p>
            <p class="max-md:mx-6">Chapter 6</p>
            <div class="w-2/3">
                <ProgressBar completed={20} height="16px" bgColor="pink"/>
            </div>
        </div>
        <div class="bg-white w-11/12 h-14 rounded-lg m-auto flex items-center justify-between px-4 my-4 shadow-2xl">
            <p class="text-blue-400">Math</p>
            <p class="max-md:mx-6">Chapter 6</p>
            <div class="w-2/3">
                <ProgressBar completed={60} height="16px" bgColor="red"/>
            </div>
        </div>
     </div>
     <div class="w-72 shadow-xl mx-4 rounded-xl max-lg:hidden">
        <DonutChart data={
            [
                { label: "", value: 40 },
                { label: "", value: 60 },
                { label: "", value: 20 },
                { label: "", value: 10 },
            ]
        } width={350} height={250} />
     </div>
     </div>
    </section>
  )
}

export default BodyCenter