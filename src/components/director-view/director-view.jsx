import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';

import './director-view.scss';

export class DirectorView extends React.Component {

    constructor() {
        super();

        this.state = {};
    }

    render() {

        const { movies, director } = this.props;
        if (!director) return null;

        return (
            <Container>
            <div className='director-view'>
                <div className='director-name'>
                    <span className='label'>Name: </span>
                    <span className='value'>{director.director.Name}</span>
                 </div>
                <div className='director-bio'>
                    <span className='label'>Bio: </span>
                    <span className='value'>{director.director.Bio}</span>
                </div>
                <div className='director-birthday'>
                    <span className='label'>Birthday: </span>
                    <span className='value'>{director.director.Birth}</span>
                </div>
                <Link to ={`/`}>
                <Button variant='link'>Home</Button>
                </Link>
            </div>
            </Container>
        );

    }
}

DirectorView.propTypes = {
    Director: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Bio: PropTypes.string.isRequired,
        Birth: PropTypes.string.isRequired
        })
};