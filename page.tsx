
import React from 'react'
// import Header from './components/Header/Header'
// import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Products from './components/Home/Products';
import Blog from './Blog/page';
import Latest from './components/Home/Latest';
import Contact from './contact/page';
import About from './About/page'
import Footer from "./components/Footer/Footer";

export default function page() {
  return (
    <div>

{/* <Header/>
<Navbar/> */}
<Home/>
<Products/>
<Latest/>
<Blog/>
<Contact/>
<About/>
<Footer/>




    </div>
  )
}
