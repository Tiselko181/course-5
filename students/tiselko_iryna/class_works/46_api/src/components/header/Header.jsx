import { Link, NavLink } from "react-router-dom";

const navClass = "mr-4 font-bold py-2 px-4 rounded";

function getNavClasses({ isActive }) {
    return isActive ? `${navClass} nav-active` : navClass;
}

function Header() {
    return (
        <header className="py-5 border-b flex justify-between container m-auto">
            <div>Logo</div>
            <nav>
                <NavLink to="/" className={getNavClasses}>Home</NavLink>
                <NavLink to="/movies" className={getNavClasses}>Movies</NavLink>
                <NavLink to="/tv" className={getNavClasses}>Tv</NavLink>

                {/* <Link to="/" className="mr-4 font-bold py-2 px-4 rounded">Home</Link>
                <Link to="/movies" className="mr-4 font-bold py-2 px-4 rounded">Movies</Link>
                <Link to="/tv" className="mr-4 font-bold py-2 px-4 rounded">Tv</Link> */}

                {/* <a href="/" className="mr-4 font-bold py-2 px-4 rounded">Home</a>
                <a href="/movies" className="mr-4 font-bold py-2 px-4 rounded">Movies</a>
                <a href="/tv" className="mr-4 font-bold py-2 px-4 rounded">TV</a> */}
            </nav>
        </header>
    );
}

export default Header;
