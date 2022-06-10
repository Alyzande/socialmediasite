import React from "react";
import { Button } from 'react-bootstrap';

function DeletePost () {

        
    const deletePost= () => {
        console.log("delete clicked");
        //remove entire post
        //if id = this id 
        //delete
        //else "lolno"
    };
        
    return (
        <>
        <Button variant="danger" size="sm" onClick={() => deletePost()}>Delete this</Button>
        </>
    )
    };
    export default DeletePost;
