import axios from "axios";

const instance = axios.create({
    baseURL: "http://api.themoviedb.org/3",

});
// instance.get("/movie/top_rated");

export default instance;