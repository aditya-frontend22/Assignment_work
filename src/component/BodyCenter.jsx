import React from 'react'
import bell from "../assets/bell-regular.svg"
import user from "../assets/user-regular.svg"
import coin from "../assets/coin_files/24px.svg"
import ProgressBar from '@ramonak/react-progress-bar'
import FeesStatus from './Props/FeesStatus'
import DonutChart from 'react-donut-chart'


function BodyCenter() {
  return (
    <section class="w-full h-full max-xl:w-full mx-4 overflow-y-scroll scrollbar-hide">
    <div class="flex justify-between shadow-lg py-5 px-2 rounded-lg">
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
    <p class="text-2xl my-2 font-medium">Fee Status</p>
    <div class="bg-[#85fbe9] w-full h-52 rounded-lg shadow-xl flex items-center max-md:px-1 lg:px-36 justify-center">
        <FeesStatus price="5000" about="Total pay"/>
        <FeesStatus price="5000" about="Pending fees"/>
        <FeesStatus price="5000" about="Paid fees"/>
    </div>
    <p class="text-2xl my-4 font-medium max-sm:items-center">Subject's Progress</p>
    <div class="flex items-center justify-center max-md:flex-col-reverse">
        <div class="bg-[#85fbe9] h-56 max-md:h-full w-3/4 rounded-lg shadow-md overflow-auto scrollbar-hide max-lg:w-full">
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
                    <ProgressBar completed={40} height="16px" bgColor="red"/>
                </div>
            </div>
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
                    <ProgressBar completed={40} height="16px" bgColor="red"/>
                </div>
            </div>
            <div class="bg-white w-11/12 h-14 rounded-lg m-auto flex items-center justify-between px-4 my-4 shadow-2xl">
                <p class="text-blue-400">Math</p>
                <p class="max-md:mx-6">Chapter 6</p>
                <div class="w-2/3">
                    <ProgressBar completed={40} height="16px" bgColor="red"/>
                </div>
            </div>
     </div>
     <div class="flex flex-col items-center justify-center shadow-lg rounded-xl mx-4 my-4 h-11/12 max-md:w-full">
        <h1 class="text-center font-normal text-lg">Attendence Status</h1>
        <DonutChart data={
            [
                { label: "", value: 40 },
                { label: "", value: 60 },
                { label: "", value: 20 },
                { label: "", value: 10 },
            ]
        } width={220} height={180} />
     </div>
</div>
    </section>
  )
}

export default BodyCenter