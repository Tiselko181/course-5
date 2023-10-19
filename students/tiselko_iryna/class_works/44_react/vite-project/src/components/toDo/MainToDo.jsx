import { useEffect, useState } from "react";
import AddToDo from "./AddToDo";
import Analytics from "./analytics/Analytics";
import DoneToDoList from "./doneToDo/DoneToDoList";
import ToDoList from "./toDolist/ToDoList";
import ToDoTask from "./toDolist/ToDoTask";

const toDoLocalStorageKey = 'toDo';

export default function MainToDo() {
    const [toDoList, setToDoList] = useState(() => {
        return JSON
            .parse(
                window.localStorage.getItem(toDoLocalStorageKey)
            ) || [];
    });

    function addToDo(newToDo) {
        newToDo.id = Date.now();

        setToDoList([
            newToDo,
            ...toDoList,
        ]);
    }

    useEffect(function () {
        window.localStorage.setItem('toDo', JSON.stringify(toDoList));
    }, [toDoList]);

    console.log(toDoList);

    return (
        <section className="container mx-auto">
            <h1 className="text-5xl font-bold text-center pb-4 border-b mb-4">MainToDo</h1>
            <AddToDo changeToDoList={addToDo} />
            <ToDoList>
                {
                    toDoList.length ?
                        toDoList.map(
                            (toDo, index) => <ToDoTask key={toDo.id} index={index} toDo={toDo} />
                        ) : <p className="mb-5 text-center">Nothing planning</p>
                }
            </ToDoList>
            {/* {
                toDoList.length ?
                    <ToDoList toDoList={toDoList} /> :
                    <p className="mb-5 text-center">Nothing planning</p>
            } */}
            <DoneToDoList />
            <Analytics />
        </section>
    );
}
