import axios from "axios";
import { CARGANDO, ERROR, TRAER_TODOS } from "../types/usuariosTypes";
//The Action name is traerTodos
export const traerTodos = () => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });

  try {
    const respuesta = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    //Dispatch es el que se comunica con el reducer
    dispatch({
      type: TRAER_TODOS,
      payload: respuesta.data,
    });
  } catch (error) {
    console.log("Error: ", error.message);
    dispatch({
        type: ERROR,
        payload: 'Algo salió mal, intente más tarde.'
    })
  }
};
