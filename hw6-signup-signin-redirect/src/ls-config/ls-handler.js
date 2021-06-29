export const getToken = () => localStorage.getItem('token');
export const setToken = token => localStorage.setItem('token', token);
export const removeToken = () => localStorage.removeItem('token');
export const getLogin = () => localStorage.getItem('email');
export const setLogin = email => localStorage.setItem('email', email);
export const removeLogin = () => localStorage.removeItem('email');