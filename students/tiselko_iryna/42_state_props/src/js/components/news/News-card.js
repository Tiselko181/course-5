import React from "react";

export default function NewsCard({ newsDate, newsText }) {
    return (
        <div className="news__item">
            <p className="news__date">{newsDate}</p>
            <h4 className="news__content">
                <a href="#" className="news__link">
                    {newsText}
                </a>
            </h4>
        </div>
    )
}
