import React from 'react';

function Student(props) {
    const { id, name, location, age, pets, favColour, height } = props;
  
    return (
        <li key={id} className="student">
          <img src={`https://robohash.org/${name}?size=50x50`} alt={name} />
          <div className="student-details">
            <h3>{name}</h3>
            <p>Location: {location}</p>
            <p>Age: {age}</p>
            <p>Pets: {pets}</p>
            <p>Favorite Colour: {favColour}</p>
            <p>Height: {height}</p>
          </div>
        </li>
      );
    };
  

export default Student;