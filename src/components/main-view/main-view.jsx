import React from 'react';
import axios from 'axios';

import { LoginView } from '../login-view/login-view';
import {RegistrationView } from '../registration-view/registration-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class MainView extends React.Component {
    constructor() {
      super();
  
      this.state = {
          movies: [],
        selectedMovie: null,
        user: null
      };
    }
  
    componentDidMount() {
      axios
        .get('https://findamovieflix.herokuapp.com/movies')
        .then((response) => {
          // Assign the result to the state
          this.setState({
            movies: response.data,
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    onMovieClick(movie) {
        this.setState({
            selectedMovie: movie
        });
    }

   onLoggedIn(user) {
       this.setState({
           user
       });
   }

  //  onRegister(register) {
  //      this.setState({
  //          register
  //      });
  //  }

  //  setInitialState() {
  //      this.setState({
  //          selectedMovie: null,
  //      })
  //  }

    render() {
        const { movies, selectedMovie, user, register } = this.state;
        if(!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)}/>
        // if(!register) return <RegistrationView onRegister={(register) => this.onRegister(register)}/>
        if (!movies) return <div className='main-view'/>;

    
        return (
            <div className="main-view">
              {selectedMovie
                ? (
                    <Row className="justify-content-md-center">
                      <Col md={8} style={{border: '1px solid black'}}>
                        <MovieView movie={selectedMovie} onBackClick={movie => this.onMovieClick(null)} />
                      </Col>
                    </Row>
                  )
                : (
                  <Row className="justify-content-md-center">
                    {movies.map(movie => (
                        <Col md={3}>
                      <MovieCard key={movie._id} movie={movie} onClick={movie => this.onMovieClick(movie)}/>
                      </Col>
                    ))}
                  </Row>
                )
              }
            </div>
          );
    }
}