import axios from "axios";

export const loginUser = (payload) => {
    return axios.post('https://apt-booking-api.herokuapp.com/users/login', payload);
};

export const registerUser = (payload) => {
    return axios.post('https://apt-booking-api.herokuapp.com/users/register', payload);
};

export const logout = () => {
    return axios.post('https://apt-booking-api.herokuapp.com/users/logout');
};