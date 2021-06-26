export const PostReducer = (posts, action) => {
    switch (action.type) {
        case 'setAllPost':
            return [...action.posts]

        case 'postAdded':
            return [...posts, { 
                title: action.post.title,
                description: action.post. description,
            }]

        case 'postUpdated':
            return posts.map(post => {
                if (post.id == action.id) {
                    post.title = action.post.title;
                    post.description = action.post.description;
                }
                return post;
            })
            // console.log('new posts',posts);
            // return [posts]

        case 'PostRemoved':
            return state.filter(post => post.id !== action.id)
    
        default:
            return posts;
    }
}