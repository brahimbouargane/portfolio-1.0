import React from 'react'
import SideNav from './SideNav'
import Header from './Header'
import Home from './Home'
import '@/app/globals.css'
import About from './About'
const Index = () => {
  return (
    <div className='home_home__XM4a6'>
        <SideNav />
        <main className='bg-slate-950 '>
         <Header /> 
         <Home />
         <About />
        </main>
    </div>
  )
}

export default Index