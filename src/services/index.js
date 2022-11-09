import axios from "axios";
import { API_BASEURL } from "../settings/conststnts";

const baseUrl = API_BASEURL;

const get = (url) => {
  return axios.get(url);
};

const post = (url, data) => {
  return axios.post(url, data);
};

export const sendLogin = (userData) => {
  return post(baseUrl + "api/user/login", userData);
};

//------------teachers ----------------------------//
export const fetchTeachers = () => {
    return get(baseUrl + 'teachers');
};

export const saveTeacher = (data) => {
  return post(baseUrl + "teachers", data);
};

//------------classes ----------------------------//
export const fetchClasses = () => {
    return get(baseUrl + 'class');
};

export const saveClass = (data) => {
  return post(baseUrl + "class", data);
};