import React from 'react'

function Progressbar(props) {
  return (
    <div class="flex">
        <p class="text-blue-400">{props.subject}</p>
        <p class="max-md:mx-6 mx-4">Chapter {props.chapter}</p>
    </div>
  )
}

export default Progressbar