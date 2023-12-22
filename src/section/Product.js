import React from 'react'
import ProductCard from '../workroom/JY/ProductCard'

function Product(props) {
  return (
    <ProductCard datasrc={props.datasrc}/>
  )
}

export default Product
