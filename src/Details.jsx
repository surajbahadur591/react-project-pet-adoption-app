import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import fetchPet from './fetchPet';
import location from './shared/location.svg'
import Carousel from './Carousel';

const Details = () => {
const {id} = useParams();
// useQuery should be below id 
// param 1 : cacheid name 
// param 2 : id 
// param 3 : call function 

const results = useQuery(["details", id], fetchPet);

  let SEX = "";
  // logic to convet id to gender of animal
  if (id % 2 === 0) {
    SEX = "Male";
  } else {
    SEX = "Female";
  }
if (results.isLoading) {
  return ( 
    <div className='loading-pane'>
      <h2 className='loader'>.</h2>
    </div>
  )
}

  const pet = results.data.pets[0];

  return (
    <div className='details'>
      <Carousel images={pet.images}/>
      <div>
        <h2 className='details-font'>{pet.name}</h2>
        <h2 className='details-font' > <img src={location} height='20px' alt="" /> {pet.city}, {pet.state} </h2>
        <h2 className='details-font' >Breed - {pet.breed}</h2>
        <h2 className='details-font'>Sex - {SEX}</h2>
        <h2 className='details-font' >Age - {pet.name.length}</h2>
        
        {/* <img src={pet.images[0]} alt="" width="250px" /> */}
        <button className='searchbutton-fix' > <b> Adopt {pet.name}!!</b></button>
        
        <h4>{pet.description}</h4>
      </div>
    </div>
  )
}

export default Details