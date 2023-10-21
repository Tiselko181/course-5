import { useEffect, useState } from "react";

const toDoLocalStorageKey = 'toDo';

export default function useToDo() {
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
        console.log(toDoList);
    }

    useEffect(function () {
        window.localStorage.setItem(toDoLocalStorageKey, JSON.stringify(toDoList));

    }, [toDoList]);

    return [toDoList, addToDo, setToDoList];
}
