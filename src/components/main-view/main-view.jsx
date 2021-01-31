import React from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route} from 'react-router-dom';

import { LoginView } from '../login-view/login-view';
import {RegistrationView } from '../registration-view/registration-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class MainView extends React.Component {
    constructor() {
      super();
  
      this.state = {
          movies: [],
        user: null
      };
    }
    
    componentDidMount() {
      let accessToken = localStorage.getItem('token');
      if (accessToken !== null) {
        this.setState({
          user: localStorage.getItem('user')
        });
        this.getMovies(accessToken);
      }
    }

    onLoggedIn(authData) {
      console.log(authData);
        this.setState({
          user: authData.user.Username
      });
     
      localStorage.setItem('token', authData.token);
      localStorage.setItem('user', authData.user.Username);
      this.getMovies(authData.token);
  }
    
    getMovies(token) {
      axios.get('https://findamovieflix.herokuapp.com/movies', {
        headers: { Authorization: `Bearer ${token}`}
      })
      .then(response=> {
        this.setState({
          movies: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    // onMovieClick(movie) {
    //     this.setState({
    //         selectedMovie: movie
    //     });
    // }


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
        // if (!movies) return <div className='main-view'/>;

    
        return (
          <Router>
            <div className='main-view'>
              <Row className='justify-content-md-center-margin-auto'>
                <Route exact path='/' render={() => movies.map(m=> <Col md={3}> <MovieCard key={
                m._id} movie={m}/></Col>)}/>
              </Row>
            <Route path='/movies/:movieId' render={({ match }) => <MovieView movie={movies.find(m => m._id === match.params.movieId)}/>}/>
            <Route path='/director/:Name' render={({ match })=> (
              <DirectorView Director={movies.find((m) => m.Director.Name === match.params.name
              )}
              movies={movies}/>
            )} />
            <Route path='/genre/:Name' render={({ match }) => <GenreView genre={movies.find(
              (m) => m.Genre.Name === match.params.name
            )} movies={movies}/>}/>
            <Route path='/register' render={() => <RegistrationView />}/>
          </div>
          </Router>
        );
    }
  }

