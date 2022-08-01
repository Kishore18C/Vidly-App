import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService'
import MoviesTable from './moviesTable';
import Pagination from './common/pagination';
import {paginate} from '../utils/paginate'
import ListGroup from './common/listGroup'
import _ from 'lodash';
import SearchBox from './common/searchBox';


class Movies extends Component {

    state = {
        movies :[],
        genres : [],
        pageSize : 4,
        currentPage : 1,
        sortColumn : {path : 'title', order : 'asc'},
        searchQuery : "",
        selectedGenre : null

    }



    componentDidMount(){
        const genres = [{name : 'All Genre',_id : ''}, ...getGenres()]
        const movie = [...getMovies(),  ]
        this.setState({movies :  getMovies(), genres })
    }

    handleDelete = film => {
        let movies = this.state.movies.filter(m => m._id !== film._id)
        this.setState({movies})
    }

    handleLike = movie => {
        const movies = [...this.state.movies]
        const index = movies.indexOf(movie)
        movies[index] = {...movie}
        movies[index].liked = !movies[index].liked
        this.setState({movies})
    }

    handlePage = page => {
        this.setState({currentPage : page})
    }

    handleGenreSelect = genre => {
        this.setState({selectedGenre : genre, searchQuery : "" , currentPage : 1})
    }

    handleSort = sortColumn => {
        this.setState({sortColumn})
    }

    handleSearch = query => {
        this.setState({ searchQuery : query, selectedGenre : null, currentPage : 1})
    }

    click = p => {
        console.log(p)
    }

    getRenderMovies = () => {
        const {movies : allMovies, pageSize, currentPage, selectedGenre, sortColumn, searchQuery } = this.state

        let filter = allMovies 

        if(searchQuery) 
            filter = allMovies.filter( movie => movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()))
        else if(selectedGenre && selectedGenre._id)
            filter = allMovies.filter(movie => movie.genre._id === selectedGenre._id) 
        
        const sorted = _.orderBy(filter, [sortColumn.path], [sortColumn.order])

        const movies = paginate(sorted, currentPage, pageSize)

        return {totalCount : filter.length, data : movies}
    }

    render(){
        const {movies : allMovies, pageSize, currentPage, selectedGenre, genres, sortColumn } = this.state

        if(allMovies.length === 0)
           return <p> There are no Movies in the Database!</p>

        const {totalCount, data : movies} = this.getRenderMovies()
        return (
            <React.Fragment >
                <div className="row">
                    <div className="col-2">
                        <ListGroup items = {genres}
                        selectedItem = {selectedGenre} 
                        onItemSelect = {this.handleGenreSelect}
                        />
                    </div>

                    <div className="col">                            
                            <Link className='btn btn-primary btn-sm mb-3' to="/movies/new">New Movies</Link> 
                            <p> Showing  {totalCount} movies in the Database</p>
                            <SearchBox value={this.state.search} onChange = {this.handleSearch}/>
                            <MoviesTable 
                                movies = {movies}
                                onLike = {this.handleLike}
                                onDelete = {this.handleDelete}
                                onSort = {this.handleSort}
                                sortColumn = {sortColumn}
                                    />
                            <Pagination
                                 totalMovies = {totalCount}
                                 pageSize = {pageSize}
                                 currentPage = {currentPage}
                                 onClick = {this.handlePage}
                            />
                    </div>
                </div>
            </React.Fragment>
        )
  }

}
export default Movies


