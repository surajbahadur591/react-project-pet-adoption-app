import React from 'react'

const Pet = (props) => {
  return (
    <div>

        <div> 
            <h1>{props.name}</h1>
            {/* type of animal  */}
            <h2>{props.image}</h2>
            <h2>{props.animal}</h2>
            <h2>{props.age}</h2>
            <h2>{props.weight}</h2>
            <h2>{props.location}</h2>
        </div>

    </div>
  )
}

export default Pet