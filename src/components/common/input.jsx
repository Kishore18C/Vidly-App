import React from 'react';

function Input ({name, lable, error, ...rest}) {
    return ( <div >
        <label htmlFor={name} className="form-label">{lable}</label>
        <input 
            name={name} 
            className="form-control" 
            id={name}
            {...rest}
             />
             {error && <div className="alert alert-danger">{error}</div>}
        </div> );
}
 
export default Input;


