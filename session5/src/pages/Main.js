import React from 'react';
import Footer from '../components/Footer.js';
import Lank from '../components/Lank.js';
import Comment from '../components/Comment.js';
import RecommendMovie from '../components/recommendMovie.js';

function Main() {
    return (
        <>
            <Comment />
            <Lank />
            <RecommendMovie />
            <Footer />
        </>
    );
}

export default Main;