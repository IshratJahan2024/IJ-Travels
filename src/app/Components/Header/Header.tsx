import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (

    <header className="bg-blue-300 py-6">
        <nav className="flex justify-between item-center px-6">
            <img src="/logo.png" alt="logo"
            className="w-20 h-20 rounded-full"/>

                <div className="text-5xl m-2 text-blue-950 text-center">IJ Travels</div>

                <ul className="flex gap-4 m-4 cursor-pointer font-black 1px">
                    <Link href="/" className="hover:text-blue-700">Home</Link>
                    <Link href="/aboutus" className="hover:text-blue-700">About Us</Link>
                    <Link href="/contactus" className="hover:text-blue-700">Contact Us</Link>
                    <Link href="/login" className="hover:text-blue-700">login</Link>
                    <Link href="/signup" className="hover:text-blue-700">SignUp</Link>
                    

                </ul>
      
   
    </nav>

    </header>
  )
}



export default Navbar
