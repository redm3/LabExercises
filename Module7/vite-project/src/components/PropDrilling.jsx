import { useState } from 'react';
import { places } from '../data/data';
import { getImageUrl } from '../utils/utils';

export default function PropDrilling() {
    const [isLarge, setIsLarge] = useState(false);
    const imageSize = isLarge ? 150 : 100;
    return (
      <>
      <div className="componentBox">
        <label>
          <input
            type="checkbox"
            checked={isLarge}
            onChange={e => {
              setIsLarge(e.target.checked);
            }}
          />
          Use large images
        </label>
        <hr />
        <List imageSize={imageSize} />
        </div>
      </>
    )
  }
  
  function List({ imageSize }) {
    const listItems = places.map(place =>
      <li key={place.id}>
        <Place
          place={place}
          imageSize={imageSize}
        />
      </li>
    );
    return <ul>{listItems}</ul>;
  }
  
  function Place({ place, imageSize }) {
    return (
      <>
        <PlaceImage
          place={place}
          imageSize={imageSize}
        />
        <h2>
          <b>{place.name}</b>
          {': ' + place.description}
        </h2>
      </>
    );
  }
  
  function PlaceImage({ place, imageSize }) {
    return (
      <img
        src={getImageUrl(place)}
        alt={place.name}
        width={imageSize}
        height={imageSize}
      />
    );
  }
  