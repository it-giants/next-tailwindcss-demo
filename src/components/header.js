import Image from 'next/image'
import logo from '@/assets/imgs/logo.svg'
import avatar from '@/assets/imgs/avatar.png'
import { BellAlertIcon } from '@heroicons/react/24/outline'
import { ChatBubbleOvalLeftEllipsisIcon as ChatIcon} from '@heroicons/react/24/outline'

function header() {
  return (
    <header className="shadow-md">
      <div className="container mx-auto px-4">
        <div className="header-contents flex">
          <div className="navbar bg-base-100">
            <div className="navbar-center">
              <div className="dropdown">
                <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden max-[639px]:pl-0 max-[639px]:pr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Find Talent</a></li>
                  <li><a>Find Work</a></li>
                  <li><a>Why bluHub Works</a></li>
                </ul>
              </div>

              <div className="brand sm:mr-[46px]">
                <Image src={logo.src} width={113} height={48} quality={100} alt="logo" className="max-[639px]:max-w-[100px]" />
              </div>
            </div>
            <div className="navbar-start hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-base">
                <li><a>Find Talent</a></li>
                <li><a>Find Work</a></li>
                <li><a>Why bluHub Works</a></li>
              </ul>
            </div>
            <div className="navbar-end gap-3 max-[1023px]:ml-auto sm:gap-4">
              <div className="contact">
                <ChatIcon className="h-6 w-6 text-[#4E91CD] stroke-2 cursor-pointer"/>
              </div>

              <div className="notifications">
                <BellAlertIcon className="h-6 w-6 text-[#4E91CD] stroke-2 cursor-pointer" />
              </div>

              <div className="avatar">
                <div className="w-[41px] rounded-full cursor-pointer">
                  <Image src={avatar.src} width={41} height={41} quality={100} alt="personal avatar" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}

export default header