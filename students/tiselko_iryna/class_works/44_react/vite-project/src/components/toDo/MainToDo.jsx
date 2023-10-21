import AddToDo from "./AddToDo";
import Analytics from "./analytics/Analytics";
import DoneToDoList from "./doneToDo/DoneToDoList";
import ToDoList from "./todoList/ToDoList";
import ToDoTask from "./todoList/ToDoTask";
import DoneToDoTask from "./doneToDo/DoneToDoTask";
import useDoneToDo from "./hooks/doneToDo/useDoneToDo";
import useToDo from "./hooks/toDo/useToDo";
import SearchToDo from "../SearchToDo";
import useSearchToDo from "./hooks/searchToDo/useSearchToDo";

export default function MainToDo() {
    const [toDoList, addToDo, setToDoList] = useToDo();
    const [doneToDoList, addDoneToDo] = useDoneToDo(setToDoList);
    const [searchValue, filtredToDoList, setSearchValue] = useSearchToDo(toDoList);

    return (
        <section className="container mx-auto">
            <h1 className="text-5xl font-bold text-center pb-4 border-b mb-4">MainToDo</h1>
            <AddToDo changeToDoList={addToDo} />
            <ToDoList>
                <SearchToDo searchValue={searchValue} setSearchValue={setSearchValue} />
                <ol className="py-5">
                    {
                        filtredToDoList.length ?
                            filtredToDoList.map(
                                (toDo, index) => <ToDoTask
                                    key={toDo.id}
                                    toDo={toDo}
                                    index={index}
                                    doneHeandle={addDoneToDo}
                                />
                            ) :
                            <p className="mb-5 text-center">Нічого не заплановано</p>
                    }
                </ol>
            </ToDoList>
            {/* {
                toDoList.length ?
                    <ToDoList toDoList={toDoList} /> :
                    <p className="mb-5 text-center">Нічого не заплановано</p>
            } */}
            {
                doneToDoList.length ? < DoneToDoList>
                    <div className="mb-5">
                        <DoneToDoTask headers={{
                            title1: 'Task',
                            title2: 'Finsh till:',
                            title3: 'Finish Date:',
                        }} />
                        {
                            doneToDoList.map(
                                (doneToDo, index) => <DoneToDoTask
                                    key={doneToDo.id}
                                    index={index}
                                    doneToDo={doneToDo}
                                />
                            )
                        }
                    </div>
                </DoneToDoList> :
                    null
            }
            <Analytics />
        </section>
    );
}
