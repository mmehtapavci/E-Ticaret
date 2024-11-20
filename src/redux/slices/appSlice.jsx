import { configureStore, createSlice } from '@reduxjs/toolkit'

// Başlangıç durumu (initial state) tanımlanıyor.
// Şu an sadece 'loading' bilgisi içeriyor.
const initialState = {
    loading : false // Yüklenme durumunu takip etmek için boolean
}

// Redux slice tanımlanıyor.
// Bu slice, uygulama genel durumu için kullanılacak.
export const appSlice = createSlice({
    name : "app", // Slice adı
    initialState, // Başlangıç durumu
    reducers:{
    // reducers burada tanımlanabilir, fakat şu an kullanılmamış
    },
    extraReducers:(builder)=>{
    // Asenkron işlemler için ek durumlar tanımlanabilir, fakat şu an boş bırakılmış
    }
})

// Reducer'lar için export işlemi yapılır. (Şu an bir reducer tanımlanmadığı için boş.)
export const {  } = appSlice.actions

// Bu slice'ın reducer'ı dışa aktarılır ve store'da kullanılabilir.
export default appSlice.reducer