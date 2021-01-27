import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class MovieCard extends React.Component {
    render () {
        const { movie, onClick } = this.props;

        return (
            <Card style={{ width: '16rem'}}>
                <Card.Img variant='top' src={movie.ImageUrl}/>
                <Card.Body>
                    <Card.Title>{movie.Name}</Card.Title>
                    <Card.Text>{movie.Description}</Card.Text>
                    <Button onClick={() => onClick(movie)} variant='link'>View Details</Button>
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
    onClick: PropTypes.func.isRequired
};