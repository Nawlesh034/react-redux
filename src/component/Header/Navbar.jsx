import React, { useState } from 'react'
import image from "../../assets/image.png";
import profile from "../../assets/nawlesh.jpg";
import SkillSet from '../Skill-set/SkillSet.jsx';
import { Link, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Sidebar from './Sidebar';
import { Menu, X } from "lucide-react"; 



function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
    
  return (
    <>
       <div className='flex justify-between items-center flex-wrap p-4 '>
        <span className='flex relative md:right-[7%] w-full md:w-auto justify-center md:justify-start'>
          <img src={image} alt="" width={500} height={400} className='bg-cover max-w-full md:max-w-none md:relative md:right-16' />
        </span>
        <span className='border-2 border-solid rounded-md flex items-center my-auto gap-3 py-2 px-2 mx-auto md:mx-[3.9rem] h-fit'>
          <span>
            <img className="w-10 h-10 rounded-full" src={profile} alt="Rounded avatar" width={200} height={200} />
          </span>
          <span className='text-lg font-bold'>Nawlesh Nand</span>
        </span>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Visible when `menuOpen` is true) */}
      <div
        className={`md:hidden flex flex-col items-center bg-white shadow-md p-4 transition-transform duration-300 ease-in-out ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <Link
          to="/"
          className="py-2 text-lg font-bold text-gray-700 hover:text-blue-500"
          onClick={() => setMenuOpen(false)}
        >
          Dashboard
        </Link>
        <Link
          to="/skill-test"
          className="py-2 text-lg font-bold text-gray-700 hover:text-blue-500"
          onClick={() => setMenuOpen(false)}
        >
          Skill Test
        </Link>
        <Link
          to="/internship"
          className="py-2 text-lg font-bold text-gray-700 hover:text-blue-500"
          onClick={() => setMenuOpen(false)}
        >
          Internship
        </Link>
      </div>

   

      {/* main div */}
      <div className='flex flex-col md:flex-row gap-8 md:gap-16 border px-4 md:pr-16 '>
              
            <Sidebar className=""/>
            <div className='md:border-r-2 '>

            </div>
        {/* Secondary Content */}
           <Routes>
               <Route path='/skill-test' element={<SkillSet/>} />
                <Route path='/' element={<Dashboard/>}/>
               
            </Routes>   
                
      </div>
    </>
  )
}

export default Navbar;
