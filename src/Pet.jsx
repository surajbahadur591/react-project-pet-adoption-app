import React from "react";
import { Link } from "react-router-dom";

const Pet = (props) => {
  let SEX = "";
  // logic to convet id to gender of animal
  if (props.gender % 2 === 0) {
    SEX = "Male";
  } else {
    SEX = "Female";
  }

  return (
    <div className="pet-card">
      <Link to={`/details/${props.gender}`}>
        <div className="underline-fix">
          {/* <h5>{props.gender}</h5> */}
          <h1>{props.name}</h1>
          <img src={props.image} alt="" width="120px" />
          <h3>{props.breed}</h3>

          <h3>{SEX}</h3>

          <h2>
            {" "}
            {props.city}, {props.state}
          </h2>

          {/* type of animal  */}
          {/* <h2>{props.animal}</h2> */}
        </div>
      </Link>
    </div>
  );
};

export default Pet;
