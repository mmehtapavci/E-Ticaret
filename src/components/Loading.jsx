import React, {useState} from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';

function Loading() {
    // Redux store'dan 'loading' durumunu alıyoruz
    const {loading} = useSelector((store) => store.product);

    return (
        // Yükleme durumu aktifse, arka planı (Backdrop) ve dönen yükleme çarkını (CircularProgress) göster
        <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
            open={loading} // 'loading' true ise açılır, false ise kapanır
        >
            <CircularProgress color="inherit" /> {/* Yükleme göstergesi */}
        </Backdrop>
    )
}

export default Loading
