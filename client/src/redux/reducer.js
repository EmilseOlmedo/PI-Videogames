import { 
    GET_ALL_VIDEOGAMES,
    GET_VIDEOGAMES_DETAIL,
    GET_VIDEOGAMES_NAME,
    GET_GENRES,
    ORDER_ALP,
    ORDER_RATING,
    FILTER_API_DB,
    FILTER_GENRES,
    CREATE_VIDEOGAME
} from './action-types.js'

const initialState = {
    allVideogames: [],
    allVideogamesCopy: [],
    videogameDetail: [],
    genres: [],
}

const reducer = (state = initialState, action)=>{
    switch(action.type) {
        case GET_ALL_VIDEOGAMES:
            return {
                ...state,
                allVideogames: action.payload,
                allVideogamesCopy: action.payload,
            }

        case GET_VIDEOGAMES_DETAIL:
            return {
                ...state,
                videogameDetail: action.payload,
            }

        case GET_VIDEOGAMES_NAME:
            return {
                ...state,
                allVideogames: action.payload,
            }

        case GET_GENRES:
            return {
                ...state,
                genres: action.payload,
            }

        case CREATE_VIDEOGAME:
            return {
                ...state,
                allVideogames: action.payload,
            }
        
        case ORDER_ALP:
            const nameOrder = 
            action.payload === "asc"
                ? [...state.allVideogames].sort((a, b)=> a.name.localeCompare(b.name))
                : [...state.allVideogames].sort((a, b)=> b.name.localeCompare(a.name));
            return {
                ...state,
                allVideogames: nameOrder,
            }

        case ORDER_RATING:
            const ratingOrder =
            action.payload === "asc"
                ? [...state.allVideogames].sort((a,b)=> a.rating - b.rating)
                : [...state.allVideogames].sort((a,b)=> b.rating - a.rating)
            return {
                ...state,
                allVideogames: ratingOrder,
            }

        case FILTER_API_DB:
            const createFilter =
            action.payload === "created"
                ? state.allVideogamesCopy.filter((game)=>game.userCreated)
                : state.allVideogamesCopy.filter((game)=>!game.userCreated);
            return {
                ...state,
                allVideogames: action.payload === "all"
                ? state.allVideogamesCopy
                : createFilter,
            }

        case FILTER_GENRES:
            const genreFilter =
                action.payload === "all"
                ? state.allVideogamesCopy
                : state.allVideogamesCopy.filter((e) => {
                    return e.genres?.includes(action.payload);
                    });
            return {
                ...state,
                allVideogames: genreFilter,
            };
        default:
            return {...state}
    }
}

        

export default reducer;

// case FILTER_GENRES:
//             const {genre, userCreated} = action.payload;
//             //Primero el genero
//       let filteredGamesByGenre =
//       genre === "All"
//         ? state.allVideogames
//         : state.allVideogames.filter(
//             (game) =>
//               game.genres.findIndex(
//                 (element) => element.id === parseInt(genre)
//               ) > -1
//           );

//     //Segundo por creador
//     let filteredGames =
//       userCreated === "All"
//         ? filteredGamesByGenre
//         : filteredGamesByGenre.filter(
//             (game) => game.userCreated === parseInt(userCreated)
//           );

//     //El resultado de los dos niveles de filtrado se copia en el estado
//     return {
//       ...state,
//       allVideogames: filteredGames,
//     };
