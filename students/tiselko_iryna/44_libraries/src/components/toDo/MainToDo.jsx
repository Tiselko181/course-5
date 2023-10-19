import { useState } from "react";
import AddToDo from "./addToDo";
import Analytics from "./analytics/Analytics";
import DoneToDoList from "./doneToDo/DoneToDoList";
import ToDoList from "./toDolist/ToDoList";

export default function MainToDo() {
    const [toDoList, setToDoList] = useState([]);

    function addToDo(newToDo) {
        newToDo.id = Date.now();

        setToDoList([
            newToDo,
            ...toDoList,
        ]);
    }

    console.log(toDoList);

    return (
        <section className="container mx-auto px-2">
            <h1 className="text-5xl font-bold text-center pb-4 border-b mb-4">MainToDo</h1>
            <AddToDo changeToDolist={(newToDo) => { addToDo(newToDo); }} />
            <ToDoList />
            <DoneToDoList />
            <Analytics />
        </section>
    );
}
