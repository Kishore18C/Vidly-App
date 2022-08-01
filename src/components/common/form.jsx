import React, { Component} from 'react';
import joi from 'joi-browser'
import Input from './input';
import DropDown from './dropdown';

class Form extends Component {
    state = { 
        data : {},
        errors : {},
       
     } 

     validate = () => {
        const {error} = joi.validate(this.state.data, this.schema, {abortEarly : false})
        
        if(!error) return null
        
        const errors = {}
        for (let item of error.details)
            errors[item.path[0]] = item.message
        return errors
    }

    validateProperty = ({name, value}) => {
        const obj = {[name] : value}
        const schema = { [name] : this.schema[name]}

        const {error} = joi.validate(obj, schema)
        return error ? error.details[0].message : null
    }

    handleChange = ({currentTarget : input}) => { 
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(input)
        if(errorMessage) errors[input.name] = errorMessage
        else delete errors[input.name]
        
        const data = {...this.state.data}
        data[input.name] = input.value

        this.setState({data, errors} )     
    }

    handleSubmit = event => {
        event.preventDefault()
   
        let errors = this.validate() 
        this.setState({errors : errors || {} })
        
        if(errors) return
        this.doSubmit()     
    }

    renderInput(name, lable, type = 'text'){
        const {data, errors} = this.state
        return(
        <Input 
            name={name} 
            value={data[name]} 
            lable={lable}
            type={type}
            onChange={this.handleChange} 
            error={errors[name]}/>)
    }

    renderDropdown(name, lable, options, type= "text"){
        const {data, errors} = this.state
        return(
        <DropDown 
            name={name} 
            value={data[name]} 
            lable={lable}
            options={options}
            type={type}
            onChange={this.handleChange} 
            error={errors[name]}
           />)
    }

    renderButton(lable) {
        return (
                <button 
                    disabled = {this.validate()}
                    className="btn btn-primary mt-2">{lable}</button>)
    }

}
 
export default Form;