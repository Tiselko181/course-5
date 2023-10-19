import ToDoTask from "./ToDoTask";
import PropTypes from "prop-types";

ToDoList.propTypes = {
    toDoList: PropTypes.array
};

export default function ToDoList({ toDoList }) {
    return (
        <>
            <h2 className="mb-5 text-2xl text-center font-bold">ToDoList</h2>
            <ul className="py-5">
                {
                    toDoList.map(
                        (toDo) => <ToDoTask key={toDo.id} toDo={toDo} />
                    )
                }
            </ul>

        </>
    );
}

