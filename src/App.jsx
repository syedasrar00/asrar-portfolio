import Avatar from "./Components/Avatar"
import Header from "./Components/Header"
import Navbar from "./Components/Navbar"
import SkillsCard from "./Components/SkillsCard"
import SkillstoOffer from "./Components/SkillstoOffer"

function App() {
  return (
    <div className='bg-gradient-to-tr from-white to-cyan-200 min-h-screen'>
      <Navbar />
      <Header />
      <Avatar />
      <SkillstoOffer />
      <SkillsCard />
    </div>
  )
}

export default App
