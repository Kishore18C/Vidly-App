import React from 'react';

function DropDown({name, lable, error, options, ...rest}) {
     
        return ( <div>
            <label htmlFor={name} className="form-label">{lable}</label>
            <select  className="form-control" 
                    name={name} 
                    id={name}
                    {...rest} >
                        
            <option id="datalistOptions" / >

            {options.map( option => (<option key={option._id} value={option._id} >{option.name}</option>))}

            </select>
            {error && <div className="alert alert-danger">{error}</div>}
            </div> );

    }

 
export default DropDown;
