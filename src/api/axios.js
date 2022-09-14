import axios from "axios";

const build_url = "https://apsfinance.herokuapp.com"
const dev_url = "http://localhost:2727"

export const api = axios.create({
    baseURL: build_url
})
