import axios from "axios";
import { MENU_LIST_FAIL, MENU_LIST_REQUEST, MENU_LIST_SUCCESS } from "../constants/menuConstants"

const listMenu = () => async (dispatch) => {
  try {
    dispatch({ type: MENU_LIST_REQUEST });
    const { data } = await axios.get('https://localhost:44300/api/Menus');
    dispatch({ type: MENU_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MENU_LIST_FAIL, payload: error.message });
  }
}

export { listMenu }