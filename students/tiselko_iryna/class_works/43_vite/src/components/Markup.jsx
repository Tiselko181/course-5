import WeatherList from "./weather/Weather-list";

function Markup() {
    return (
        <div className="container">
            <div className="weather__title-wrapper">
                <h2 className="weather__title">CSS Weather Forecast</h2>
                <svg className="weather__svg">
                    <use xlinkHref="#title" />
                </svg>
            </div>
            <WeatherList />
            <p className="subtitle">
                Have a nice day and don't forget umbrella if you are in New Delhi now!
            </p>
        </div>
    );
}

export default Markup;
