import { useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PageContainer>
        <Header />
      </PageContainer>  
    </>
  )
}

export default App
