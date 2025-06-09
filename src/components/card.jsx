const MovieCard = ({ movie, isFavorite, toggleFavorite }) => {
    return (
        <div className="p-4 border rounded shadow-md w-56 m-2 flex flex-col items-center">
            <img
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'}
                alt={movie.Title}
                className="w-40 h-auto mb-4"
            />
            <div className="text-center">
                <h3 className="text-lg font-semibold mb-1">{movie.Title}</h3>
                <p className="text-sm text-gray-600 mb-2">Year: {movie.Year}</p>
                <button
                    onClick={() => toggleFavorite(movie)}
                    className={`px-3 py-1 rounded ${isFavorite ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
                        }`}
                >
                    {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
            </div>
        </div>
    );
};

export default MovieCard;
