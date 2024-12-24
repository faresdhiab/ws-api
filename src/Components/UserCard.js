import React from 'react'
import { Button, Card } from 'react-bootstrap'

const UserCard = ({user}) => {
  return (
    <div><Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://blog.flatchr.io/hs-fs/hubfs/étudiante.png?width=2240&name=étudiante.png" />
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>{user.username}</Card.Text>
      <Card.Text>{user.email}</Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card></div>
  )
}

export default UserCard