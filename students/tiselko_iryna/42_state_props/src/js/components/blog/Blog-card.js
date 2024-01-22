import React from "react";

export default function BlogCard({ imgSrc, blogTitle, blogText }) {
    return (
        <div className="blog-card card">
            <img src={imgSrc} alt="travel-img" className="blog-card__img" />
            <div className="blog-card__content content">
                <h3 className="content__title">{blogTitle}</h3>
                <p className="content__text">
                    <a href="#" className="content__link">
                        {blogText}
                    </a>
                </p>
                <p className="content__date">14.10.23</p>
            </div>
        </div>
    )
}
