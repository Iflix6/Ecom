import React from 'react'
import { logoDark } from '../assets'

const Header= () => {
  return (
    <div className="w-full h-20 bg-white font-titleFont border-b-[1px] border-b-gray-800 sticky top-0 z-50">
        <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
            <div>
                <img className="w-28" src={logoDark} alt='HomoLogo'  />
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Header