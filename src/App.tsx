import Navbar from "@/components/Navbar"
import Home from "@/components/home"
import Benefits from "@/components/benefits"
import OurClasses from "@/components/ourClasses"
import ContactUs from "@/components/contactUs"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      } else {
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  },[])

  return (
    <div className="app bg-gray-50">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage={isTopOfPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer />
    </div>
  )
}

export default App
