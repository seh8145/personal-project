import React from 'react';
import Carousel from "../components/layout/carousel"
import Banner from "../components/layout/banner"
import Layout from "../components/layout/layout"

const HomePage = () => {
  return (
      <Layout>
      <Banner />
      <Carousel />
      </Layout>     
  )
}

export default HomePage;