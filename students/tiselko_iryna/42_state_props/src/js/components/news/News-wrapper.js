import React from "react";

import Title from "../Title";
import NewsCard from "./News-card";

export default function NewsWrapper() {
    return (
        <aside className="col-4 news">
            <Title titleText="Latest news" />
            <div className="news__list">
                <NewsCard newsDate="13.10.23"
                    newsText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquam odio earum incidunt molestias a quos architecto 
                beatae, rem tempora cupiditate magni commodi repellendus possimus, esse atque necessitatibus maiores eius." />
                <NewsCard newsDate="12.10.23"
                    newsText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquam odio earum incidunt molestias a quos architecto 
                beatae, rem tempora cupiditate magni commodi repellendus possimus, esse atque necessitatibus maiores eius." />
                <NewsCard newsDate="11.10.23"
                    newsText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquam odio earum incidunt molestias a quos architecto 
                beatae, rem tempora cupiditate magni commodi repellendus possimus, esse atque necessitatibus maiores eius." />
                <NewsCard newsDate="10.10.23"
                    newsText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquam odio earum incidunt molestias a quos architecto 
                beatae, rem tempora cupiditate magni commodi repellendus possimus, esse atque necessitatibus maiores eius." />
                <NewsCard newsDate="09.10.23"
                    newsText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquam odio earum incidunt molestias a quos architecto 
                beatae, rem tempora cupiditate magni commodi repellendus possimus, esse atque necessitatibus maiores eius." />
                <NewsCard newsDate="08.10.23"
                    newsText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquam odio earum incidunt molestias a quos architecto 
                beatae, rem tempora cupiditate magni commodi repellendus possimus, esse atque necessitatibus maiores eius." />
            </div>
        </aside>
    )
}
