import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; 
import {DATA} from "../assets/Data";

function Lank() {
    return (
        <Lanking>
            <LankText>박스오피스 순위</LankText>
            <Movie>
                {DATA.map((movie) => (
                    <Info key={movie.rank}>
                        <Link to={`/detail/${movie.rank}`}><MovieImage src={movie.img} alt={movie.title} /></Link>
                        <Title>{movie.title}</Title>
                        <YearCountry>{movie.year} · {movie.country}</YearCountry>
                        <PercentAudience>예매율{movie.percent} · 누적 관객 {movie.audience}명</PercentAudience>
                    </Info>
                ))}
            </Movie>
        </Lanking>
    );
}


const Movie = styled.div`
    height: fit-content;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow-x: auto;
    white-space: nowrap;
    justify-content: flex-start;
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
    width: 250px;
    height: fit-content;
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