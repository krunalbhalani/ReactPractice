//List of Movies

export const initialState = {
    movies: [
        {
            id:1,
            name:"Avatar",
            genre:"Action",
            year:2008,
            completed:false
        },
        {
            id:2,
            name:"Titanic",
            genre:"Romance",
            year:2005,
            completed:false
        },
        {
            id:3,
            name:"Speed",
            genre:"Thriller",
            year:1999,
            completed:false
        },
        {
            id:4,
            name:"Indiana Jones",
            genre:"Adventure",
            year:1985,
            completed:false
        }                
    ],
};
  
  const reducer = (state = initialState, action) => {
    switch(action.type)
      {
        case 'MOVIE_DELETED':
            const remainingMovies = state.movies.filter(({ id }) => id !== action.id);
            return {
                movies: remainingMovies
            };
        case 'MOVIE_MARKED':
            const allmovies = state.movies;
            const items = state.movies.map( item => {
            if(item.id === action.id) {
              item.completed = !item.completed;
            }
            return item;
          });
          return {
            movies: items
        };
        default:
            return state;
        }
    }
  export default reducer;


/*  
export default function()
{
    return [
        {
            id:1,
            name:"Avatar",
            genre:"Action",
            year:2008
        },
        {
            id:2,
            name:"Titanic",
            genre:"Romance",
            year:2005
        },
        {
            id:3,
            name:"Speed",
            genre:"Thriller",
            year:1999

        },
        {
            id:4,
            name:"Indiana Jones",
            genre:"Adventure",
            year:1985
        }                
    ]
}*/