import React, { useEffect } from 'react';
import {useDispatch , useSelector }from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice';

function ProductList() {
  const dispatch = useDispatch();
  const {products} = useSelector((store)=> store.product)

  useEffect(() => {
    dispatch(getAllProducts)
  }, []);

  return (
    <div>
      {
        products && product.map((product) =>(

        ))
      }
    </div>
  );
}

export default ProductList;
