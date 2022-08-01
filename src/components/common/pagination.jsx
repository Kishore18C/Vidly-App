import React from 'react';
import _ from 'lodash'

const Pagination = ({totalMovies, pageSize, currentPage, onClick}) => {

    const pageCount = Math.ceil(totalMovies / pageSize)
    if (pageCount === 1) return null
    const pages = _.range(1,pageCount + 1)

    return ( <nav>
        <ul className="pagination">
            {pages.map( page => (
                <li key = {page} className={currentPage === page ? "page-item active" : "page-item"}>
                    <a  className="page-link" onClick = {() => onClick(page)}>{page}</a></li>))
                    }
        </ul>
            
    </nav> );
}
 
export default Pagination;