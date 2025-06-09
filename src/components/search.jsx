const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
    return (
        <form onSubmit={handleSearch} className="flex justify-center items-center gap-3 mt-6">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for movies..."
                className="p-2 pl-5 pr-4 py-3 w-80 text-lg rounded-xl shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button
                type="submit"
                className="cursor-pointer"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
