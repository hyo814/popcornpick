import { atom } from 'recoil';
import { Movie } from "@/types";

export const selectedLanguageState = atom<string>({
	key: 'selectedLanguageState',
	default: '',
});

export const selectedSortState = atom<string>({
	key: 'selectedSortState',
	default: '',
});

export const currentPageState = atom<number>({
	key: 'currentPageState',
	default: 1,
});

export const fetchTriggerState = atom<boolean>({
	key: 'fetchTriggerState',
	default: false,
});

export const sortedMoviesState = atom<Movie[]>({
	key: 'sortedMoviesState',
	default: [],
});

export const isSearchClickedState = atom<boolean>({
	key: 'isSearchClickedState',
	default: false,
});
