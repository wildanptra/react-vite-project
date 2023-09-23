import { useState } from "react";
import Button from "./Button";

const styleMarginButton = {
    margin: '10px',
    padding: '5px',
}

export default function LikesButton(){
  
    const [likes, setLikes] = useState(0);
  
    function handleLikes(){
        setLikes(likes + 1);
    }
  
    return (
        <>
            <Button text={`Like (${likes})`} style={styleMarginButton} handle={handleLikes}/>
        </>
    )
}