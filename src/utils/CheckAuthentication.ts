import jwtDecode from 'jwt-decode';
import { logoutUser, getUserData } from '../redux/actions/userActions'
import { store } from '../redux/store';
import axios from 'axios';
import { SET_AUTHENTICATED } from '../redux/types'

export const CheckAuthentication = () => {
    const userData = localStorage.getItem('userInfo');
    const userInfo = JSON.parse(userData as string);
    const authToken = userInfo ? userInfo.token : null;
    if (authToken) {
        const decodedToken: any = jwtDecode(authToken);
      if (decodedToken.exp * 1000 < Date.now()) {
            store.dispatch(logoutUser());


        } else {
            const token = `Bearer ${authToken}`;
            store.dispatch({ type: SET_AUTHENTICATED });
            axios.defaults.headers.common['Authorization'] = token;
            store.dispatch(getUserData());
        }

    }




}