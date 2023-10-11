import React from 'react'
import Header from '../components/Commons/Header'
import {useSelector} from 'react-redux'
import SeeProduct from '../components/Commons/SeeProduct'
import HomeHero from '../components/Home/HomeHero'
import Footer from '../components/Footer'
import HomeHeroFour from '../components/Home/HomeHeroFour'

type Props = {}

const Invisibass = (props: Props) => {
  const articles = useSelector((store: any) => {
    return store.reducerArticles;
  });
  
  return (
    <>
        <Header pageTitle='Invisibass'/>
        <div className='max-w-[1300px] mx-auto'>
        <SeeProduct title={articles[5]?.title} description={articles[5]?.description} img={articles[5]?.img} alt={articles[5]?.alt} link="/Invisibass/yx1" direction='md:flex-row'    />
        <HomeHero/> 
        <HomeHeroFour/>
        </div>
        <Footer/>  
    </>
  )
}

export default Invisibass