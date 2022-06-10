import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import Thumb from './aloft.jpg';

function Likes() {
const [likes, changeLikes] = useState(0);


const likeClicker = () => {
    console.log("likes clicked");
    changeLikes((prevState) => prevState +1);
};
    
return (
    <>
    <Card.Link href="#" className="Likes">
        <Card.Img variant="top" src={Thumb} className="thumbnail" onClick={() => likeClicker()}/>
    </Card.Link> <span className="larger">{likes}</span>
    </>
)
};
export default Likes;