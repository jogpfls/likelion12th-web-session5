import styled from "styled-components";
import {DATA} from "../assets/Data";


function Lank() {
    return (
        <Lanking>
            <LankText>박스오피스 순위</LankText>
            <MovieImage>
                {DATA.map((movie, index) => (
                    <img key={index} src={movie.img} alt={movie.title} />
                ))}
            </MovieImage>
        </Lanking>
    );
}

const Lanking = styled.div`
    margin: 0;
    padding: 3%;
    padding-top: 10%;

`;

const LankText = styled.p`
    font-weight: bolder;
    font-size: 20px;
`;

const MovieImage = styled.div`
    height: fit-content;
    display: flex;
    justify-content: space-around;
    display: flex;
    align-items: center;

    img{
        width: 22%;
        height: fit-content;
        border-radius: 5px;
        cursor: pointer;
        margin: 0 1.5% 0 0;
        }
`;

export default Lank;