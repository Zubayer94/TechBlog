import React from 'react'
import { DateTime } from "luxon";
import { Link } from 'react-router-dom';

const indexPostView = ({post}) => {
    const filterWords = (text, textLength) => {
        if (text.length > textLength) {
            return text.substring(0, textLength) + '. . .';
        }
        if (text.length <= textLength) {
            return text;
        }
    } 
    const formateDate = (date) => {
        const nDate = DateTime.fromISO(date)
        return nDate.toLocaleString(DateTime.DATETIME_MED);
    }
    return (
        <div>
            <div className="post-preview">
                <Link to={`/post/${post.id}`}>
                    <h2 className="post-title">{post.title}</h2>
                    <h3 className="post-subtitle">{filterWords(post.description, 80)}</h3>
                </Link>
                <p className="post-meta">
                    Posted by <b>{post.user.name}</b> on {formateDate(post.created_at)}
                </p>
            </div>
            {/* Divider*/}
            <hr className="my-4" />
        </div>
    )
}

export default indexPostView
