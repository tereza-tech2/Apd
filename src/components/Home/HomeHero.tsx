import React from 'react'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'

type Props = {}

const HomeHero = (props: Props) => {
  return (
    <div className='flex flex-col md:flex-row md:space-x-8 pt-14 w-4/5 mx-auto  space-y-16 md:space-y-0 bg-white rounded-b-lg pb-8 md:pb-6 '>

            
            <Link to="Subwoofers" className='navCard'>

                <div className='absolute  drop-shadow-2xl top-[-25%] w-[70%] max-w-[230px] flex  '>
                    <img src="/SubwooferNavbar.svg" alt="Picture of a subwoofer" className='mx-auto' />
                </div>
                <span className='font-semibold tracking-wide '>Subwoofers</span>
                <button className='tracking-wider font-semibold text-[#979797] '>Shop</button>
            </Link>


            <Link to="/Reproductors" className='navCard'>

                <div className='absolute  drop-shadow-2xl top-[-25%] w-[70%] max-w-[230px]'>
                    <img src="/ReproductorNavbar.svg" alt="Picture of a Reproductor" className=' mx-auto' />
                </div>
                <span className='font-semibold tracking-wide'>Reproductors</span>
                <button className=' font-semibold text-[#979797] tracking-wider'>Shop</button>
            </Link>


            <Link to="/Invisibass" className='navCard'>
                <div className='absolute  drop-shadow-2xl top-[-25%] w-[70%] max-w-[230px]'>
                    <img src="/InvisibassNavbar.svg" alt="" className='mx-auto' />
                </div>
                <span className='font-semibold tracking-wide'>Invisibass</span>
                <button className='tracking-wider font-semibold text-[#979797] '>Shop</button>
            </Link>

        </div>
  )
}

export default HomeHero