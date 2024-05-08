import React from 'react'

const NavBar = () => {
  return (
   <nav className="fixed top-0 w-full bg-opacity-50 bg-white backdrop-filter backdrop-blur-lg py-4 shadow-lg">
    <div className="flex justify-between items-center"> 
     <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-amber-600">CHATGPT</h1>
        </div>
     </div>
    </div>
   </nav>
  )
}

export default NavBar
