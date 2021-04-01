import React, { useState } from "react";
import axios from 'axios';
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./profile-view.scss";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Link } from "react-router-dom";

export class ProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      // birthday: "",
      favoriteMovies: [],
      movies: "",
    };
  }

  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    this.getUser(accessToken);
  }


  /**get user*/
  getUser(token) {
    let url =
      "https://findamovieflix.herokuapp.com/users/" +
      localStorage.getItem("user");
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        //console.log(response);
        this.setState({
          username: response.data.Username,
          password: response.data.Password,
          email: response.data.Email,
          // birthday: response.data.Birthday,
          favoriteMovies: response.data.FavoriteMovies,
        });
      });
  }

  /** remove a movie from favorites*/
  removeFavorite(movie) {
    let token = localStorage.getItem("token");
    let url =
    'https://findamovieflix.herokuapp.com/users/' +
      localStorage.getItem("user") +
      "/movies/" +
      movie._id;
    axios
      .delete(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        this.componentDidMount();
      });
  }

    /**  delete user profile*/
    handleDelete() {
        let token = localStorage.getItem("token");
        let user = localStorage.getItem("user");
    axios
      .delete(
        `https://findamovieflix.herokuapp.com/users/${user}`, { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        alert(user + " has been deleted");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.location.pathname = "/";
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  /**  renders profile view*/
  render() {
    const { movies } = this.props;
    this.getUser(localStorage.getItem("token"));
    const favoriteMovieList = movies.filter((movie) => {
      return this.state.favoriteMovies.includes(movie._id);
    });
    console.log(favoriteMovieList);

    if (!movies) alert("Please sign in");
    return (
      /** component that renders username, password, email*/
      <div className="userProfile" style={{ display: "flex" }}>
        <Container>
          <Row>
            <Col>
              <Form style={{ width: "24rem", float: "left" }}>
                <h1 style={{ textAlign: "center" }}>Profile Details</h1>
                <Form.Group controlId="formBasicUsername">
                  <h3>Username: </h3>
                  <Form.Label>{this.state.username}</Form.Label>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <h3>Email:</h3>
                  <Form.Label>{this.state.email}</Form.Label>
                </Form.Group>
                <div className='btn-group-vertical'>
                  <Link to={`/update/${this.state.username}`}>
                    <Button 
                      variant="link" 
                            type="link"
                            size="sm" 
                            
                    >
                      Edit Profile
                    </Button>
                  </Link>
                {/** links back to main view */}
                <Link to={`/`}>
                  <Button
                  variant="link" 
                          type="submit"
                          size="sm"
                  >
                    Back to Main
                  </Button>
                </Link>
                {/** button to delete account */}
                <Button
                variant="link" 
                        size="sm"
                        margin-bottom='10px'
                        
                        onClick={() => this.handleDelete()}
                >
                  Delete Account
                </Button>
                </div>
              </Form>
            </Col>
            <Col>
              <div
                className="favoriteMovies"
                style={{
                  float: "right",
                  textAlign: "center",
                  width: "24rem",
                }}
              >
                <h1>Favorite Movies</h1>
                {favoriteMovieList.map((movie) => {
                  return (
                    <div key={movie._id}>
                      <Card>
                        <Card.Body>
                          <Link to={`/movies/${movie._id}`}>
                          <Card.Img variant='sm' src={movie.ImageUrl}/>
                          </Link>
                        </Card.Body>
                      </Card>
                      <Button variant='link' onClick={() => this.removeFavorite(movie)}>
                        Remove {movie.Name} from Favorites
                      </Button>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

ProfileView.propTypes = {
  movies: PropTypes.array.isRequired,
};