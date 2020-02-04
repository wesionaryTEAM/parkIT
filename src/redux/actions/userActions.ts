import { SET_USER, SET_ERRORS, LOADING_UI, CLEAR_ERRORS, SET_UNAUTHENTICATED, LOADING_USER } from '../types'
import axios from 'axios';
export { }
export const loginUser = (userData: any, history: any) => (dispatch: any) => {
    dispatch({ type: LOADING_UI })

    axios.post('login', userData)
        .then(async (res) => {
            const token = `Bearer ${res.data.token}`;
            localStorage.setItem('token', `Bearer ${res.data.token}`);
            axios.defaults.headers.common['Authorization'] = token;
            await dispatch(getUserData());
            dispatch({ type: CLEAR_ERRORS });
            history.push('/');

        })
        .catch((err) => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data

            });

        });
}

export const userRegister = (data: any, history: any) => (dispatch: any) => {
    dispatch({ type: LOADING_UI });
    axios.post('/register', data)
        .then(async (res) => {
            const token = `Bearer ${res.data.token}`;
            localStorage.setItem('token', `Bearer ${res.data.token}`);
            axios.defaults.headers.common['Authorization'] = token;
            await dispatch(getUserData());
            dispatch({ type: CLEAR_ERRORS });
            history.push('/');
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            });

        })
}


export const getUserData = () => async (dispatch: any) => {
    dispatch({ type: LOADING_USER });
    await axios.get('/user')
        .then(res => {
            dispatch({
                type: SET_USER,
                payload: res.data

            });

        }).catch(err => {
            console.log(err);

        });


}



export const logoutUser =  () =>  (dispatch: any) => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization']
     dispatch({
        type: SET_UNAUTHENTICATED

    });
};


