import React from 'react';

export class MovieView extends React.Component {
    constructor() {
        super();

        this.state = {};
    }


    render() {
        const { movie } = this.props;

        if(!movie) return null;

        return(
            <div className='movie-view'>
                <img className='movie-poster' src={movie.ImageUrl}/>
                <div className='movie-title'>
                    <span className='label'>Title: </span>
                    <span className='value'>{movie.Name}</span>
                 </div>
                <div className='movie-description'>
                    <span className='label'>Description: </span>
                    <span className='value'>{movie.Description}</span>
                </div>

                <div className='movie-genre'>
                    <span className='label'>Genre: </span>
                    <span className='value'>{movie.Genre.Name}</span>
                </div>
                <div className='movie-director'>
                    <span className='label'>Director: </span>
                    <span className='value'>{movie.Director.Name}</span>
                </div>
                <input type="button" value="Back to Movies" onClick={() => window.location.reload(false)} />
            </div>
        );
    }
}