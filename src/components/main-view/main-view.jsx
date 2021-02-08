import React from "react";
import axios from "axios";

import { connect } from 'react-redux';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

import { setMovies } from '../../actions/actions';
import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';


import "./main-view.scss";

import MoviesList from '../movies-list/movies-list';
import { LoginView } from "../login-view/login-view";
import { RegistrationView } from "../registration-view/registration-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { DirectorView } from "../director-view/director-view";
import { GenreView } from "../genre-view/genre-view";
import { ProfileView } from "../profile-view/profile-view";
import { UpdateView } from '../update-view/update-view';
import { Navbar, Nav, FormControl, NavDropdown, Form, Button, Row, Col, Container } from "react-bootstrap";



export class MainView extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      user: null,
    };
  }

  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem("user"),
      });
      this.getMovies(accessToken);
    }
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username,
    });

    localStorage.setItem("token", authData.token);
    localStorage.setItem("user", authData.user.Username);
    this.getMovies(authData.token);
  }

  getMovies(token) {
    axios
      .get("https://findamovieflix.herokuapp.com/movies", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.props.setMovies(response.data);
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
  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null,
    });
    console.log('logout successful');
    alert('You have been successfully logged out');
    window.open('/', '_self');
  }

  render() {

    let { movies, visibilityFilter } = this.props;
    let { user } = this.state;
    // if(!register) return <RegistrationView onRegister={(register) => this.onRegister(register)}/>
    // if (!movies) return <div className='main-view'/>;

    return (
      <Router>
        <div className="main-view">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href = {'/'}>MyMovieFlix</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
              <Form inline>
                <VisibilityFilterInput variant="outline-light" className='mr-sm-2' visibilityFilter={visibilityFilter} />
              </Form>
              {!user ? (
              <ul>
                <Link to={`/`}>
                  <Button 
                    variant="link"
                    className="navbar-link"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to={`/register`}>
                  <Button 
                    variant="link"
                    className="navbar-link"
                  >
                    Register
                  </Button>
                </Link>
              </ul>
            ) : (
              <ul>
                <Link to={`/`}>
                  <Button 
                    variant="link" 
                    className="navbar-link"
                    onClick={() => this.logOut()}
                  >
                    Sign Out
                  </Button>
                </Link>
                <Link to={`/users/${user}`}>
                  <Button 
                    variant="link"
                    className="navbar-link"
                  >
                    My Account
                  </Button>
                </Link>
                <Link to={`/`}>
                  <Button 
                    variant="link"
                    className="navbar-link"
                  >
                    Movies
                  </Button>
                </Link>
               
              </ul>
            )}
            </Navbar.Collapse>
          </Navbar>

          <Row className="justify-content-md-center-margin-auto">
            <Route
              exact
              path="/"
              render={() => {
                if (!user) return <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />;
                return <MoviesList movies={movies}/>; 
              }
              }
            />
          </Row>
          <Route
            path="/movies/:movieId"
            render={({ match }) => (
              <MovieView
                movie={movies.find((m) => m._id === match.params.movieId)}
              />
            )}
          />
          <Route
            path="/directors/:name"
            render={({ match }) => (
              <DirectorView
                director={movies.find(
                  (m) => m.Director.Name === match.params.name
                )}
                movies={movies}
              />
            )}
          />
          <Route
            path="/genres/:name"
            render={({ match }) => (
              <GenreView
                genre={movies.find((m) => m.Genre.Name === match.params.name)}
                movies={movies}
              />
            )}
          />
          <Route path="/register" render={() => <RegistrationView />} />
          <Route
            path="/users/:userId"
            render={() => <ProfileView movies={movies} />}
          />
               <Route
            path="/update/:userId"
            render={() => {
              return <UpdateView />;
            }}
          />
        </div>
      </Router>
    );
  }
}

let mapStateToProps = state => {
  return {movies: state.movies}
}

export default connect(mapStateToProps, { setMovies })(MainView);