import React from 'react';
import { useRecoilState } from 'recoil';
import { currentPageState, fetchTriggerState } from '@/state';
import styles from "../styles/index.module.css";

interface MoviePaginationProps {
	movies: any;
	isSearchClicked: boolean;
}

const MoviePagination: React.FC<MoviePaginationProps> = ({ movies, isSearchClicked }) => {
	const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
	const [, setFetchTrigger] = useRecoilState(fetchTriggerState);
	
	const totalPages = movies?.total_pages || 0;
	const maxPageNav = 10;
	let startPage = Math.max(1, currentPage - Math.floor(maxPageNav / 2));
	let endPage = Math.min(totalPages, startPage + maxPageNav - 1);
	
	if (endPage - startPage < maxPageNav - 1) {
		startPage = Math.max(1, endPage - maxPageNav + 1);
	}
	
	const pages = Array.from({ length: Math.min(maxPageNav, totalPages) }, (_, i) => i + startPage);
	
	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage);
		setFetchTrigger(true);
		window.scrollTo(0, 0);
	};
	
	return (
		<>
			{isSearchClicked && (
				<div className={styles.pagination}>
					{currentPage > 1 && (
						<button onClick={() => handlePageChange(currentPage - 1)}>Prev</button>
					)}
					{pages.map(page => (
						<button key={page} disabled={page === currentPage} onClick={() => handlePageChange(page)}>
							{page}
						</button>
					))}
					{currentPage < totalPages && (
						<button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
					)}
				</div>
			)}
		</>
	);
};

export default MoviePagination;
