import { useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Product from './components/Product'



function App() {

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Product />
      </PageContainer>
    </div>  
  )
}

export default App
