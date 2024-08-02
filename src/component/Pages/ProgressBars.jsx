import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'

function ProgressBars() {
  return (
    <div class="items-center w-max mt-52 p-10 gap-10">
        <div class="bg-white w-11/12 h-14 rounded-lg m-auto flex items-center justify-between px-4 my-4 shadow-2xl">
            <p class="text-blue-400">{props.text}</p>
            <p class="max-md:mx-6">Chapter 6</p>
            <div class="w-2/3">
                <ProgressBar completed={80} height="16px"/>
            </div>
        </div>
    </div>
  )
}

export default ProgressBars