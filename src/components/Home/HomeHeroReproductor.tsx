import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const HomeHeroReproductor = (props: Props) => {
  return (
    <div className='rounded bg-[#D87D4A] w-4/5 flex items-center justify-around mx-auto
     text-white lg:justify-around pb-6 '>

    <div className='text-white lg:bg-[url("/ReproductorNavbar.svg")] bg-no-repeat bg-[center_50px] bg-contain lg:w-[50%] h-[400px] '>

    </div>
    <div className='lg:w-2/5 space-y-8'>
      <img src="/ReproductorNavbar.svg" alt="Picture of a reproductor" className='mx-auto w-[25%] lg:hidden' />
      <h2 className='text-center font-bold text-4xl lg:text-5xl lg:text-left'>
        ZX9 SPEAKER
      </h2>
      <p className='text-center lg:text-left text-md '>
        Upgrade to premium reproductors that are phenomenally built to deliver truly remarkable sound.
      </p>
      <div className='flex'>
        <Link to="/Reproductors/zx9" className='text-white bg-black lg:text-left mx-auto mt-4 px-4 py-2 hover:bg-orange-700 transition-all lg:mx-0'>
          SEE PRODUCT
        </Link>
      </div>
    </div>

  </div>
  )
}

export default HomeHeroReproductor