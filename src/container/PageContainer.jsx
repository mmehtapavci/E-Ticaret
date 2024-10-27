import React from 'react'
import Container from '@mui/material/Container';

function PageContainer({children} ) {
  return (
    <Container style={{ backgroundColor: 'black' }}>{children}</Container>
  )
}

export default PageContainer