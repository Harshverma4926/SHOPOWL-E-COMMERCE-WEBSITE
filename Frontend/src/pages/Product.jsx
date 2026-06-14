import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

import BreadCrum from '@/components/BreadCrum/BreadCrum'
import ProductDisplay from '@/components/ProductDisplay/ProductDisplay'

const Product = () => {
  const { AllProducts } = useContext(ShopContext)
  const { productId } = useParams()

  const product = AllProducts.find(
    (e) => e.id === Number(productId)
  )

  if (!product) {
    return <h1>Product not found</h1>
  }

  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
    </div>
  )
}

export default Product