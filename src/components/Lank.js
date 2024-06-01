import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom"; 

function Lank() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get("https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1", {
                    headers: {
                        Authorization: `Bearer ` + process.env.REACT_APP_API_KEY
                    }
                });
                const data =  response.data;
                setMovies(data.results);
                
            } catch (error) {
                console.error("Failed to fetch movies", error);
            }
        };
            
        fetchMovies();
    }, []);

    return (
        <Lanking>
            <LankText>박스오피스 순위</LankText>
            <Movie>
                {movies.map((movie) => (
                    <Info key={movie.id}>
                        <Link to={`/Detail/${movie.id}`}><MovieImage src={`https://image.tmdb.org/t/p/w500` + movie.poster_path} alt={movie.title} /></Link>
                        <Title>{movie.title}</Title>
                        <YearCountry>{movie.release_date.split("-")[0]} · {movie.original_language.toUpperCase()}</YearCountry>
                        <PercentAudience>평점 {movie.vote_average} · 투표 수 {movie.vote_count}</PercentAudience>
                    </Info>
                    
                ))}
            </Movie>
        </Lanking>
    );
}


const Movie = styled.div`
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 100px;
    padding-top: 20px;
    &::-webkit-scrollbar{
        display: none;
    }
`;

const Lanking = styled.div`
    margin: 0;
    padding: 0 3% 3% 3%;
    padding-top: 10%;

`;

const LankText = styled.p`
    font-weight: bolder;
    font-size: 20px;
`;

const MovieImage = styled.img`
    width: 200px;
    height: 100%;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 10px;
`;

const Info = styled.div`
    
`;

const Title = styled.p`
    margin-left: 10px;
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const YearCountry = styled.p`
    margin-left: 10px;
    font-size: 14px;
`;

const PercentAudience = styled.p`
    margin-left: 10px;
    font-size: 12px;
`;

export default Lank;