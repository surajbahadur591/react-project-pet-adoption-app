import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import fetchPet from './fetchPet';


const Details = () => {
const {id} = useParams();
// useQuery should be below id 
// param 1 : cacheid name 
// param 2 : id 
// param 3 : call function 
const results = useQuery(["details", id], fetchPet);

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
      <div>
        <h1>{pet.name}</h1>
        <h2>{pet.animal} - {pet.breed} - {pet.city}, {pet.state} </h2>
        <img src={pet.images[0]} alt="" width="200px" />
        <h3>{pet.description}</h3>
        <button>Adopt {pet.name}</button>
      </div>
    </div>
  )
}

export default Details