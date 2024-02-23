export interface Movie {
	id: number;
	title: string;
	original_title: string;
	original_language: string;
	overview: string;
	backdrop_path: string | null;
	genre_ids: number[];
	vote_average: number;
	release_date: string;
}

export interface MovieListProps {
	language: string;
	genreIds: string;
}

export interface Genre {
	id: number;
	name: string;
}
