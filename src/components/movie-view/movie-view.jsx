import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export class MovieView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }


    render() {
        const { movie } = this.props;

        if(!movie) return null;

        return(
            <Container>
            <div className='movie-view'>
                <img className='movie-poster' src={movie.ImageUrl}/>
                <div className='movie-title'>
                    <span className='label'>Title: </span>
                    <span className='value'>{movie.Name}</span>
                 </div>
                <div className='movie-description'>
                    <span className='label'>Description: </span>
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
                <Link to ={`/director/${movie.Director.Name}`}>
                <Button variant='link'>Director</Button></Link>
                <Link to ={`/genre/${movie.Genre.Name}`}>
                    <Button variant='link'>Genre</Button>
                </Link>
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
        // Genre: PropTypes.shape({
        //     Name: PropTypes.string.isRequired,
        //     Description: PropTypes.string.isRequired
        // }),
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Bio: PropTypes.string.isRequired,
            Birth: PropTypes.string.isRequired
        })
    })
};