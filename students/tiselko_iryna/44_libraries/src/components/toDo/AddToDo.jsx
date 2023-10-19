import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function AddToDo({ changeToDolist }) {
    const [toDo, setToDo] = useState('');
    const [startDate, setStartDate] = useState('');

    function onSubmitHandler(e) {
        e.preventDefault();

        if (toDo && startDate.getTime() >= new Date().getDate()) {
            console.log(toDo, startDate);
            changeToDolist({
                toDo,
                date: startDate.getTime(),
            });
            clearForm();
        }
    }

    function clearForm() {
        setToDo('');
        setStartDate('');
    }

    return (
        <div className="py-8 border-b mb-4">
            <form action="#" className="flex gap-5 items-center" onSubmit={onSubmitHandler}>
                <label className="block grow">
                    <span>Need to Do:</span>
                    <input
                        className="block w-full border-4 border-indigo-500/100 py-2"
                        type="text"
                        name="todo"
                        value={toDo}
                        onChange={(e) => setToDo(e.target.value)}
                    />
                </label>
                <label className="block">
                    <span>Winish till:</span>
                    <div className="block w-full border-4 border-indigo-500/100">
                        <DatePicker
                            showIcon
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 48 48"
                                >
                                    <mask id="ipSApplication0">
                                        <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
                                            <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
                                            <path
                                                fill="#fff"
                                                d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                                            ></path>
                                        </g>
                                    </mask>
                                    <path
                                        fill="currentColor"
                                        d="M0 0h48v48H0z"
                                        mask="url(#ipSApplication0)"
                                    ></path>
                                </svg>
                            }
                        />
                    </div>
                </label>
                <button type="submit" className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add New Task</button>
            </form>
        </div>
    );
}
