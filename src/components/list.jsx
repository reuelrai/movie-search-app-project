import MovieCard from './card';

const MovieList = ({ movies, favorites, toggleFavorite }) => {
    return (
        <div className="px-4">
            <h2>Search Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
                {movies.length > 0 ? (
                    movies.map(movie => (
                        <MovieCard
                            key={movie.imdbID}
                            movie={movie}
                            isFavorite={favorites.some(fav => fav.imdbID === movie.imdbID)}
                            toggleFavorite={toggleFavorite}
                        />
                    ))
                ) : (
                    <p>No movies to display. Try a search!</p>
                )}
            </div>
        </div>
    );
};

export default MovieList;