import React from 'react'
import '../css/Product.css';


function Product({ product }) {
  const{ id , price , image , title , description} = product;
    return (
    <div  className='card'>
        <img className='image' src={image} alt="" />
        <div>
          <p className='title' >{title}</p>
          <h3 className='price' >{price} ₺</h3>
        </div>
        <div className='flex-row' >
          <button className='detail-buton' >Detayına Git</button>
        </div>
    </div>
  )
}

export default Product