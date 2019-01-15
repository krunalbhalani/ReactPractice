export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const selectMovie = movie => {
    console.log("You clicked on movie: ", movie.name);
    return{
        type: 'MOVIE_SELECTED',
        payload: movie
    }
};

export const deleteMovie = id => {
    return {
        type: 'MOVIE_DELETED',
        id:id
    }
}

export const markMovie = id => {
    return {
        type: 'MOVIE_MARKED',
        id:id
    }
}
