import React, {useState, useEffect} from 'react';
import {Routes,Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './App.css';
import View from './View'
import Add from './Add';
import SMLogo from './smlogo.jpg';
import Button from 'react-bootstrap/Button'


function App(){
  const [todos, changeTodos] = useState([])

  const updatePosts = (id,posterName, postContent,imgurl) => {
     const item ={id, posterName, postContent, imgurl};
    localStorage.setItem("list", JSON.stringify([...todos, item]))
    changeTodos((state)=> [...state, item]);
  }

  const deleteAllposts = () => {
    localStorage.setItem("list", JSON.stringify([]));
    changeTodos([]);
  }

  useEffect(() => {
    const listContents =localStorage.getItem("list");
    changeTodos(JSON.parse(listContents)||[])
  },[])

    return (
      <div><Container>
        <Navbar bg="light" expand="md">
        <Navbar.Brand>
        <Link to="/">
          <img src={SMLogo} alt="SM logo"/>
          </Link>
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/view">View</Link>
              <Link className="nav-link" to="/add">Add</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </Container>

        <Container>
          <Routes>
            <Route path="/" element={
              <View todos={todos}/>
            } />
            
            <Route path="/view" element={
              <View todos={todos}/>
            } />
            
            <Route path="/add" element={
              <Add  onSubmit={(id,posterName,postContent,imgurl) =>
              updatePosts(id,posterName,postContent,imgurl)} />
            } />
           </Routes>
<br />
        <Button variant="outline-danger" onClick={() => deleteAllposts()}>Nuke</Button>
        </Container>
      </div>
    );

}
export default App;
