import PropTypes from "prop-types";

ToDoList.propTypes = {
    children: PropTypes.object
};

export default function ToDoList({ children }) {
    return (
        <>
            <h2 className="mb-5 text-2xl text-center font-bold">To Do List</h2>
            <ul className="py-5">
                {children}
            </ul>

        </>
    );
}

