

import './App.css'
import NavBar from './component/NavBar/NavBar'
import Dashboard from './component/Card/Card'
import LeaderboardCarousel from './component/LeaderboardCarousel/LeaderboardCarousel'
import SocialMediaTask from './component/SocialMediaTask/SocialMediaTask'
import BottomNavBar from './component/BottomNavBar/BottomNavBar'
import LeadershipNav from './leaderShip/LeadershipNav/LeadershipNav'
import LeaderboardGift from './leaderShip/LeaderboardGift/LeaderboardGift'
import LeaderboardList from './leaderShip/LeaderboardList/LeaderboardList'

function App() {

  return (
    <section className=''>

      <aside className='w-[500px] mx-auto border p-4 h-[800px]'>
              <NavBar />
      <Dashboard />
      <LeaderboardCarousel />
      <SocialMediaTask />
      <BottomNavBar/>
      </aside>


      <aside className='mt-16 w-[500px] mx-auto border p-4'>
        <LeadershipNav/>
        <LeaderboardGift />
        <LeaderboardList/>
        <BottomNavBar/>
      </aside>
    </section>
  )
}

export default App
