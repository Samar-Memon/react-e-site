import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [toggleBtn, setToggleBtn] = useState(false)
  const [getLocals, setGetLocals] = useState(false)

  useState(() => {
    const getting =  sessionStorage.getItem('E-react-user_name') && sessionStorage.getItem('E-react-user_email')
    if(getting == null){
      setGetLocals(false)
    }else{
      setGetLocals(true)
    }
  }, [])



  const navBarUL = (
  <>
    <ul className={
      toggleBtn ? "text-[#ffcfd0] font-bold text-[18px] flex flex-col gap-5 md:flex-row absolute top-[8vh] right-0 bg-[#00a6bb] w-[200px] text-center md:bg-none md:w-auto py-4 md:static transition-all duration-[400ms]" : "text-[#ffcfd0] font-bold text-[18px] md:flex flex-col gap-5 md:flex-row absolute top-[-1000%] right-0 bg-[#00a6bb] w-[200px] text-center md:bg-none md:w-auto py-4 md:static transition-all duration-[400ms]"
    }>
    <li className='border-b-[3px] border-transparent hover:border-[#ffcfd0]'>
      <Link to={'/'}>
        Home
      </Link>
    </li>
    <li className='border-b-[3px] border-transparent hover:border-[#ffcfd0]'>
      <Link to={'/allproduct'}>
        All Product
      </Link>
    </li>
    <li className='border-b-[3px] border-transparent hover:border-[#ffcfd0]'>
      <Link to={'/cartitems'}>
        Cart Items
      </Link>
    </li>
    {/* <li className='border-b-[3px] border-transparent hover:border-[#ffcfd0]'>
      <Link to={'/'}>
        <i className="fa-solid fa-user-circle"></i> User Name
      </Link>
    </li> */}

      {
        !getLocals && <li className='border-[3px] border-transparent hover:border-[#ffcfd0] hover:bg-transparent hover:text-[#ffcfd0] text-[#00a6bb] px-2 rounded-sm bg-[#ffcfd0]'>
        <Link to={'/signin'}>
          SignIn
        </Link>
    </li>
      }

  </ul>

  <div className="toggle md:hidden text-[30px] text-[#ffcfd0] cursor-pointer border-[#ffcfd0]" onClick={()=>setToggleBtn(!toggleBtn)}><i className={toggleBtn ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i></div>
  </>

  )
  return (
    <>
    <nav className='h-[8vh] px-2 bg-[#00a6bb] text-white flex justify-between items-center fixed top-0 left-0 w-full z-50'>
    <Link to='/'>
    <h1 className='font-bold text-4xl'>Dil<span className='text-[#ffcfd0]'>SE</span>BUY</h1>
    </Link>
    {navBarUL}
    </nav>
    </>
  )
}

export default Navbar