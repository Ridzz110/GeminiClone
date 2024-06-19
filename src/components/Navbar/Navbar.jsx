import React from 'react';
import gemini_icon from '../../assets/gemini_icon.png';
import pfp from '../../assets/Tao Saotome.jfif';

const Navbar = () => {
    return(
        <>
        <div className="fixed z-10 font-noto top-0 left-0 right-0 bg-white shadow-md flex justify-between items-center px-8 py-4">
            <div className='flex justify-between items-center ml-10'>
            <p className='text-xl'>Gemini</p>
            <svg width="20" height="15" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <polygon points="50,80 20,20 80,20" fill="black" />
            </svg>
            </div>
            <div className='flex justify-between items-center lg:w-64 w-42'>
            <div className='bg-sidebar_circle_grey hover:bg-hovered_grey flex py-1 lg:px-4 px-3 mr-2 justify-between items-center rounded-lg'>
            <img className=' h-8' src={gemini_icon} alt="gemini logo"/>
                <button className='lg:text-sm text-xs'>Try Gemini Advanced </button>
            </div>
            <img className='h-10 rounded-full' src={pfp} alt="profile picture"/>
            </div>

        </div>
        </>
    )
}
export default Navbar;