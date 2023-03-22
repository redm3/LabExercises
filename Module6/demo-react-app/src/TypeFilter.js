import React from 'react';

function TypeFilter(props) {
    let types = ['micro','nano','regional','brewpub','large','planning','bar','contract','proprietor','closed']

    return (
        <div className="TypeFilter">
            <select name="filterType" value={props.selectedFilter} onChange={(e) => props.filterBreweryHandler(e.target.value)}>
                <option value="">Choose an option</option>
                {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                ))}
            </select>
        </div>
    )
}

export default TypeFilter;
