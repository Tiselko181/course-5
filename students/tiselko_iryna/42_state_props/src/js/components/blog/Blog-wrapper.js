import React from "react";

import Title from "../Title";
import BlogCard from "./Blog-card";

export default function BlogWrapper() {
    return (
        <div className="col-7 blog__wrapper ">
            <Title titleText="Blog" />
            <BlogCard imgSrc="./images/main/blog/blog_1.jpg" blogTitle="Travel 1" blogText="Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Veritatis tempore cupiditate dicta ratione vero sit possimus nihil, aspernatur ab nam laboriosam, culpa, dolorem obcaecati
            quis ad similique recusandae quam velit!" />
            <BlogCard imgSrc="./images/main/blog/blog_2.jpg" blogTitle="Travel 2" blogText="Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Veritatis tempore cupiditate dicta ratione vero sit possimus nihil, aspernatur ab nam laboriosam, culpa, dolorem obcaecati
            quis ad similique recusandae quam velit!" />
            <BlogCard imgSrc="./images/main/blog/blog_3.jpg" blogTitle="Travel 3" blogText="Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Veritatis tempore cupiditate dicta ratione vero sit possimus nihil, aspernatur ab nam laboriosam, culpa, dolorem obcaecati
            quis ad similique recusandae quam velit!" />
            <BlogCard imgSrc="./images/main/blog/blog_4.jpg" blogTitle="Travel 4" blogText="Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Veritatis tempore cupiditate dicta ratione vero sit possimus nihil, aspernatur ab nam laboriosam, culpa, dolorem obcaecati
            quis ad similique recusandae quam velit!" />
            <BlogCard imgSrc="./images/main/blog/blog_5.jpg" blogTitle="Travel 5" blogText="Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Veritatis tempore cupiditate dicta ratione vero sit possimus nihil, aspernatur ab nam laboriosam, culpa, dolorem obcaecati
            quis ad similique recusandae quam velit!" />
        </div>
    )
}
