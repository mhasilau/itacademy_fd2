export const getToken = () => localStorage.getItem('token');
export const setToken = token => localStorage.setItem('token', token);
export const removeToken = () => localStorage.removeItem('token');
export const getLogin = () => localStorage.getItem('nickname');
export const setLogin = nickname => localStorage.setItem('nickname', nickname);
export const removeLogin = () => localStorage.removeItem('nickname');