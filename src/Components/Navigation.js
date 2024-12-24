import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Navigation = () => {
  return (
    <div><Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
    </Container>
  </Navbar>

</div>
  )
}

export default Navigation