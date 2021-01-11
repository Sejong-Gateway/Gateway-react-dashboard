import axios from 'axios';

const api = axios.create({
    baseURL: `http://sju-gateway.com:3000/v1/`,
});

//유저관리
export const getUsers = () => api.get(`user`);

export const createSubject = (subject) => api.post(`subject`, subject);

export const getSubjects = () => api.get(`subject`);

export const updateSubject = (subject, id) => api.put(`subject/${id}`, subject);

export const removeSubject = (id) => api.delete(`subject/${id}`);

export const login = (user) => api.post(`/user/login`, user);

// export const logout