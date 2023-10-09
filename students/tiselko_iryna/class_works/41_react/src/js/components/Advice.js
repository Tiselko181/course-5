import React, { createElement, useDeferredValue, useEffect, useState } from "react";


export default function Advice() {
    const [advice, setAdvice] = useState('');
    const [counter, setCounter] = useState(0);

    async function getAdvice() {
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();

        setAdvice(data.slip.advice);
        setCounter(counter + 1);
    }

    useEffect(
        function () {
            getAdvice();
        },
        []
    )

    // return createElement(
    //     'div',
    //     null,
    //     createElement('h1', null, advice),
    //     createElement('button', { onClick: getAdvice }, 'Отримати пораду'),
    //     createElement('p', { className: 'message' }, `Ви переглянули ${counter} порад`
    //     )
    // );

    return (
        <div>
            <h1>{advice}</h1>
            <button onClick={getAdvice}>Отримати пораду</button>
            <p className="message">Ви переглянули {counter} порад</p>
        </div>
    )
};
