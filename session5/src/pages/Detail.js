import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Star from "../assets/image/Star.png";

const Detail = () => {
    const { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState(null);
    const [genres, setGenres] = useState([]);
    const [country, setCountry] = useState("");

    useEffect(() => {
        const fetchMovieInfo = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`, 
                    {
                      headers: {
                        Authorization: `Bearer ` + process.env.REACT_APP_API_KEY
                    }
                        
                    }
                );
                const data = await response.json();
                setMovieInfo(data);

                if (data.genres) {
                    const genreNames = data.genres.map((genre) => genre.name);
                    setGenres(genreNames);
                }
                if (data.production_countries && data.production_countries.length > 0) {
                  setCountry(data.production_countries[0].name);
              }
                
            } catch (error) {
                console.error("Failed to fetch movie details", error);
            }
        };
        fetchMovieInfo();
    }, [movieId]);
    console.log('API Key:', process.env.REACT_APP_API_KEY);
    
    return (
        <Container>
            {movieInfo ? (
                <>
                    <Movie>
                        <Up>
                            <Image src={`https://image.tmdb.org/t/p/w500/${movieInfo.backdrop_path}`} />
                            <TitleWrapper>
                                <Title>{movieInfo.title}</Title>
                                <SmallTitle>{movieInfo.original_title}</SmallTitle>
                                <YearGenreCountry>
                                    {movieInfo.release_date.slice(0, 4)} · {genres.map((genre, index) => (
                                        <span key={index}>{genre} </span>
                                    ))} · {country}
                                </YearGenreCountry>
                            </TitleWrapper>
                        </Up>
                        <Down>
                            <Q>
                                <LeftWrapper>
                                    <PosterImg src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`} alt={movieInfo.title} />
                                    <Graph>별점 그래프</Graph>
                                    <StarText>평균 ★ {movieInfo.vote_average}</StarText>
                                    <Person>({movieInfo.vote_count})</Person>
                                </LeftWrapper>
                                <RightWrapper>
                                    <MovieCritic>
                                        <First>
                                            <CriticBox>
                                                <StarImg src={Star} alt="평점" />
                                                <StarCritic>평가하기</StarCritic>
                                            </CriticBox>
                                            <StarBox>
                                                <CriticAndPerson>
                                                    <Critic>{movieInfo.vote_average}</Critic>
                                                    <Person>평균 별점 {movieInfo.vote_count}</Person>
                                                </CriticAndPerson>
                                            </StarBox>
                                        </First>
                                        <Line></Line>
                                        <Second>
                                            <WannaSee>보고싶어요</WannaSee>
                                            <Comment>코멘트</Comment>
                                            <Seeing>보는 중</Seeing>
                                        </Second>
                                        <Line></Line>
                                    </MovieCritic>
                                    <Substance>{movieInfo.overview}</Substance>
                                </RightWrapper>
                            </Q>
                        </Down>
                    </Movie>
                </>
            ) : (
                <p>로딩중…</p>
            )}
        </Container>
    );
};

const Container = styled.div``;

const Movie = styled.div``;

const Up = styled.div`
    position: relative;
    height: 550px;
    z-index: 1;
`;

const TitleWrapper = styled.div`
    bottom: 60px;
    position: absolute;
    z-index: 2;
    margin: 0 60px;
`;

const Image = styled.img`
    display: flex;
    position: absolute;
    top: 0px;
    left: 0px;
    justify-content: center;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Title = styled.p`
    color: white;
    font-size: 36px;
    font-weight: 700;
    line-height: 36px;
`;

const SmallTitle = styled.p`
    margin-top: 16px;
    font-size: 14px;
    line-height: 18px;
    color: white;
`;

const YearGenreCountry = styled.p`
    font-size: 14px;
    line-height: 18px;
    margin-top: 8px;
    color: white;
`;

const Q = styled.div`
    margin: 0px 60px;
    padding: 30px 0px 60px;
    display: flex;
    flex-direction: row;
`;

const Down = styled.div`
    background-color: #F8F8F8;
`;

const LeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const PosterImg = styled.img`
    width: 280px;
    margin: 0px 0px 27px;
`;

const Graph = styled.p`
    color: rgb(140, 140, 140);
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
    margin-bottom: 8px;
`;

const StarText = styled.p`
    color: rgb(51, 51, 51);
    font-size: 18px;
    font-weight: 500;
    line-height: 18px;
`;

const Person = styled.p`
    color: rgb(140, 140, 140);
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
    margin-left: 5px;
    padding-top: 10px;
`;

const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 32px;
`;

const MovieCritic = styled.div``;

const First = styled.div`
    display: flex;
    justify-content: space-around;
    padding-bottom: 20px;
`;

const CriticBox = styled.div`
    display: block;
    text-align: center;
`;

const StarCritic = styled.p``;

const StarImg = styled.img`
    width: 200px;
    height: 100%;
`;

const StarBox = styled.div`
    grid-column: 2;
    justify-content: normal;
    width: unset;
    padding: unset;
    border-top: 0px;
    margin: unset;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CriticAndPerson = styled.p`
    display: block;
    text-align: center;
`;

const Critic = styled.p`
    font-size: 25px;
    font-weight: 500;
`;

const Line = styled.div`
    border-bottom: 1px solid rgb(217, 217, 217);
`;

const Second = styled.div`
    padding: 20px 0px;
    display: flex;
    justify-content: center;
    justify-content: space-around;
`;

const WannaSee = styled.p`
    color: rgb(140, 140, 140);
    cursor: pointer;
`;

const Comment = styled.p`
    color: rgb(140, 140, 140);
    cursor: pointer;
`;

const Seeing = styled.p`
    color: rgb(140, 140, 140);
    cursor: pointer;
`;

const Substance = styled.p`
    color: rgb(140, 140, 140);
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    white-space: pre-line;
    margin: 20px 0px 30px;
`;

export default Detail;