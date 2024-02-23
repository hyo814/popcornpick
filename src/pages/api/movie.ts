import axios from "axios";
import {Genre} from "@/types";

export const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing"
export const movieListUrl= "https://api.themoviedb.org/3/genre/movie/list"
const accessToken = process.env.NEXT_PUBLIC_API_KEY;

export const fetchMovies = async (language: string, page: number) => {
	const params = { language, page };
	const response = await axios.get(`${nowPlayingUrl}`, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
			'Content-Type': 'application/json;charset=utf-8',
		},
		params,
	});
	return response.data;
};


export const fetchMovieList = async (language: string) => {
	const response = await axios.get<{genres: Genre[]}>(movieListUrl, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
			'Content-Type': 'application/json;charset=utf-8',
		},
		params: {
			language
		},
	});
	return response.data.genres;
};
