import BodyCenter from './component/BodyCenter';
import DailyNotice from './component/DailyNotice';
import Home from './component/Home';
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar';

function App() {

  return (
    <div>
    <Navbar />
      <div class="flex justify-between m-[10px]">
        <Sidebar />
        {/* <BodyCenter /> */}
        <Home />
        <DailyNotice />
      </div>
    </div>
  )
}

export default App
