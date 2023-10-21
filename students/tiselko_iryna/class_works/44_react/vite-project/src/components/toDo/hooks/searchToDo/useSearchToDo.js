import { useState } from "react";

export default function useSearchToDo(toDoList) {
    const [searchValue, setSearchValue] = useState('');

    const filtredToDoList = searchValue ?
        toDoList.filter(
            (toDoItem) => {
                return RegExp(searchValue, 'i').test(toDoItem.toDo);
            }
        ) : toDoList;

    return [searchValue, filtredToDoList, setSearchValue];
}
