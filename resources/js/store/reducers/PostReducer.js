export const PostReducer = (posts, action) => {
    switch (action.type) {
        case 'setAllPost':
            return [...action.posts]

        case 'postAdded':
            return [{ ...action.post}, ...posts]

        case 'postUpdated':
            return posts.map(post => {
                if (post.id == action.post.id) {
                    post.title = action.post.title;
                    post.description = action.post.description;
                }
                return post;
            })

        case 'PostRemoved':
            return posts.filter(post => post.id !== action.id)
    
        default:
            return posts;
    }
}