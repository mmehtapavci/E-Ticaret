import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

// Başlangıç durumu (initial state) tanımlanıyor.
// Ürünler listesi, seçili ürün ve yükleniyor bilgisi burada tutuluyor.
const initialState = {
    products: [], // Ürünlerin saklandığı dizi
    selectedProduct: {}, // Seçili ürün detaylarını tutmak için obje
    loading: false // Yüklenme durumunu takip etmek için boolean
};

const BASE_URL = "https://fakestoreapi.com/products"; // API çağrısı yapılır.

// Asenkron işlem için createAsyncThunk kullanılıyor.
// Tüm ürünleri API'den çeker ve verileri döndürür.
export const getAllProducts = createAsyncThunk("getAllProducts", async()=>{
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
})

// Redux slice tanımlanıyor.
// Bu slice, ürünle ilgili durumu ve işlemleri yönetir.
export const productSlice = createSlice({
    name: "product", // Slice adı
    initialState, // Başlangıç durumu
    reducers: {
        // reducers burada tanımlanabilir, fakat şu an kullanılmamış.
    },
    extraReducers: (builder) => {
        // Asenkron işlemler için durumları yönetmek üzere extraReducers kullanılır.
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true; // API isteği devam ederken yükleniyor durumu true yapılır.
        });
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false; // API isteği tamamlanınca yükleniyor durumu false yapılır.
            state.products = action.payload; // Gelen veri products dizisine atanır.
        });
    }
});

// Reducer'lar için export işlemi yapılır. (Şu an bir reducer tanımlanmadığı için boş.)
export const { } = productSlice.actions;

// Bu slice'ın reducer'ı dışa aktarılır ve store'da kullanılabilir.
export default productSlice.reducer;