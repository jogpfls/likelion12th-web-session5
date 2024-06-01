import React from "react";
import { useRecoilValue } from "recoil";
import { recSelector } from "../Recoil/Atom";
import styled from "styled-components";
import { Link } from "react-router-dom";

function RecommendMovie() {
    const movies = useRecoilValue(recSelector);
    const handleScroll = (e) => {
        if (!window.scrollY) return;
        // 현재 위치가 이미 최상단일 경우 return
    
        window.scrollTo({
            op: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Lanking>
            <LankText onClick={handleScroll()}>추천작</LankText>
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
    cursor: pointer;
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

export default RecommendMovie;