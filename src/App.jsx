import BodyCenter from './component/BodyCenter';
import DailyNotice from './component/DailyNotice';
import Home from './component/Pages/Home';
import Events from './component/Pages/Events';
import Sidebar from './component/Sidebar';
import Logo from "./assets/school_logo_.png"
import Button from "./assets/bars-solid.svg"
import { useState } from 'react';
import bell from "./assets/bell-regular.svg"
import { Route, Routes } from 'react-router-dom';
import Examination from './component/Pages/Examination';
import Fees_Dues from './component/Pages/Fees_Dues';


function App() {
  const [isVisible, setIsVisible] = useState(true)
  const [show, setShow] = useState(true)
  
  return (
    <div class="h-screen">
            <nav class="border bg-[#4acbdc] rounded-lg w-full m-auto h-24 flex justify-between items-center shadow-md max-sm:grid sticky t-0">
                <div class="flex items-center max-md:mx-1">
                    <button class="px-2 py-1.5 m-2 rounded-lg bg-[#a2d2d8]" onClick={()=>setIsVisible(!isVisible)}><img src={Button} height="18px" width="18px"/></button>
                    <img src={Logo} width="60px" height="60px" class="mx-2"/>
                    <a href="/" class="text-xl w-auto">Metaphile Public School</a>
                </div>
            <div class="flex justify-between max-sm:m-auto">
               <div class="mx-2 max-md:mx-1 max-sm:mx-1 text-lg hover:bg-blue-500 hover:text-white hover:rounded-md">
                <a href="/home">Home</a>
                </div>
                <div class="mx-2 max-md:mx-2 max-sm:mx-1 text-lg hover:bg-blue-500 hover:text-white hover:rounded-md">
                <a href="/events">Events</a>
                </div>
                <div class="mx-2 max-md:mx-2 max-sm:mx-1 text-lg hover:bg-blue-500 hover:text-white hover:rounded-md">
                <a href="/examination">Examination</a>
                </div>
                <div class="mx-2 max-md:mx-1 max-sm:mx-1 text-lg hover:bg-blue-500 hover:text-white hover:rounded-md">
                <a href="fees">Fees</a>
                </div>
                <button class="mx-1 max-md:mx-2" onClick={()=>setShow(!show)}><img src={bell} width="20px"/></button>
          </div>
        </nav>
      <div class="flex justify-between h-screen">
        {
          isVisible ?  <Sidebar /> : null
        }
        <Routes>
          <Route path="/" element={<BodyCenter />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/events" element={<Events />}/>
          <Route path="/examination" element={<Examination />}/> 
          <Route path="/fees" element={<Fees_Dues />}/>
        </Routes>
        {
          show ? <DailyNotice /> : null
        }
      </div>
    </div>
  )
}

export default App
