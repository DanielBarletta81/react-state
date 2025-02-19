//Task 1: Initializing and Displaying a List


import { useState } from 'react';

const MovieList = () => {
    const [favoriteMovies, setFavoriteMovies] = useState([
        {
            title: 'The Matrix',
            details: 'Released in 1999, Sci-fi masterpiece',
            genre: 'Sci-fi',
            showDetails: false
        },
        {
            title: 'Inception',
            details: 'Released in 2010, Mind-bending thriller',
            genre: 'Sci-fi',
            showDetails: false
        },
        {
            title: 'The Shawshank Redemption',
            details: 'Released in 1994, Drama about hope and friendship',
            genre: 'Drama',
            showDetails: false
        },
        {
            title: 'Pulp Fiction',
            details: 'Released in 1994, Iconic Tarantino masterpiece',
            genre: 'Crime',
            showDetails: false
        },
        {
            title: 'The Dark Knight',
            details: 'Released in 2008, Revolutionary superhero film',
            genre: 'Action',
            showDetails: false
        }
    ]);

    const [selectedGenre, setSelectedGenre] = useState('All');

    const genres = ['All', ...new Set(favoriteMovies.map(movie => movie.genre))];

    const filteredMovies = selectedGenre === 'All' 
        ? favoriteMovies 
        : favoriteMovies.filter(movie => movie.genre === selectedGenre);

//  Task 2: Conditional Rendering of Movie Details


    const toggleDetails = (index) => {
        const updatedMovies = favoriteMovies.map((movie, i) => {
            if (i === index) {
                return { ...movie, showDetails: !movie.showDetails };
            }
            return movie;
        });
        setFavoriteMovies(updatedMovies);
    };

    //  Task 3: Implementing Movie Removal

    const removeMovie = (index) => {
        const updatedMovies = favoriteMovies.filter((_, i) => i !== index);
        setFavoriteMovies(updatedMovies);
    };

    return (
        <div>
            <h2>My Favorite Movies</h2>
            {/*  Task 4: Toggling List View */}
            <div className="genre-filters">
          
                {genres.map(genre => (
                    <button 
                        key={genre}
                        onClick={() => setSelectedGenre(genre)}
                        style={{
                            marginRight: '10px',
                            backgroundColor: selectedGenre === genre ? '#007bff' : '#fff',
                            color: selectedGenre === genre ? '#fff' : '#000'
                        }}
                    >
                        {genre}
                    </button>
                ))}
            </div>
            <ul>
                {filteredMovies.map((movie, index) => (
                    <li key={index}>
                        <span 
                            onClick={() => toggleDetails(index)}
                            style={{ cursor: 'pointer' }}
                        >
                            {movie.title}
                        </span>
                        <span style={{ marginLeft: '10px', color: '#666' }}>
                            ({movie.genre})
                        </span>
                        <button 
                            onClick={() => removeMovie(index)}
                            style={{ marginLeft: '10px' }}
                        >
                            Remove
                        </button>
                        {movie.showDetails && (
                            <p className="details">{movie.details}</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
