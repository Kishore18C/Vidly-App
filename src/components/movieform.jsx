import React from 'react';
import { getGenres } from '../services/fakeGenreService';
import { useParams, useNavigate, navigate } from 'react-router-dom';
import Form from './common/form';
import joi from 'joi-browser';
import { saveMovie } from './../services/fakeMovieService';

class MovieForm extends Form {
    state = {
        data : { title : "", genreId : "", numberInStock : "", dailyRentalRate : ""},
        errors : {},
        genre : []
    }

    componentDidMount(){
        const genre = getGenres()
        this.setState({ genre })


    }

    schema = {
        _id : joi.string(),
        title : joi.string().required().label("Title"),
        genreId : joi.string().required().label("Genre"),
        numberInStock : joi.number().min(0).max(100).required().label("Number in Stocks"),
        dailyRentalRate : joi.number().min(0).max(10).required().label("Rate")
    }
    
    doSubmit = () => {
        saveMovie(this.state.data)
        
        }

        
    render() {
        // let {_id} = useParams()
        // let navigate = useNavigate()
        return ( <div>
            {/* <h1>Movies Form {_id}</h1> */}
            <h1>Movies Form </h1>
    
            <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderDropdown("genreId", "Genre", this.state.genre)}
                    {this.renderInput("numberInStock", "Number in Stocks")}
                    {this.renderInput("dailyRentalRate", "Rate")}
                   
                    {this.renderButton('Save')}
            </form>
        </div> );

    }
}

// function Navigate() {
//     let navigate = useNavigate()
//         return navigate("/movies",{replace : true})
        
// }

export default MovieForm;