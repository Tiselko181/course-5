import React from "react";
import Weather from "./Weather";


const city = [{}];

export default function WeatherList() {

    return (
        <div className="row weather__row">
            <Weather colClass="col-6" city="Lisbon" temp={21} iconId="lisbon" />
            <Weather colClass="col-3" city="Paris" temp={11} iconId="paris" />
            <Weather colClass="col-3" city="Belgrad" temp={21} iconId="belgrade" />
            <Weather colClass="col-3" city="Venice" temp={22} iconId="venice" />
            <Weather colClass="col-3" city="Lisbon" temp={21} iconId="lisbon" />
            <Weather colClass="col-3" city="Lisbon" temp={21} iconId="lisbon" />
            <Weather colClass="col-3" city="Lisbon" temp={21} iconId="lisbon" />
            <Weather colClass="col-3" city="Lisbon" temp={21} iconId="lisbon" />
            <Weather colClass="col-6" city="Lisbon" temp={21} iconId="lisbon" />
            <Weather colClass="col-3" city="Lisbon" temp={21} iconId="lisbon" />
            <Weather colClass="col-12" city="Lisbon" temp={21} iconId="lisbon" />
        </div>
    )
}
