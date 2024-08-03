import React from 'react'

function FeesStatus(props) {
  return (
    <div class="bg-white w-11/12 h-40 shadow-xl rounded-lg text-center justify-center md:min-w-28 mx-2">
        <img src="https://media.istockphoto.com/id/1314193409/vector/coins-stack-gold-coins-icon-flat-stacked-golden-coins-vector-illustration.jpg?s=612x612&w=0&k=20&c=Oqh3DMbPLCvYaiDq2nNK-F7PB84UcbjB_2OJu3e1MqQ=" width="100px" height="100px" class="m-auto"/>
        <p class="text-lg font-medium">₹{props.price}</p> 
        <p>{props.about}</p>
    </div>
  )
}

export default FeesStatus