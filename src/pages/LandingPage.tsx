import { useEffect, useState } from 'react'
import MenuBar from '../components/MenuBar'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Footer from '../components/Footer'

const LandingPage = () => {

  const [products,setProducts] = useState([])
  const [search , setSearch] = useState("")
  const [menu , setMenu] = useState('')


  const fetchProducts = ()=>{ 
    fetch('https://fakestoreapi.com/products')   //https://fakestoreapi.com/
            .then(res=>res.json())
            .then(json=>setProducts(json))
    }

  useEffect(()=>{
    fetchProducts()
  },[])

  return (
    <>
      <Navbar setSearch={setSearch}/>
      <MenuBar setMenu={setMenu}/>
      <Home  products = {products} search={search} menu={menu}/>
      <Footer/>
    </>
  )
}

export default LandingPage