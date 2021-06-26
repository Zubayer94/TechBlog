import React from 'react'

const indexPostView = ({post}) => {
    const filterWords = (text, textLength) => {
        if (text.length > textLength) {
            return text.substring(0, textLength) + '. . .';
        }
        if (text.length <= textLength) {
            return text;
        }
    } 
    return (
        <div>
            <div className="post-preview">
                <a href="post.html">
                    <h2 className="post-title">{post.title}</h2>
                    <h3 className="post-subtitle">{filterWords(post.description, 80)}</h3>
                </a>
                <p className="post-meta">
                    Posted by
                    <a href="#!">Start Bootstrap</a>
                    on September 24, 2021
                </p>
            </div>
            {/* Divider*/}
            <hr className="my-4" />
        </div>
    )
}

export default indexPostView
