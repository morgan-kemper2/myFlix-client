import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import './genre-view.scss';

export class GenreView extends React.Component {

    constructor() {
        super();

        this.state = {};
    }

    render() {

        const { genre } = this.props;

        return (

            <Container>
            <div className='genre-view'>
                <div className='genre-name'>
                    <span className='label'>Name: </span>
                    <span className='value'>{genre.Genre.Name}</span>
                 </div>
                <div className='director-bio'>
                    <span className='label'>Description: </span>
                    <span className='value'>{genre.Genre.Description}</span>
                </div>
                <Link to ={`/`}>
                <Button variant='link'>Home</Button>
                </Link>
            </div>
            </Container>
        );

    }
}

GenreView.propTypes = {
    Genre: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired
    })
};