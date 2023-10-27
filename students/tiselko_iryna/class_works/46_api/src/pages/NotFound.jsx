import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/');
        }, 3000);

        return () => { clearTimeout(timeout); };
    }, []);

    return (
        <>
            <h1>404 Not Found Page</h1>
            <button onClick={() => {
                navigate(-1); //same as click on arrow back
            }}>Go back</button>
        </>

    );
}

export default NotFoundPage;
