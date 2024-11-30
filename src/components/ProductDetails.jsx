import React from 'react'; // React'i import ediyoruz
import { useDispatch } from 'react-redux'; // Redux'tan veri göndermek için useDispatch hook'unu import ediyoruz
import { useParams } from 'react-router-dom'; // URL'deki parametreleri almak için useParams hook'unu kullanıyoruz
import { setSelectedProduct } from '../redux/slices/productSlice'; // Redux action'ını kullanmak için setSelectedProduct'i import ediyoruz
import { useSelector } from 'react-redux'; // Redux'taki verileri okumak için useSelector hook'unu import ediyoruz
import { useEffect } from 'react'; // React'ın useEffect hook'unu import ediyoruz (side-effect işlemleri için)
import '../css/ProductDetails.css';

function ProductDetails() {
  const { id } = useParams(); // URL parametresinden gelen "id" bilgisini alıyoruz
  
  const { products, selectedProduct } = useSelector((store) => store.product); // Redux store'dan ürünler ve seçili ürünü alıyoruz

  const { price, image, title, description } = selectedProduct; // Seçili üründen bazı bilgileri destructuring ile çekiyoruz

  const dispatch = useDispatch(); // Redux store'a action dispatch etmek için useDispatch hook'unu kullanıyoruz

  useEffect(() => {
    getProductById(); // Belirtilen id'ye göre ürünü bul ve seçili ürüne ata
  }, []); // [] bağımlılık dizisi: component ilk render olduğunda çalışır

  const getProductById = () => {
    products && products.map((product) => { // Ürünler varsa, her ürünü dolaşıyoruz
      if (product.id == id) { // Eğer ürünün id'si URL'deki id'ye eşitse, ürünü seçili olarak ayarlıyoruz
        dispatch(setSelectedProduct(product)); // Redux store'a seçili ürünü dispatch ediyoruz
      }
    });
  };

  return (
    <div className='detail-image' >
      <div>
        <img src={image} className='detailimage-card' alt="" />
      </div>
      <div>
        <h1 className='detailtitle'> {title} </h1>
        <h3 className='detaildescription'>{description} </h3>
        <h1 className='detailprice' > {price} </h1>
      </div>
    </div> // Seçili ürünün başlığını ekranda gösteriyoruz
  );
}

export default ProductDetails;
