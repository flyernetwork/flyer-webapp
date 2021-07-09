import axios from "axios";

export const INSTANCE = axios.create({
 baseURL: process.env.API_URI,
 headers : { 'flyercore-api-version' : 'v1'}
})