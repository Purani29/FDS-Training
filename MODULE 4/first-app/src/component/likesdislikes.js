import { useState } from "react";
import traffic from '../image.png';
function LikesDislikes(){
    const [Likes,setlikes] = useState(0);
    const [Dislikes,setDislikes] =useState(0);
    const handleLikes = () => {
        setlikes(Likes + 1);
    };
    const handleDislikes = () =>{
        setDislikes(Dislikes + 1);
    };
    return(
        <div>
         <center>
            <h1> Likes & Dislikes Component</h1>
            <img src={traffic} alt="traffic"/> <br/>
            <button onClick={handleLikes}>Like</button>&nbsp;&nbsp;&nbsp;
            <button onClick={handleDislikes}>Dislikes</button> <br/>
            <p>Likes :{Likes}.Dislikes :{Dislikes}</p>
        </center>

        </div>
    );

}
export default LikesDislikes;