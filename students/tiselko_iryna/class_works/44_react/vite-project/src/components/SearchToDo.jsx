import PropTypes from "prop-types";

SearchToDo.propTypes = {
    searchValue: PropTypes.object,
    setSearchValue: PropTypes.object
};

export default function SearchToDo({ searchValue, setSearchValue }) {
    return (
        <label htmlFor="">
            <span className="text-gray-700">Search</span>
            <input type="text"
                name="search"
                className="mt-1 block w-full border-4 border-indigo-500/100"
                placeholder="search"
                value={searchValue}
                onChange={(e) => { setSearchValue(e.target.value); }}
            />
        </label>
    );
}
