import React from 'react';

function SearchBox ({value, onChange}) {
    return ( 
        <input 
            className='form-label my-2'
            type="text"
            value={value} 
            placeholder='Search...' 
            onChange={event => onChange(event.currentTarget.value)}/>
     );
}

export default SearchBox ;