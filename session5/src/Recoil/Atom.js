import axios from "axios";
import { atom, selector } from "recoil";

export const recAtom = atom({
    key: 'recAtomKey',
    default: [],
})

export const recSelector = selector({
    key: 'recSelectorKey',
    get: async () => {
        try{
            const response = await axios.get(
                "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR",{
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_TOP_RATED_KEY}`,
                    },
                });
                return response.data.results;
        }
        catch (error) {
            console.error('Error fetching data from TMDB API:', error);
            return [];
        }
    },
});

export const darkMode = atom({
    key: 'darkModeStateKey',
    default: false,
});