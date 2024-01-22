import React from "react";

import BlogWrapper from "./blog/Blog-wrapper";
import NewsWrapper from "./news/News-wrapper";

export default function BlogNews() {
    return (
        <div className="container">
            <div className="row">
                <BlogWrapper />
                <NewsWrapper />
            </div>
        </div>
    )
}
