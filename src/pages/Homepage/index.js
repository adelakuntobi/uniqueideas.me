import React from 'react'
import { Navbar } from '../../components/Navbar'

export const Homepage = () => {
  return (
    <div className='container'>
      <header className='min-h-screen'>
        <Navbar />
        <div>
          <h1 className='text-5xl font-bold'>Passionately designing thoughtful, intuitive, and delightful experiences for all human.</h1>
          <p> HI, MY NAME IS <span className='text-white uppercase'>Ify</span>. A PRODUCT DESIGNER PASSIONATE ABOUT SOLVING complex issues by designing user-friendly digital products and web experiences.</p>
        </div>
      </header>
    </div>
  )
}
