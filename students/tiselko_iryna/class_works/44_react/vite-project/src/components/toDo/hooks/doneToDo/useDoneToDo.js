import { useEffect, useState } from "react";

const doneToDoLocalStorageKey = 'doneToDo';

export default function useDoneToDo(setToDoList) {
    const [doneToDoList, setDoneToDoList] = useState(() => {
        return JSON
            .parse(
                window.localStorage.getItem(doneToDoLocalStorageKey)
            ) || [];
    });

    function addDoneToDo(toDoId) {
        console.log(toDoId);
        setToDoList(
            (currentState) => {
                return currentState.filter(
                    (itemState) => {
                        if (itemState.id !== toDoId) {
                            return true;
                        } else {
                            setDoneToDoList(
                                [
                                    {
                                        ...itemState,
                                        doneDate: Date.now(),
                                    },
                                    ...doneToDoList
                                ]
                            );
                            return false;
                        }
                    }
                );
            }
        );
    }

    useEffect(function () {
        window.localStorage.setItem(doneToDoLocalStorageKey, JSON.stringify(doneToDoList));
    }, [doneToDoList]);

    return [doneToDoList, addDoneToDo];
}
