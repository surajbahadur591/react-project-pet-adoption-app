import React from 'react'
import Pet from './Pet'

const Result = ({pets}) => {
  return (
    <div className=''>
        {/* {!pets.length ? (<h1>No Pets Found</h1>) : (
            <Pet key={pets.id} name={pets.name} city={pets.city} state={pets.state} 
            gender={pets.id} breed={pets.breed} image={pets.images}> </Pet>

        )} */}


        {!pets.length ? (<h1>No Pets Found</h1>) : ( pets.map( (pet) => {
            return (
                <Pet key={pet.id} name={pet.name} city={pet.city} state={pet.state} 
                gender={pet.id} breed={pet.breed} image={pet.images[0]}></Pet>
            )
            
        }) )}
        

    </div>
  )
}

export default Result