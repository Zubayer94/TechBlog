import React from 'react'
import { DateTime } from "luxon";

const commentView = ({comment}) => {
    const formateDate = (date) => {
        const nDate = DateTime.fromISO(date)
        return nDate.toLocaleString(DateTime.DATETIME_MED);
    }
    return (
        <div>
            <div className="post-preview">
                <h4 className="post-title">{comment.comment}</h4>
                <p className="post-meta">
                    Commented by <b>{comment?.user?.name}</b> on {formateDate(comment.created_at)}
                </p>
            </div>
            {/* Divider*/}
            <hr className="my-4" />
        </div>
    )
}

export default commentView;