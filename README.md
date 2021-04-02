<!DOCTYPE html>
<html>
    <body>
        <h1>MyMovieFLix</h1>
        <p>This app is the client side interface that can be used to make requests to and receive responses from the server-side myflix API.</p>
        <p>This app is built with React and uses the Parcel Build tool which can be ran with the command parcel [path to index.html] this will run a local server at localhost:1234.</p>
        <p><h2>Technical Requirements:</h2>
            Single page application<br>
            Uses state routing to navigate between views and share URLs<br>
            Users have the option to filter and sort movies<br>
            Written using React library<br>
            Styled with React Bootstrap<br>
        </p>
        <p>
            <h2>Essential Views and Features:</h2>
                <h3>Main View:</h3>
                Returns list of all movies<br>
                Sorting and filtering<br>
                Ability to select a movie for more details<br>
                <h3>Single View:</h3>
                Return data about a single movie — director, genre, description, image<br>
                Allows users to add a movie to their list of favorites<br>
                <h3>Login View:</h3>
                Allows users to login with a username and password
                <h3>Registration View:</h3>
                Allows new user to register with a username, password, email and birthday
                <h3>Genre View:</h3>
                Returns data about a genre with a name and description Displays other movies in that genre
                <h3>Director View:</h3>
                Returns data about a director — name, bio, birth year and death year<br>
                Displays other movies with that director
                <h3>Profile View:</h3>
                Allows users to update their user info<br>
                Allows existing users to deregister Displays movies saved to favorites<br>
                Allows user to remove a movie from favorites<br>
        </p>
    </body>
</html>
