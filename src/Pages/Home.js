import React from 'react'
import BlogSection from '../Components/Home/BlogSection'
import Categories from '../Components/Home/Categories'
import TourBlog from '../Components/Home/TourBlog'
import MainSlider from '../Components/Slider/MainSlider'

const Home = () => {
  return (
    <>
    <MainSlider/>
    <Categories/>
    <TourBlog/>
    </>
  )
}

export default Home