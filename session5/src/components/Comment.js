import styled from "styled-components";


const Comment = () => {
    return (
        <CommentWrapper>
            <Title>지금 뜨는 코멘트</Title>
        </CommentWrapper>
    )
}

const CommentWrapper = styled.div`
    top: 0;
    z-index: 51;
    display: flex;
    margin-top:100px;
    margin-left: 5%;
`;

const Title = styled.p`
    font-size: 20px;
    font-weight: bolder;
    `;

export default Comment;