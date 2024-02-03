import React from "react";
import "./Homeinfo.css";
import { Link } from "react-router-dom";

function Homeinfo(){
    return(
      <article className="home-info">
        <div className="home-info">
          <h2>
            Experience the height of fashion with our exquisite desiner pieses.
          </h2>
          <p>
          Where style, sophistication, exclusivity is the forefront of our
          collection. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellat quaerat nostrum quia nam earum, libero, expedita impedit
          delectus provident quo eveniet.
          </p>
        </div>
        <button className="explore-cloting_btn">
            <Link to="explore/all">Discover Our Products</Link>

        </button>
      </article>
    );
}

export default Homeinfo;