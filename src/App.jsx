import BodyCenter from './component/BodyCenter';
import DailyNotice from './component/DailyNotice';
import Home from './component/Pages/Home';
import Sidebar from './component/Sidebar';
import Logo from "./assets/school_logo_.png"
import Button from "./assets/bars-solid.svg"
import { useState } from 'react';
import bell from "./assets/bell-regular.svg"

function App() {
  const [isVisible, setIsVisible] = useState(true)
  const [show, setShow] = useState(true)
  
  return (
    <div>
            <nav class="border bg-[#4acbdc] rounded-lg w-full m-auto h-24 flex justify-between items-center shadow-md max-sm:grid ">
                <div class="flex items-center max-md:mx-4">
                    <button class="px-2.5 py-1.5 m-2 rounded-lg bg-[#a2d2d8]" onClick={()=>setIsVisible(!isVisible)}><img src={Button} height="18px" width="18px"/></button>
                    <img src={Logo} width="60px" height="60px" class="mx-2"/>
                    <p class="text-xl w-auto">Metaphile Public School</p>
                </div>
            <div class="flex justify-between lg:mx-4">
               <div class="mx-2 text-lg hover:bg-blue-500 hover:text-white hover:rounded-md">
                <a class="">Home</a>
                </div>
                <div class="mx-2 text-lg hover:bg-blue-500 hover:text-white hover:rounded-md">
                <a>Events</a>
                </div>
                <div class="mx-2 text-lg hover:bg-blue-500 hover:text-white hover:rounded-md">
                <a>Examination</a>
                </div>
                <div class="mx-2 text-lg hover:bg-blue-500 hover:text-white hover:rounded-md">
                <a>Fees</a>
                </div>
                <button class="max-sm:inline hidden" onClick={()=>setShow(!show)}><img src={bell} width="20px"/></button>
          </div>
        </nav>
      <div class="flex justify-between">
        {
          isVisible ?  <Sidebar /> : null
        }
        {/* <BodyCenter /> */}
        <Home />
        {
          show ? <DailyNotice /> : null
        }
      </div>
    </div>
  )
}

export default App
