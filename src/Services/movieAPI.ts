import { Movie } from "../Interface/movie";
import axiosClient from "./axiosClient";

const movieAPI = {
    getMovieShowing: () => {
        return axiosClient.get<any, Movie[]>("QuanLyPhim/LayDanhSachPhim");
    },
};

export default movieAPI;
