import React from "react";
import {FaUserAlt} from "react-icons/fa";

const MobileNav =() =>{
    return( <div className="flex w-full items-center justify-between lg:hidden">
        <div className="w-28 ">
            <img className="w-full height-full" src="https://images.squarespace-cdn.com/content/v1/5e5040fec0a85f60bac5f3af/393a5193-7f70-4b59-b4b1-bc0eb3740b90/Greengage+0520+logo_+%28002%29.png" alt="logo" />
        </div>
        <div className="hidden md:flex flex bg white lg:gap-12 items-center ">
            <div className="nav_item  px-3 gap-2 text-gray-700 hover:border">
                <button>Home</button>
            </div>
            <div className="nav_item  px-3 gap-2 text-gray-700 hover:border">
                <button>Services</button>
            </div>
            <div className="nav_item  px-3 gap-2 text-gray-700 hover:border">
                <button>About Us</button>
            </div>
            <div className="nav_item  px-3 gap-2 text-gray-700 hover:border">
                <button>Contact Us</button>
            </div>
            
            
        </div>
        <div className="flex items-center gap-3">
            <button className="bg-gray-700 text-white py-2 px-3 rounded-full">Sign up</button>
        <span className="border p-2 border-gray-600 text-gray-400 rounded-full"><FaUserAlt/></span>
        </div>
    </div>
    );
};

const LargeNav = () => {
 return  <>
 <div className="hidden lg:inline container px-20 mx-auto">
    <div className="hidden gap-4  w-full items-center justify-between  lg:flex  " >
        <div className="w-28 ">
            <img className="w-full height-full" src="https://images.squarespace-cdn.com/content/v1/5e5040fec0a85f60bac5f3af/393a5193-7f70-4b59-b4b1-bc0eb3740b90/Greengage+0520+logo_+%28002%29.png" alt="logo" />
        </div>
        <div className=" flex bg white lg:gap-12 items-center ">
            <div className="nav_item  px-3 gap-2 text-gray-700 ">
                <button className="hover:text-blue-900">Home</button>
            </div>
            <div className="nav_item  px-3 gap-2 text-gray-700 hover:border">
                <button className="hover:text-blue-900">Services</button>
            </div>
            <div className="nav_item  px-3 gap-2 text-gray-700 hover:border">
                <button className="hover:text-blue-900">About Us</button>
            </div>
            <div className="nav_item  px-3 gap-2 text-gray-700 hover:border">
                <button className="hover:text-blue-900">Contact Us</button>
            </div>
            
            
        </div>
        <div className="ml-20 gap-4 flex gap-2 ">
            <button className="text-gray-500 text-xl hover:text-gray-800">Login</button>
            <button className="text-gray-500 text-xl hover:text-gray-800">signup</button>
        </div>
    </div>
  </div>
 </>
}




const Navbar = () => {
    return(
    <>
    <nav className="p-3 flex bg-white shadow-md sticky top-0 w-full items-center ">
            <MobileNav />
            <LargeNav />
    </nav>
    </> 
    )
};

export default Navbar;