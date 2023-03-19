import React, { Component, Fragment } from 'react'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeaturedProducts from '../components/home/FeaturedProducts'
import HomeTop from '../components/home/HomeTop'
import NewArrival from '../components/home/NewArrival'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <HomeTop />
        <FeaturedProducts />
        <NewArrival />
        <Categories />
        <Collection />
      </Fragment>
    )
  }
}

export default HomePage