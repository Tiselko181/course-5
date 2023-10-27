import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
// import Home from "./layout/Home";
// import Movies from "./layout/Movies";
// import Tv from "./layout/Tv";

function App() {
    return (
        <>
            <Header />
            <main>
                {/* <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/movies"
                        element={<Movies />}
                    />
                    <Route
                        path="/tv"
                        element={<Tv />}
                    />
                </Routes> */}
                <Outlet />
            </main>
        </>
    );
}

export default App;
