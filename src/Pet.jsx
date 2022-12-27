import React from "react";
      
const Pet = (props) => {

  let SEX = '';
  if (props.gender % 2 == 0) {
    SEX = 'Male'} else {
    SEX = 'Female'}

  return (
    <div className="pet-card">
      <div className="">
        
        <h1>{props.name}</h1>
        <img src={props.image} alt="" width='120px' />
        <h3>{props.breed}</h3>

        <h3>{SEX}</h3>
        
        <h2>  {props.city}, {props.state}</h2>
        
        
        {/* type of animal  */}
        {/* <h2>{props.animal}</h2> */}
      </div>
    </div>
  );
};

export default Pet;
