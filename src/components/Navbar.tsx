import olx from '../assets/olx.png'
import lens from '../assets/lens.png'
import arrow from '../assets/arrow.png'
import search from '../assets/search.png'
import heart from '../assets/heart.png'
import Login from './Login'


import { useState } from 'react'

type searchProps = {
    setSearch: (value: string) => void; 
};


const Navbar = ({setSearch}:searchProps) => {
    
    const [loginModal , setLoginModal] = useState(false)
    const LoginModal = ()=>{
        setLoginModal(!loginModal)
    }

    const handleSearch =(e : React.ChangeEvent<HTMLInputElement>)=>{
        setSearch(e.target.value)
    }


  return (
   <>
     <div className="flex p-4 bg-slate-100 shadow-md">
        <img src={olx} alt="olx-icon" className="w-11 h-9" />
        <div className="flex border-2 border-spacing-1 w-64 p-2 border-black ml-5 bg-white">
            <img src={lens} alt="lens-icon" className="w-6 h-5 mt-1" />
            <input placeholder="location" className="ml-3 outline-none" />
            <img src={arrow} alt="arrow-icon" className="w-8 h-7" />
        </div>
        <div className="flex  ml-4 h-12 border-2 border-black bg-white">
            <input onChange={handleSearch} placeholder="Find Cars, Mobile phones and more "
             className="ml-3 w-96   outline-none" />
            <img src={search} alt="search-icon" />
        </div>
        <div className="flex h-12 p-3 ml-10 cursor-pointer">
            <h1 className="font-semibold">ENGLISH</h1>
            <img src={arrow} alt="arrow-icon" className="w-8 h-7" />
        </div>
        <img src={heart} alt="heart-icon" className="w-5 h-6 mt-3 ml-4" />
        <div onClick={LoginModal} className="flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline">
            <h1 className="font-bold text-lg">Login</h1>
        </div>
        <div className="flex w-28 h-12 p-2 ml-6 cursor-pointer rounded-full border border-yellow-500">
            <h1 className="font-bold text-lg ml-5">+Sell</h1>
        </div>
    </div>
    {loginModal && <Login setLoginModal={setLoginModal}/>}
   </>
  )
}

export default Navbar

