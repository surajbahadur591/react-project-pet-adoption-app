import React from "react";
import Pet from "./Pet";

const Result = ({ pets }) => {
  return (
    <div className="underline-fix">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              id={pet.id}
              key={pet.id}
              name={pet.name}
              city={pet.city}
              state={pet.state}
              gender={pet.id}
              breed={pet.breed}
              image={pet.images[0]}
            ></Pet>
          );
        })
      )}
    </div>
  );
};

export default Result;
