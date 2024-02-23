import React from 'react';
import { useQuery } from '@tanstack/react-query';
import {fetchMovieList} from "@/pages/api/movie";
import {Genre, MovieListProps} from "@/types";

const MovieList: React.FC<MovieListProps> = ({ genreIds, language }) => {
	const { data: genres } = useQuery<Genre[], Error>({
		queryKey: ['movieList', language],
		queryFn: () => fetchMovieList(language),
	});
	
	const genreIdsArray = genreIds.split(',').map(Number);
	
	const genreNames = genreIdsArray.map(genreId => {
		const genre = genres?.find(g => g.id === genreId);
		return genre ? genre.name : 'Unknown Genre';
	});
	
	return (
		<div>
			<b>MOVIE GENRES</b> : {genreNames.join(', ')}
		</div>
	);
};

export default MovieList;
