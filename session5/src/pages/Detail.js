import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Detail = () => {
    const { movie_id } = useParams();
    const [movieInfo, setMovieInfo] = useState(null);

    useEffect(() => {
        const fetchMovieInfo = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1`, {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTAyZjYyZTM3MzM3OWM2MGFlMzk0YWMyMGE3YjI4MiIsInN1YiI6IjY2NDE3OWJlYWMwZDQ2MDMxYjM3MWUwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.roJ6ZAmjKkHix91jrFoFlFHw2LNQRYTAhmBegI8fzQE"
                    }
                });
                const data = await response.json();
                //console.log("movie: ", data)
                setMovieInfo(data);
            } catch (error) {
                console.error("Failed to fetch movie info", error); // 에러 출력
            }
        };
    
        fetchMovieInfo();
    }, [movie_id]);
    //console.log("movie_info: ", movieInfo);

    return (
        <Container>
            <div>
                {movieInfo ? (
                <>
                    <BackgroundImg
                        src={`https://image.tmdb.org/t/p/w500` + movieInfo.backdrop_path}
                />
                <Info>
                    <h1>{movieInfo.title}</h1>
                </Info>
    
                </>
                ) : (
                <p>로딩중…</p>
                )}
            </div>
        </Container>
    
        //     <>
        //     <Movie>
        //         <Up>
        //             <Image src={selectedMovie.backImg} alt={selectedMovie.title}></Image>
        //             <TitleWrapper>
        //                 <Title>{selectedMovie.title}</Title>
        //                 <SmallTitle>{selectedMovie.realTitle}</SmallTitle>
        //                 <YearGenreCountry>{selectedMovie.year} · {selectedMovie.genre} · {selectedMovie.country}</YearGenreCountry>
        //             </TitleWrapper>
        //         </Up>
        //         <Down>
        //             <Q>
        //             <LeftWrapper>
        //                 <PosterImg src={selectedMovie.img} alt={selectedMovie.title}></PosterImg>
        //                 <Graph>별점 그래프</Graph>
        //                 <StarText>평균 ★ {selectedMovie.critic}</StarText>
        //                 <Person>({selectedMovie.criticPerson})</Person>
        //             </LeftWrapper>
        //             <RightWrapper>
        //                 <MovieCritic>
        //                     <First>
        //                         <CriticBox>
        //                             <StarImg src={Star} alt="평점"></StarImg>
        //                             <StarCritic>평가하기</StarCritic>  
        //                         </CriticBox>
        //                         <StarBox>
        //                             <CriticAndPerson>
        //                                 <Critic>{selectedMovie.critic}</Critic>
        //                                 <Person>평균 별점 {selectedMovie.criticPerson}</Person>
        //                             </CriticAndPerson>
        //                         </StarBox>
        //                     </First>
        //                     <Line></Line>
        //                     <Second>
        //                         <WannaSee>보고싶어요</WannaSee>
        //                         <Comment>코멘트</Comment>
        //                         <Seeing>보는 중</Seeing>
        //                     </Second>
        //                     <Line></Line>
        //                 </MovieCritic>
        //                 <Substance>{selectedMovie.content}</Substance>
        //             </RightWrapper>
        //             </Q>
        //         </Down>
        //     </Movie>
        //     <VideoP>동영상</VideoP>
        //         <VideoWrapper>
        //             <VideoBox>
        //                 <a href={selectedMovie.videoLink1} target="_blank" rel="noopener noreferrer">
        //                     <Video src={selectedMovie.video1} alt={selectedMovie.videoTitle1}></Video>
        //                     <VideoTitle>{selectedMovie.videoTitle1}</VideoTitle>
        //                 </a>
        //             </VideoBox>
        //             <VideoBox>
        //                 <a href={selectedMovie.videoLink2} target="_blank">
        //                     <Video src={selectedMovie.video2} alt={selectedMovie.videoTitle2}></Video>
        //                     <VideoTitle>{selectedMovie.videoTitle2}</VideoTitle>
        //                 </a>
        //             </VideoBox>
        //             <VideoBox>
        //                 <a href={selectedMovie.videoLink3} target="_blank">
        //                     <Video src={selectedMovie.video3} alt={selectedMovie.videoTitle3}></Video>
        //                     <VideoTitle>{selectedMovie.videoTitle3}</VideoTitle>
        //                 </a>
        //             </VideoBox>
        //             <VideoBox>
        //                 <a href={selectedMovie.videoLink4} target="_blank">
        //                     <Video src={selectedMovie.video4} alt={selectedMovie.videoTitle4}></Video>
        //                     <VideoTitle>{selectedMovie.videoTitle4}</VideoTitle>
        //                 </a>
        //             </VideoBox>
        //             <VideoBox>
        //                 <a href={selectedMovie.videoLink5} target="_blank">
        //                     <Video src={selectedMovie.video5} alt={selectedMovie.videoTitle5}></Video>
        //                     <VideoTitle>{selectedMovie.videoTitle5}</VideoTitle>
        //                 </a>
        //             </VideoBox>
        //         </VideoWrapper>
        //     </>
        );
    };

const Container = styled.div``;

const BackgroundImg = styled.img``;

const Info = styled.div``;

// const Movie = styled.div`
// `;

// const Up = styled.div`
//     position: relative;
//     height: 550px;
//     z-index: 1;
// `;

// const TitleWrapper = styled.div`
//     bottom: 60px;
//     position: absolute;
//     z-index: 2;
//     margin: 0 60px;
// `;

// const Image = styled.img`
//     display: flex;
//     position: absolute;
//     top: 0px;
//     left: 0px;
//     justify-content: center;
//     width: 100%;
//     height: 100%;
//     //overflow: hidden;
//     object-fit: cover;
// `;

// const Title = styled.p`
//     color: white;
//     font-size: 36px;
//     font-weight: 700;
//     line-height: 36px;
// `;

// const SmallTitle = styled.p`
//     margin-top: 16px;
//     font-size: 14px;
//     line-height: 18px;
//     color: white;
// `;

// const YearGenreCountry = styled.p`
//     font-size: 14px;
//     line-height: 18px;
//     margin-top: 8px;
//     color: white;
// `;

// const Q = styled.div`
//     margin: 0px 60px;
//     padding: 30px 0px 60px;
//     display: flex;
//     flex-direction: row;
// `;

// const Down = styled.div`
//     background-color: #F8F8F8;
// `;

// const LeftWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
// `;

// const PosterImg = styled.img`
//     width: 280px;
//     margin: 0px 0px 27px;
// `;

// const Graph = styled.p`
//     color: rgb(140, 140, 140);
//     font-size: 12px;
//     font-weight: 500;
//     line-height: 12px;
//     margin-bottom: 8px;
// `;

// const StarText = styled.p`
//     color: rgb(51, 51, 51);
//     font-size: 18px;
//     font-weight: 500;
//     line-height: 18px;
// `;

// const Person = styled.p`
//     color: rgb(140, 140, 140);
//     font-size: 12px;
//     font-weight: 500;
//     line-height: 12px;
//     margin-left: 5px;
//     padding-top: 10px;
// `;

// const RightWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     margin-left: 32px;
// `;

// const MovieCritic = styled.div`
// `;

// const First = styled.div`
//     display: flex;
//     justify-content: space-around;
//     padding-bottom: 20px;
//     `;

// const CriticBox = styled.div`
//     display: block;
//     text-align: center;
// `;

// const StarCritic = styled.p`
// `;

// const StarImg = styled.img`
//     width: 200px;
//     height: fit-content;
// `;

// const StarBox = styled.div`
//     grid-column: 2;
//     justify-content: normal;
//     width: unset;
//     padding: unset;
//     border-top: 0px;
//     margin: unset;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

// const CriticAndPerson = styled.p`
//     display: block;
//     text-align: center;
// `;

// const Critic = styled.p`
//     font-size: 25px;
//     font-weight: 500;
// `;

// const Line = styled.div`
// border-bottom: 1px solid rgb(217, 217, 217);
// `;

// const Second = styled.div`
//     padding: 20px 0px;
//     display: flex;
//     justify-content: center;
//     justify-content: space-around;
// `;

// const WannaSee = styled.p`
//     color: rgb(140, 140, 140);
//     cursor: pointer;
// `;

// const Comment = styled.p`
//     color: rgb(140, 140, 140);
//     cursor: pointer;
// `;

// const Seeing = styled.p`
//     color: rgb(140, 140, 140);
//     cursor: pointer;
// `;

// const Substance = styled.p`
//     color: rgb(140, 140, 140);
//     font-size: 14px;
//     font-weight: 500;
//     line-height: 22px;
//     white-space: pre-line;
//     margin: 20px 0px 30px;
// `;

// const VideoWrapper = styled.div`
//     margin: 0 60px 10px 60px;
//     display: flex;
//     overflow-x: auto;
//     white-space: nowrap;
//     justify-content: flex-start;
//     &::-webkit-scrollbar{
//         display: none;
//     }
// `;

// const VideoP = styled.p`
//     margin: 60px 60px 30px 60px;
//     font-size: 23px;
//     font-weight: 800;
// `;

// const VideoBox = styled.div`
//     width: 400px;
//     height: 200px;
//     padding: 0px 10px;
//     display: block;
//     cursor: pointer;
// `;

// const Video = styled.img`
//     width: auto;
//     height: 100%;
//     border-radius: 3px;
//     object-fit: cover;
// `;

// const VideoTitle = styled.p`
// `;

export default Detail;