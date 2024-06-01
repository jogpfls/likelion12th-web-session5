import { createGlobalStyle } from "styled-components";
import { useRecoilValue } from 'recoil';
import { darkMode } from '../Recoil/Atom';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        background-color: ${({ isDarkMode }) => (isDarkMode ? '#121212' : 'transparent')};
    color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF' : '#000000')};
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

`;
const GlobalStylesWithRecoil = () => {
    const isDarkMode = useRecoilValue(darkMode);
    return <GlobalStyle isDarkMode={isDarkMode} />;
    };
    
export default GlobalStylesWithRecoil;
