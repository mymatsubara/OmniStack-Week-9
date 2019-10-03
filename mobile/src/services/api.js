import axios from 'axios'

export const baseURL = "http://192.168.15.11:3333"

export const api = axios.create({
    baseURL
})