import React from "react";
import HomePhotoShoot from "./HomePhotoShoot";
import Homeinfo from "./Homeinfo";
import "./HomeMain.css";

function HomeMain(){
    return(
      <main className="home-main container">
        <Homeinfo />
        <HomePhotoShoot />
      </main>
    );
}

export default HomeMain;