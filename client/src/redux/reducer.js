import { 
    GET_ALL_VIDEOGAMES,
    GET_VIDEOGAMES_DETAIL,
    GET_VIDEOGAMES_NAME
} from './action-types.js'

const initialState = {
    allVideogames: [],
    allVideogamesCopy: [],
    videogameDetail: [],
    // allFavorites: [],
    // myFavorites: {},
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
        default:
            return {...state}
    }
}

export default reducer;
