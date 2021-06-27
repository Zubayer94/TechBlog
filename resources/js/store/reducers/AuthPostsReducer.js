export const AuthPostsReducer = (authPosts, action) => {
    switch (action.type) {
        case 'setAuthPosts':
            return [...action.authPosts]

        case 'authPostAdded':
            return [{ ...action.authPost}, ...authPosts]

        case 'authPostUpdated':
            return authPosts.map(authPost => {
                if (authPost.id == action.authPost.id) {
                    authPost.title = action.authPost.title;
                    authPost.description = action.authPost.description;
                }
                return authPost;
            })

        case 'authPostRemoved':
            return authPosts.filter(authPost => authPost.id !== action.id)
    
        default:
            return authPosts;
    }
}