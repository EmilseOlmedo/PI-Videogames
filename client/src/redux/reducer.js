import { GET_ALL_VIDEOGAMES } from './action-types.js'

const initialState = {
    allVideogames: [],
    allVideogamesCopy: [],
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
        default:
            return {...state}
    }
}

export default reducer;
