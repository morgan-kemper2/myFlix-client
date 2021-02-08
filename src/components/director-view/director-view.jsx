import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

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
            <div className='main-view'>
                <div className='director-name'>
                    <span className='h2'>Name: </span>
                    <span className='h2'>{director.Director.Name}</span>
                 </div>
                <div className='director-bio'>
                    <span className='label'>Biography: </span>
                    <span className='value'>{director.Director.Bio}</span>
                </div>
                <div className='director-birthday'>
                    <span className='label'>Born: </span>
                    <span className='value'>{director.Director.Birth}</span>
                </div>
               
            </div>
            <h4 className="mt-4">Some more {director.Director.Name} movies</h4>
          <div className="d-flex row mt-3 ml-1">
            {movies.map((movie) => {
              if (movie.Director.Name === director.Director.Name) {
                return (
                  <div key={movie._id}>
                    <Card
                      className="mb-3 mr-2 h-100"
                      style={{ width: '16rem' }}
                    >
                      <Card.Body>
                          <Link to={`/movies/${movie._id}`}>
                          <Card.Img variant='sm' src={movie.ImageUrl}/>
                          </Link>
                      </Card.Body>
                    </Card>
                  </div>
                );
              }
            })}
          </div>
          <Link to ={`/`}>
                <Button className='btn' variant='link'>Return to All Movies</Button>
                </Link>
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