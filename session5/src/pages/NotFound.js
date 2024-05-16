import React from "react";
import styled from "styled-components";

function NotFound() {
    return(
        <>
        <Error>잘못된 페이지</Error>
        </>
    );
}

const Error = styled.p`
    font-size: 13px;
`;

export default NotFound;