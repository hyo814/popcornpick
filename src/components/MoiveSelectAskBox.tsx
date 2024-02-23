import React from 'react';
import { useRecoilState } from 'recoil';
import {
	selectedLanguageState,
	selectedSortState,
	currentPageState,
	fetchTriggerState,
	isSearchClickedState
} from '@/state';
import styles from "../styles/index.module.css";

const MovieSelectAskBox: React.FC = () => {
	const [selectedLanguage, setSelectedLanguage] = useRecoilState(selectedLanguageState);
	const [selectedSort, setSelectedSort] = useRecoilState(selectedSortState);
	const [, setCurrentPage] = useRecoilState(currentPageState);
	const [, setFetchTrigger] = useRecoilState(fetchTriggerState);
	const [, setIsSearchClicked] = useRecoilState(isSearchClickedState);
	
	const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedLanguage(event.target.value);
		setCurrentPage(1);
		setFetchTrigger(true);
	};
	
	const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedSort(event.target.value);
		setFetchTrigger(true);
	};
	
	const handleSearchClick = () => {
		if (!selectedLanguage || !selectedSort) {
			alert('언어와 정렬을 모두 선택해주세요.');
			return;
		}
		setIsSearchClicked(true);
		setFetchTrigger(true);
	};
	
	return (
		<div className={styles.movie_ask_box}>
			<select className={styles.movie_language} value={selectedLanguage} onChange={handleLanguageChange}>
				<option value="">언어를 선택하세요</option>
				<option value="ko-KR">한국어</option>
				<option value="en-US">영어</option>
			</select>
			&nbsp;
			<select className={styles.movie_selected_sort} value={selectedSort} onChange={handleSortChange}>
				<option value="">정렬을 선택하세요</option>
				<option value="title.asc">제목 상위차순</option>
				<option value="title.desc">제목 하위차순</option>
				<option value="popularity.asc">인기 상위차순</option>
				<option value="vote_average.asc">평점 상위차순</option>
				<option value="release_date.desc">최신 개봉차순</option>
				<option value="release_date.asc">최초 개봉차순</option>
			</select>
			&nbsp;
			<button className={styles.search} onClick={handleSearchClick}>검색하기</button>
		</div>
	);
};

export default MovieSelectAskBox;
