import React from 'react'
import Carousel from './carousel'
import List from './list'
import Footer from './footer'
import Header from './header'
import 'flowbite';

export default function Example2() {
  return (
    <div>
        <Header/>
        <Carousel/>
        <List/>
        <Footer/>
    </div>
  )
}
