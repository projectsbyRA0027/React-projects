import React from "react";
import photo1 from"../../images/1706794982418.webp";
import photo2 from "../../images/1706794982426.webp";
import photo3 from "../../images/1706794982434.webp";

import "./HomePhotoShoot.css";

function HomePhotoShoot(){
    return(
       <div className="photoshoot-container">
        <span className="model-photo_wrapper boy">
            <img src={photo1} className="model photo" />
        </span>
        <span className="model-photo_wrapper boy">
            <img src={photo2} className="model photo"/>
        </span>
        <span className="model-photo_wrapper female">
            <img src={photo3} className="model-photo"  />
        </span>
       </div>
    );
}

export default HomePhotoShoot;