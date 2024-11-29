import React from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';

function ProductDetails() {
  // Product jsx den gönderilen id'yi useParams ile yakalıyoruz.
  const { id } = useParams(); 
  const { products, selectedProduct } = useSelector((store)=>  store.product );

  const dispatch = useDispatch();

  useEffect(()=>{
    getProductById();
  } ,[] )

  const getProductById = () =>{
    products && products.map((product)=>{
      if(product.id == id){
        dispatch(setSelectedProduct(product));
      }
    })
  }

  return (
    // id'yi yakalayıp ekranda gösterelim.
    <div>{selectedProduct.title} </div>
  )
}

export default ProductDetails