import React from 'react';

function Pagination({ currentPage, changePageHandler }) {

    return (
        <div className="Pagination">
            <button onClick={() => changePageHandler(currentPage - 1)}>Prev</button>
            <span>Page {currentPage}</span>
            <button onClick={() => changePageHandler(currentPage + 1)}>Next</button>
        </div>
    );
}
export default Pagination;