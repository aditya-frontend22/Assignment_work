import React from 'react'

function DailyNotice() {
  return (
    <aside class="w-[28%] m-[20px]">
        <div class="flex justify-between">
            <p>Daily Notice</p>
            <p class="text-blue-500">See all</p>
        </div>
                <div class="my-[10px] border rounded-lg h-[400px] p-[20px] shadow-2xl">
            <h1 class="font-semibold mt-[10px]">Event</h1>
            <p class="font-extralight text-[14px]">Today at the student of class 1st to 8th come to Auditiurium</p>
            <h1 class="font-semibold mt-[10px]">Exam schedule</h1>
            <p class="font-extralight text-[14px]">From 13th april to 20 april the Exam will be start</p>
            <h1 class="font-semibold mt-[10px]">Holiday</h1>
            <p class="font-extralight text-[14px]">Tomorrow will be a holiday on the occasion of holi</p>
        </div>
        <div class="flex justify-between">
            <p>Activities</p>
            <p class="text-blue-500">See all</p>
        </div>
        <div class="border rounded-xl shadow-xl bg-white p-[10px]">
            <h1>Rhyme themes</h1>
        </div>
    </aside>
  )
}

export default DailyNotice