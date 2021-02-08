import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';

import './movie-card.scss';

export class MovieCard extends React.Component {
    render () {
        const { movie } = this.props;

        return (
            <Card style={{ width: '16rem'}}>
                <Card.Img variant='top' src={movie.ImageUrl}/>
                <Card.Body>
                    <Card.Title variant='lg'>{movie.Name}</Card.Title>
                    <Card.Text>{movie.Description}</Card.Text>
                    <Link to ={`/movies/${movie._id}`}>
                    <Button variant='link'>View Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        );
    }
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ImageUrl: PropTypes.string.isRequired
    }).isRequired,
};