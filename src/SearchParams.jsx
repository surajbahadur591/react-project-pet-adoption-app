import React, { useState, useEffect } from "react";
import Result from './Result'
import Pet from "./Pet";
const ANIMALS = ['bird', 'cat', 'dog', 'rabbit']

const SearchParams = () => {
    

    
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("")
  const [pets, setPets] = useState([])

  useEffect( ()=> {
    requestPets()
  }, [] )
  
  async function requestPets() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}`)
    const json = await res.json();

    setPets(json.pets)
  }

  return (
    
      <div className="search-params">
        <form className="form-fix" onSubmit={ (e) => {
            e.preventDefault()
            requestPets()
        }}>
          <input
            onChange={(e) => {
              setLocation(e.target.value);
            }}

            id="location"
            value={location}
            placeholder="Location Ex : Canada"
          />

          <select name="" id="animal" value={animal} onChange={(e) => { setAnimal(e.target.value) }} >
            <option id=""></option>
            {ANIMALS.map((animal) => {
                return <option key={animal}>{animal}</option>
            })}
          </select>

          <button className="searchbutton-fix">Search</button>
        </form>

        {/* {pets.map( (pet) => {
            return (
                <Pet key={pet.id} name={pet.name} city={pet.city} state={pet.state} 
                gender={pet.id} breed={pet.breed} image={pet.images[0]}></Pet>
            )
            
        })} */}

        <Result pets={pets} />

      </div>
    
  );
    };

export default SearchParams;
