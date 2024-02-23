import React from 'react';
import { useRecoilState } from 'recoil';
import { sortedMoviesState, selectedLanguageState } from '@/state';
import Image from "next/image";
import MovieList from "@/components/MovieList";
import styles from "../styles/index.module.css";

interface MovieAnswerBoxProps {
	errorMovies:any;
	isLoadingMovies: boolean;
}

const MovieAnswerBox: React.FC<MovieAnswerBoxProps> = ({ errorMovies, isLoadingMovies }) => {
	const [sortedMovies] = useRecoilState(sortedMoviesState);
	const [selectedLanguage] = useRecoilState(selectedLanguageState);
	
	const renderRating = (vote_average: number) => {
		const rating = Math.round(vote_average) / 2;
		return Array.from({ length: 5 }, (_, i) => (
			<span key={i}>{i < rating ? '★' : '☆'}</span>
		));
	};
	
	return (
		<div className={styles.search_answer}>
			{isLoadingMovies && <div>Loading...</div>}
			{errorMovies && <div>An error occurred!! </div>}
			{sortedMovies && sortedMovies.map((movie) => (
				<div className={styles.movie_box} key={movie.id}>
					<h2 className={styles.movie_title}> MOVIE TITLE : {movie.title}</h2>
					<h5 className={styles.movie_title_detail}>
						<p>ORIGINAL TITLE : {movie.original_title}</p>
						<p>ORIGINAL LANGUAGE : {movie.original_language}</p>
					</h5>
					{movie.backdrop_path && (
						<Image
							className={styles.img}
							src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
							alt={`${movie.title} Poster`}
							width={500}
							height={281}
						/>
					)}
					<div className={styles.desc}><b>MOVIE DESCRIPTION</b> : {movie.overview}</div>
					{movie.genre_ids && <MovieList genreIds={movie.genre_ids.join(', ')} language={selectedLanguage}/>}
					<div className={styles.vote}><b>MOVIE VOTE</b> : {renderRating(movie.vote_average)}</div>
					<div className={styles.date}><b>RELEASE DATE</b> : {movie.release_date}</div>
				</div>
			))}
		</div>
	);
};

export default MovieAnswerBox;
