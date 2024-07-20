import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import logo from "@/assets/Logo.png"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import { useState } from "react"
import ActionButton from "@/shared/ActionButton"

type Props = {selectedPage: SelectedPage, setSelectedPage: (value: SelectedPage) => void, isTopOfPage: boolean}

const Navbar = ({selectedPage, setSelectedPage, isTopOfPage}: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  return (
      <nav>
          <div className={`flex-between fixed top-0 z-30 w-full py-6 ${isTopOfPage ? "" : "bg-primary-100 drop-shadow"}`}>
            <div className="flex-between mx-auto w-5/6">
              <div className="flex-between w-full gap-16">
                <img src={logo} alt="logo" />
                {isAboveMediumScreens ? (<div className="flex-between w-full">
                  <div className="flex-between gap-8 text-sm">
                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                  </div>
                  <div className="flex-between gap-8">
                    <p>Sing In</p>
                    <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                  </div>
                </div>) : (
                  <button 
                    className="rounded-full bg-secondary-500 p-2" 
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                  >
                    <Bars3Icon className="w-6 h-6 text-white"/>
                  </button>
                )}
              </div>
            </div>
          </div>
          {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 top-0 z-40 w-[300px] h-full bg-primary-100 drop-shadow-xl">
              <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <XMarkIcon className="w-6 h-6 text-gray-400" />
                </button>
              </div>
              <div className="flex flex-col gap-10 text-2xl ml-[33%]">
                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              </div>
            </div>
          )}         
      </nav>
  )
}

export default Navbar