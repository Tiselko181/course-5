import React from "react";

function Markup() {
    return (
        <main className="main">
            <section className="weather">
                <div className="container">
                    <div className="weather__title-wrapper">
                        <h2 className="weather__title">CSS Weather Forecast</h2>
                        <svg className="weather__svg">
                            <use xlinkHref="#title" />
                        </svg>
                    </div>
                    <div className="row">
                        <div className="weather__item col-6">
                            <p className="weather__city">Lisbon</p>
                            <div className="weather__wrapper">
                                <p className="weather__temp">21 ºC</p>
                                <svg className="weather__img">
                                    <use xlinkHref="#lisbon" />
                                </svg>
                            </div>
                        </div>
                        <div className="weather__item col-3">
                            <p className="weather__city">Paris</p>
                            <div className="weather__wrapper">
                                <p className="weather__temp">11 ºC</p>
                                <svg className="weather__img">
                                    <use xlinkHref="#paris" />
                                </svg>
                            </div>
                        </div>
                        <div className="weather__item col-3">
                            <p className="weather__city">Belgrade</p>
                            <div className="weather__wrapper">
                                <p className="weather__temp">21 ºC</p>
                                <svg className="weather__img">
                                    <use xlinkHref="#belgrade" />
                                </svg>
                            </div>
                        </div>
                        <div className="weather__item col-3">
                            <p className="weather__city">Venice</p>
                            <div className="weather__wrapper">
                                <p className="weather__temp">21 ºC</p>
                                <svg className="weather__img">
                                    <use xlinkHref="#venice" />
                                </svg>
                            </div>
                        </div>
                        <div className="weather__item col-3">
                            <p className="weather__city">Tel-Avive</p>
                            <div className="weather__wrapper">
                                <p className="weather__temp">32 ºC</p>
                                <svg className="weather__img">
                                    <use xlinkHref="#tel-avive" />
                                </svg>
                            </div>
                        </div>
                        <div className="weather__item col-3">
                            <p className="weather__city">Cair</p>
                            <div className="weather__wrapper">
                                <p className="weather__temp">21 ºC</p>
                                <svg className="weather__img">
                                    <use xlinkHref="#cair" />
                                </svg>
                            </div>
                        </div>
                        <div className="weather__item col-3">
                            <p className="weather__city">New-Yourk</p>
                            <div className="weather__wrapper">
                                <p className="weather__temp">17 ºC</p>
                                <svg className="weather__img">
                                    <use xlinkHref="#new-yourk" />
                                </svg>
                            </div>
                        </div>
                        <div className="weather__item col-3">
                            <p className="weather__city">New-Delhi</p>
                            <div className="weather__wrapper">
                                <p className="weather__temp">17 ºC</p>
                                <svg className="weather__img">
                                    <use xlinkHref="#new-delhi" />
                                </svg>
                            </div>
                        </div>
                        <div className="weather__item col-6">
                            <p className="weather__city">San-Francisko</p>
                            <div className="weather__wrapper">
                                <p className="weather__temp">15 ºC</p>
                                <svg className="weather__img">
                                    <use xlinkHref="#san-francisko" />
                                </svg>
                            </div>
                        </div>
                        <div className="weather__item col-3">
                            <p className="weather__city">Tokyo</p>
                            <div className="weather__wrapper">
                                <p className="weather__temp">8 ºC</p>
                                <svg className="weather__img">
                                    <use xlinkHref="#tokyo" />
                                </svg>
                            </div>
                        </div>
                        <div className="weather__item col-12">
                            <p className="weather__city">Sydney</p>
                            <div className="weather__wrapper">
                                <p className="weather__temp">25 ºC</p>
                                <svg className="weather__img">
                                    <use xlinkHref="#sydney" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <p className="subtitle">
                        Have a nice day and don't forget umbrella if you are in New Delhi now!
                    </p>
                </div>
            </section>
        </main>
    );
}


export default Markup;
