import React, {Component} from 'react';
import Table from './common/table';
import Like from './common/like';
import { Link } from 'react-router-dom';

class MoviesTable extends Component {

    columns = [ 
        {path : 'title' , lable : 'Title', content: movie =>  <Link className='link-style' to={`/movies/${movie._id}`}>{movie.title}</Link>},
        {path : 'genre.name' , lable : 'Genre'},
        {path : 'numberInStock', lable : 'Stock'},
        {path : 'dailyRentalRate', lable : 'Rate'},
        {key : 'Like', content : movie => (<Like liked = {movie.liked} 
                                                onClick = {() => this.props.onLike(movie)} />)},
        {key : 'Delete', content : movie => <button onClick = {() => this.props.onDelete(movie)} 
                                                    className="btn btn-danger btn-sml">Delete</button>}
    ]
   
    render() {
         const {movies, onSort, sortColumn} = this.props

    return ( <Table 
                    data = {movies}
                    columns = {this.columns}
                    sortColumn = {sortColumn}
                    onSort = {onSort}
                    
                />);
       
    }
}
 
export default MoviesTable;