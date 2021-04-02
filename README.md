MyMovieFlix

This app is the client side interface that can be used to make requests to and receive responses from the server-side myflix API.

This app is built with React and uses the Parcel Build tool which can be ran with the command parcel [path to index.html] this will run a local server at localhost:1234

Technical Requirements Single page application Uses state routing to navigate between views and share URLs Users have the option to filter and sort movies Written using React library Written with React redux Styled with React Bootstrap

Essential Views and Features

Main view Returns list of all movies Sorting and filtering Ability to select a movie for more details

Single movie view Return data about a single movie — director, genre, description, image Allows users to add a movie to their list of favorites

Login View Allows users to login with a username and password

Registration View Allows new user to register with a username, password, email and birthday

Genre view Returns data about a genre with a name and description Displays other movies in that genre

Director view Returns data about a director — name, bio, birth year and death year Displays other movies with that director

Profile view Allows users to update their user info Allows existing users to deregister Displays movies saved to favorites Allows user to remove a movie from favorites
