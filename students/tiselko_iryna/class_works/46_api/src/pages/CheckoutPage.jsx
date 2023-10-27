import { Outlet } from "react-router-dom";

function ChechoutPage() {
    return (
        <>
            <header>Logo</header>
            <main>
                <Outlet />
            </main>
            <footer>2023 copy</footer>
        </>
    );
}

export default ChechoutPage;
