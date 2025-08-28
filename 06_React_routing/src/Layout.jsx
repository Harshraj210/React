import React from 'react'
// layout like (footer header) should always show only the content changes with {Outlet}
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'




function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout