import React from 'react';
import TypeFilter from './TypeFilter';
import Pagination from './Pagination';

function Brewery(props) {
    const { brewery } = props;

    return (
        <li key={brewery.id}>
            <a target="_blank" href={`https://api.openbrewerydb.org/breweries/${brewery.id}`}>
                {brewery.name}
            </a> is a {brewery.brewery_type} brewery in {brewery.city}, {brewery.state}, {brewery.country}.
        </li>
    );
}

function Breweries() {
     //by default the list of breweries is empty and we're showing page 1
    const [breweries, setBreweries] = React.useState([])
    const [currentPage, setCurrentPage] = React.useState(1)
    const [filterType, setFilterType] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)
    //once the component is definitely being rendered on screen, load in the API data
    React.useEffect(() => {
        const filterParam = filterType === '' ? '' : '&by_type=' + filterType;

        console.log('getting ' + filterType + ' breweries on page number ' + currentPage)
        setIsLoading(true)

        fetch('https://api.openbrewerydb.org/breweries?per_page=50&page=' + currentPage + filterParam)
            .then(response => response.json())
            .then(jsonData => {
                setBreweries(jsonData)
                setIsLoading(false)
            })
    }, [currentPage, filterType])//we want to re-run this when the page or the filter type change

    const handleChangePage = (newPage) => {
        setCurrentPage(newPage)
    }

    const handleChangeFilter = (newFilter) => {
        setFilterType(newFilter)
        setCurrentPage(1)
    }

    return (
        <div className="Breweries componentBox">
            <h2>Breweries</h2>

            <TypeFilter selectedFilter={filterType} filterBreweryHandler={handleChangeFilter} />

            {isLoading ? <div>Loading breweries ...</div> :
                <ul className="hideBullets">
                    {breweries.map(brewery => (
                        <Brewery key={brewery.id} brewery={brewery} />
                    ))}
                </ul>
            }
            <Pagination currentPage={currentPage} changePageHandler={handleChangePage} />
        </div>
    );
}

export { Breweries as default, TypeFilter };
//moving the below out into a separate Brewery component and formatting the data better
//adding the full list of brewery types
// add a new component to filter the list by brewery type, or state?
//try moving the below out into a separate Brewery component and formatting the data better
//try moving the paging into its own component 


//extension activity: choose a different API from the list at https://docs.google.com/spreadsheets/d/15iDpjqyBkSse9wcN7vvQvORBvX8P_ivAjm-iKXp776Y/edit#gid=0 
//and implement either searching, sorting or paging (or all three!) keeping in mind the tips at https://react.dev/learn/thinking-in-react

//to export both a default component and some extras
//see https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export

