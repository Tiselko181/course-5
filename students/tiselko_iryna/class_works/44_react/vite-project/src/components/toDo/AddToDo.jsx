import { useState } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

AddToDo.propTypes = {
    changeToDoList: PropTypes.func.isRequired
};

export default function AddToDo({ changeToDoList }) {

    const [toDo, setToDo] = useState('');
    const [startDate, setStartDate] = useState((''));
    const [validation, setValidation] = useState(false);

    function onSubmitHandler(e) {
        e.preventDefault();
        setValidation(true);

        if (toDo && startDate.getDate() >= new Date().getDate()) {
            changeToDoList({
                toDo: toDo,
                date: startDate.getTime(),
            });

            cleanForm();
        }
    }

    function cleanForm() {
        setToDo('');
        setStartDate('');
        setValidation(false);
    }

    return (
        <div className="py-8 border-b mb-4">
            <form className="flex gap-5 items-center" onSubmit={onSubmitHandler} action="#">
                <label className="block grow">
                    <span>I am planning:</span>
                    <input
                        className="block w-full border-4 border-indigo-500/100"
                        type="text"
                        name="todo"
                        value={toDo}
                        onChange={(e) => setToDo(e.target.value)} />
                    {!toDo && validation && <div className="text-red-500">Поле обовязкове</div>}
                </label>
                <label htmlFor="block">
                    <span>Finish untill:</span>
                    <div className="block w-full border-4 border-indigo-500/100">
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    {!startDate && validation && <div className="text-red-500">Поле обовязкове</div>}
                </label>
                <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-5" type="submit">Add</button>
            </form>
        </div>
    );
}
