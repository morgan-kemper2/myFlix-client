import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './movie-view.scss';

export class MovieView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    /**  add a movie to favorites list*/
    addFavorite(movie) {
        let token = localStorage.getItem("token");
        let url =
          "https://findamovieflix.herokuapp.com/users/" +
          localStorage.getItem("user") +
          "/movies/" +
          movie._id;
    
        console.log(token);
    
        axios
          .post(url, "", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => {
            console.log(response);
            /**  window.open("/", "_self");*/
            alert("Added to favorites!");
          });
      }

    /** renders all of a single movie's information*/
    render() {
        const { movie } = this.props;

        if(!movie) return null;

        return(
            <Container className='center-md'>
            <div className='movie-view'>
                <img className='movie-poster' variant='sm' src={movie.ImageUrl}/>
                <div className='movie-title'>
                    <span className='h1'>{movie.Name}</span>
                 </div>
                <div className='movie-description'>
                    <span className='value'>{movie.Description}</span>
                </div>

                <div className='movie-genre'>
                    <span className='label'>Genre: </span>
                    <span className='value'>{movie.Genre.Name}</span>
                </div>
                <div className='movie-director'>
                    <span className='label'>Director: </span>
                    <span className='value'>{movie.Director.Name}</span>
                </div>
                <div className='links'>
                    <Link to ={'/'}>
                        <Button variant='link'>Return to All Movies</Button>
                        </Link>

                {/** links to view director information and genre information */}
                <Link to ={`/directors/${movie.Director.Name}`}>
                <Button variant='link'>View Director</Button></Link>
                <Link to ={`/genres/${movie.Genre.Name}`}>
                    <Button variant='link'>View Genre</Button>
                </Link>
                {/** button to add movie to favorites */}
                <Button variant='link' onClick={()=>this.addFavorite(movie)}>Add Movie to Favorites</Button>
                </div>
            </div>
            </Container>
        );
    }
}

MovieView.propTypes = {
    movie: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ImageUrl: PropTypes.string.isRequired,
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Bio: PropTypes.string.isRequired,
            Birth: PropTypes.string.isRequired
        })
    })
};