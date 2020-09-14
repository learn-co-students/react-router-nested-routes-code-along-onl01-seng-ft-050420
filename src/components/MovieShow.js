import React from 'react'

const MovieShow = ({match, movies}) => {
    return (
        <div>
            <h1>TEST</h1>
            <h3>{ movies[match.params.movieId].title}</h3>
        </div>
    );
};

export default MovieShow;