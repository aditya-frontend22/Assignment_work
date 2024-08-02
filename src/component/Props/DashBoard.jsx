import React from 'react'

function Dashboard(props) {
  return (
  <div class="flex my-4">
        <img src={props.image} width="16px" height="16px" class="mx-2"/>
        <p class="font-extralight">{props.name}</p>
  </div>
  )
}

export default Dashboard