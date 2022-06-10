import React, {useState} from 'react';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';



function Add(props){
  
  const [formValues, changeFormValues]=useState({
    id:0,
    posterName:"",
    postContent:"",
    imgurl:"",
  });


  toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

  const handleChange= (event) => {
    const newState={...formValues};
    newState[event.target.name] = event.target.value;
    changeFormValues(newState)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formValues.imgurl);
    props.onSubmit(formValues.id, formValues.posterName, formValues.postContent, formValues.imgurl);
    toastr["success"]("Post added", "Success")
    changeFormValues({
      id: 0,
      posterName:"",
      postContent:"",
      imgurl:"",
    })
  }

  return (
      <div>
        <Form onSubmit={(event) => submitHandler(event)}>
          <Form.Group controlId="userID">
            <Form.Label> Post ID</Form.Label>
            <Form.Control 
              name="id" 
              type="number"
              value={formValues.id}
              onChange={(event)=>handleChange(event)} 
            />
          </Form.Group>
          
          <Form.Group controlId="posterName">
            <Form.Label> Name</Form.Label>
            <Form.Control 
              name="posterName" 
              type="text"
              value={formValues.posterName}
              onChange={(event)=>handleChange(event)} 
            />
          </Form.Group>

          <Form.Group controlId="postContent">
            <Form.Label> Post Content</Form.Label>
            <Form.Control 
              name="postContent" 
              type="text"
              value={formValues.postContent}
              onChange={(event)=>handleChange(event)}  
            />
          </Form.Group>

          <Form.Group controlId="imgurl">
            <Form.Label> Image URL</Form.Label>
            <Form.Control 
              name="imgurl" 
              type="text"
              value={formValues.imgurl}
              onChange={(event)=>handleChange(event)}  
            />
          </Form.Group>

          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
  );

}
export default Add;
