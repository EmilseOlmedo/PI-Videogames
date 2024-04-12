import axios from 'axios';

import { 
    GET_ALL_VIDEOGAMES,
    GET_VIDEOGAMES_DETAIL,
    GET_VIDEOGAMES_NAME,
    GET_GENRES,
    POST_VIDEOGAME,
    FILTER_GENRES,
    ORDER_ALP,
    ORDER_RATING,
    FILTER_API_DB,
 } from "./action-types.js";


const URL_BASE = 'http://localhost:3001/videogames'

const getAllVideogames = () =>{
    return async (dispatch) => {    //recibo un dispatch---El hook useDispatch sólo se puede utilizar en componentes funcionales
        try {
            const {data} = await axios.get(URL_BASE);      
            return dispatch ({ 
                type: GET_ALL_VIDEOGAMES, 
                payload: data
            })
        } catch (error) {
            window.alert (error.message)
            
        }
    }
 }

const getVideogamesDetail = (id)=>{
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`${URL_BASE}/${id}`);
            
            return dispatch ({
                type: GET_VIDEOGAMES_DETAIL,
                payload: data
            })
        } catch (error) {
            window.alert (error.message)        
        }
    }
}

const getVideogamesName = (name)=>{
        return async (dispatch)=>{
            try {
                const {data} = await axios.get(`${URL_BASE}?name=${name}`)
                    dispatch ({
                    type: GET_VIDEOGAMES_NAME,
                    payload: data
                    })
            } catch (error) {
                window.alert ('There is no video game with that name')           
            }
        }
    }
    
const getGenres =()=>{
    return async(dispatch)=>{
        try {
            const response = await axios.get("http://localhost:3001/genres")
            const data = response.data.sort((a, b) => a.name.localeCompare(b.name));
            dispatch ({
                type: GET_GENRES,
                payload: data
        })
        } catch (error) {
            window.alert (error.message)
            
        }
    }
}

const postVideogames = (payload)=> {
    return async (dispatch)=>{
        try {
            const {data} = await axios.post(URL_BASE, payload);
             return dispatch ({
                type: POST_VIDEOGAME,
                payload: data
            })
            
        } catch (error) {
            window.alert (error.message)
         }
    }
}

    // export const addGame = (data) => {
    //     return function (dispatch) {
    //       try {
    //         return dispatch({
    //           type: ADD_GAME,
    //           payload: data,
    //         });
    //       } catch (error) {
    //         window.alert(error.message);
    //       }
    //     };
    //   };

    const filterGameByGenre = (filter) => {
        return {
          type: FILTER_GENRES,
          payload: filter,
        };
      };

    const orderAlp = (order) =>{
        return {
            type: ORDER_ALP,
            payload: order
        }
    }

    const orderRating = (order)=>{
        return {
            type: ORDER_RATING,
            payload: order
        }
    }

    const filterCreated = (filter) =>{
        return {
            type: FILTER_API_DB, 
            payload: filter
        }
    }



 export {
    getAllVideogames,
    getVideogamesDetail,
    getVideogamesName,
    getGenres,
    postVideogames,
    filterGameByGenre,
    orderAlp,
    orderRating,
    filterCreated
};