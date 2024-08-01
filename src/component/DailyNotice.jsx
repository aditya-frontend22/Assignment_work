import React from 'react'

function DailyNotice() {
  return (
    <aside class=" bg-white m-4 relative max-md:absolute max-md:right-0 2xl:hidden max-md:inline rounded-xl">
        {/* <div class="bg-white"> */}
        <div class="flex justify-between bg-white">
            <p>Daily Notice</p>
            <p class="text-blue-500">See all</p>
        </div>
                <div class="my-[10px] border rounded-lg h-96 p-6 shadow-2xl">
            <h1 class="font-semibold mt-2">Event</h1>
            <p class="font-extralight text-base">Today at the student of class 1st to 8th come to Auditiurium</p>
            <h1 class="font-semibold mt-2">Exam schedule</h1>
            <p class="font-extralight text-base">From 13th april to 20 april the Exam will be start</p>
            <h1 class="font-semibold mt-2">Holiday</h1>
            <p class="font-extralight text-base">Tomorrow will be a holiday on the occasion of holi</p>
        </div>
        <div class="flex justify-between">
            <p>Activities</p>
            <p class="text-blue-500">See all</p>
        </div>
        <div class="border rounded-xl shadow-xl bg-white p-2">
            <h1>Rhyme themes</h1>
        </div>
        {/* </div> */}
    </aside>
  )
}

export default DailyNotice