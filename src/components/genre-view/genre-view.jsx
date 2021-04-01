import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import './genre-view.scss';

export class GenreView extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  /** 
   * renders a display for genre name and description */
  render() {
    const { movies, genre } = this.props;

    if (!genre) return null;

    return (
      <Container className="wrapper container-fluid">
          <div className="genre-title ">
            {/** <span className="label">Name: </span> */}
            <span className="h1">{genre.Genre.Name}</span>
          </div>
          <div className="genre-description ">
            {/** <span className="label">Description: </span> */}
            <span className="value">{genre.Genre.Description}</span>
          </div>

    {/** renders images of other movies in this genre displayed in card format */}
      <Container>
        <h4 className="mt-4">Some more {genre.Genre.Name} movies</h4>
        <div className="d-flex row mt-3 ml-2">
          {movies.map((movie) => {
            if (movie.Genre.Name === genre.Genre.Name) {
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
        <Link to={`/`}>
<Button variant="link">Return to All Movies</Button>
</Link>
      </Container>
    </Container>
  );
}
}


GenreView.propTypes = {
Movie: PropTypes.shape({
  Genre: {
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    // ImagePath: PropTypes.string.isRequired,
  },
}),
};