import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Likes from './likes';
import DeletePost from './DeletePost';

import './App.css';

function View(props){
console.log(props.todos);

  const buildCards = () =>  {
    return props.todos.map((current) => (
    

      <Card style={{ width: '300px' }}>
  <Card.Img variant="top" src={`${current.imgurl}`} className='thumbnail'/>
  <Card.Body>
    <Card.Title>{current.posterName}</Card.Title>
    <Card.Text>
      Post ID: {current.id} 
    </Card.Text>
    <Card.Text>
    {current.postContent}
    </Card.Text>
    <Card.Footer>
      <Likes />
      <br />
    <DeletePost />
    </Card.Footer>
  </Card.Body>
</Card>
    )
    )
  }

    return (
      <>
      <Container>
      <Row xs="auto">
        {buildCards()}
        </Row>
        </Container>
      </>
    );

}
export default View;
