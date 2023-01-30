import React from 'react'
import { useParams } from 'react-router-dom'
import Products from '../components/Products';

// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import axios from 'axios'


const CategoryList = ({filters, sort}) => {
    // console.log(category, filters, sort)
    const {cat} = useParams();
    // console.log(cat, filters, sort)

  return (
    <>
      <div>{cat}</div>
      <Products />
    </>
  )
}

export default CategoryList