import React from 'react'; // React kütüphanesini kullanabilmek için import ediyoruz
import { useEffect } from 'react'; // Bileşen yüklendiğinde bir işlem yapmak için gerekli olan useEffect hook'unu getiriyoruz
import { useDispatch, useSelector } from 'react-redux'; // Redux'taki verilere erişmek ve değişiklik yapmak için kullanılır
import { getAllProducts } from '../redux/slices/productSlice'; // Ürünleri Redux'tan almak için gerekli olan action'ı getiriyoruz
import Product from './Product'; // Her ürünü göstermek için kullanılacak alt bileşeni getiriyoruz

function ProductList() {
  const dispatch = useDispatch(); // Redux'a veri göndermek için kullanıyoruz (örneğin: ürünleri almak)

  // Redux'taki ürünler state'ine erişiyoruz
  const { products } = useSelector((store) => store.product);

  // Bileşen ilk kez yüklendiğinde çalışacak kod
  useEffect(() => {
    dispatch(getAllProducts()); // Redux'a "Ürünleri getir" diye bir mesaj gönderiyoruz
  }, []); // [] boş dizi: Bu kod sadece bir kez, bileşen yüklendiğinde çalışır

  return (
    // Ürünleri içeren ana kapsayıcı
    <div className='flex-row productlist'>
      {
        // Eğer ürünler varsa, her bir ürünü ayrı ayrı ekranda göster
        products && products.map((product) => (
          // Her bir ürünü Product bileşeni ile oluştur ve ekrana yerleştir
          <Product key={product.id} product={product} />
        ))
      }
    </div>
  );
}

export default ProductList; // Bu bileşeni başka yerlerde kullanmak için dışa aktarıyoruz
