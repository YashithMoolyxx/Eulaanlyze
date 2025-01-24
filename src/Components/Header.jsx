import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className='forpadd flex justify-between gap-10 py-6 mt-0 items-center px-40'>
        <div className='flex gap-3'>
        <svg  xmlns="http://www.w3.org/2000/svg" width="34" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"   className="text-kinpur  lucide lucide-chart-no-axes-column-increasing text-primary"><line x1="12" x2="12" y1="20" y2="10"></line><line x1="18" x2="18" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="16"></line></svg>
        <h1 className='textt text-2xl font-extrabold font-heading text-bala' style={{ fontFamily: 'var(--font-heading)' }}>EULARIZE</h1>
        </div>
        
      <div className='flex items-center gap-10 text-balac'>
        <Link className='hover:text-kinpur hover:font-semibold' to='/'>Home</Link>
        <Link className='hover:text-kinpur hover:font-semibold' to='http://localhost:5000/get-started'>Analyze</Link>
        {/* <Link className='hover:text-kinpur hover:font-semibold' to='/docs'>Docs</Link>
        <Link className='hover:text-kinpur hover:font-semibold' to='/blog' >Blog</Link> */}
        <a href='/analyze'><button className='rounded-[20px] bg-kinpur text-white font-bold px-3 py-2'>Get Started</button></a>
      </div>
    </div>
  )
}

export default Header
