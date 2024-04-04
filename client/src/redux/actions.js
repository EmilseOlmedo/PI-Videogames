import axios from 'axios';

import { GET_ALL_VIDEOGAMES } from "./action-types.js";


const URL_BASE = 'http://localhost:3001/videogames'

const getAllVideogames = () =>{
    return async (dispatch) => {    //recibo un dispatch---El hook useDispatch sólo se puede utilizar en componentes funcionales
        try {
            const {data} = await axios.get(URL_BASE);
            // const data = resp.data         
            return dispatch ({ 
                type: GET_ALL_VIDEOGAMES, 
                payload: data
            })
        } catch (error) {
            throw error ('Error receiving videogame information from the server')
            
        }
    }
 }

 export {getAllVideogames};