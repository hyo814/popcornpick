import React, {useEffect} from 'react';
import { useQuery } from "@tanstack/react-query";
import {fetchMovies} from "./api/movie";
import MoviePagination from "@/components/MoviePagination";
import MovieSelectAskBox from "../components/MoiveSelectAskBox"
import MovieAnswerBox from "@/components/MovieAnswerBox";
import styles from "../styles/index.module.css";
import {
	currentPageState,
	fetchTriggerState,
	isSearchClickedState,
	selectedLanguageState,
	selectedSortState,
	sortedMoviesState
} from '../state/index';
import { useRecoilState } from 'recoil';

const SelectMovie: React.FC = () => {
	const [selectedLanguage, ] = useRecoilState(selectedLanguageState);
	const [selectedSort, ] = useRecoilState(selectedSortState);
	const [currentPage, ] = useRecoilState(currentPageState);
	const [fetchTrigger, setFetchTrigger] = useRecoilState(fetchTriggerState);
	const [, setSortedMovies] = useRecoilState(sortedMoviesState);
	const [isSearchClicked, setIsSearchClicked] = useRecoilState(isSearchClickedState);
	
  const { data: movies, isLoading: isLoadingMovies, error: errorMovies } = useQuery({
    queryKey: ['movies', selectedLanguage, selectedSort, currentPage],
    queryFn: () => fetchMovies(selectedLanguage, currentPage),
    enabled: fetchTrigger && isSearchClicked,
    onSuccess: () => {
      setFetchTrigger(false);
      setIsSearchClicked(false);
    },
  });
  
  const sortMovies = (movies:object[], sortKey:string) => {
    if (!movies) return [];
    const [key, order] = sortKey.split('.');
    return movies.slice().sort((a, b) => {
      if (order === 'desc') {
        return b[key] < a[key] ? -1 : 1;
      } else {
        return a[key] < b[key] ? -1 : 1;
      }
    });
  }
	
  useEffect(() => {
    if (movies && movies.results && selectedSort) {
      const sortedData = sortMovies(movies.results, selectedSort);
      setSortedMovies(sortedData);
    }
  }, [movies, selectedSort]);
  
  return (
    <div className={styles.movie_container}>
	    <MovieSelectAskBox />
      <hr className={styles.hr}/>
	    <MovieAnswerBox errorMovies={errorMovies} isLoadingMovies={isLoadingMovies}/>
      <MoviePagination movies={movies} isSearchClicked={isSearchClicked} />
    </div>
  );
};

export default SelectMovie;
