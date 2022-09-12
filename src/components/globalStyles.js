import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    :root {
        //Theme 1
        --t1-main-bg: hsl(222, 26%, 31%);
        --t1-secondary-bg: hsl(223, 31%, 20%);
        --t1-screen-bg: hsl(224, 36%, 15%);

        --t1-key1-bg: hsl(225, 21%, 49%);
        --t1-key2-bg: hsl(6, 63%, 50%);
        --t1-key3-bg: hsl(30, 25%, 89%);

        --t1-key1-shadow: hsl(224, 28%, 35%);
        --t1-key2-shadow: hsl(6, 70%, 34%);
        --t1-key3-shadow: hsl(28, 16%, 65%);

        --t1-text-dark: hsl(221, 14%, 31%);
        --t1-text-white: white;

        //Theme 2
        --t2-main-bg: hsl(0, 0%, 90%);
        --t2-secondary-bg: hsl(0, 5%, 81%);
        --t2-screen-bg: hsl(0, 0%, 93%);

        --t2-key1-bg: hsl(185, 42%, 37%);
        --t2-key2-bg: hsl(25, 98%, 40%);
        --t2-key3-bg: hsl(45, 7%, 89%);

        --t2-key1-shadow: hsl(185, 58%, 25%);
        --t2-key2-shadow: hsl(25, 99%, 27%);
        --t2-key3-shadow: hsl(35, 11%, 61%);

        --t2-text-dark: hsl(60, 10%, 19%);
        --t2-text-white: hsl(60, 10%, 19%);

        //Theme 3
        --t3-main-bg: hsl(268, 75%, 9%);
        --t3-secondary-bg: hsl(268, 71%, 12%);
        --t3-screen-bg: var(--t3-secondary-bg);
        
        --t3-key1-bg: hsl(281, 89%, 26%);
        --t3-key2-bg: hsl(176, 100%, 44%);
        --t3-key3-bg: hsl(268, 47%, 21%);

        --t3-key1-shadow: hsl(285, 91%, 52%);
        --t3-key2-shadow: hsl(177, 92%, 70%);
        --t3-key3-shadow: hsl(290, 70%, 36%);

        --t3-text-dark: hsl(52, 100%, 62%);
        --t3-text-white: hsl(52, 100%, 62%);

        //Variables
        --main-bg: ${({switchPos}) => {
            if (switchPos === 1) return 'var(--t1-main-bg)'
            else if (switchPos === 2) return 'var(--t2-main-bg)'
            else return 'var(--t3-main-bg)'
        }};
        --secondary-bg: ${({switchPos}) => {
            if (switchPos === 1) return 'var(--t1-secondary-bg)'
            else if (switchPos === 2) return 'var(--t2-secondary-bg)'
            else return 'var(--t3-secondary-bg)'
        }};
        --screen-bg: ${({switchPos}) => {
            if (switchPos === 1) return 'var(--t1-screen-bg)'
            else if (switchPos === 2) return 'var(--t2-screen-bg)'
            else return 'var(--t3-screen-bg)'
        }};

        --key1-bg: ${({switchPos}) => {
            if (switchPos === 1) return 'var(--t1-key1-bg)'
            else if (switchPos === 2) return 'var(--t2-key1-bg)'
            else return 'var(--t3-key1-bg)'
        }};
        --key2-bg: ${({switchPos}) => {
            if (switchPos === 1) return 'var(--t1-key2-bg)'
            else if (switchPos === 2) return 'var(--t2-key2-bg)'
            else return 'var(--t3-key2-bg)'
        }};
        --key3-bg: ${({switchPos}) => {
            if (switchPos === 1) return 'var(--t1-key3-bg)'
            else if (switchPos === 2) return 'var(--t2-key3-bg)'
            else return 'var(--t3-key3-bg)'
        }};

        --key1-shadow: ${({switchPos}) => {
            if (switchPos === 1) return 'var(--t1-key1-shadow)'
            else if (switchPos === 2) return 'var(--t2-key1-shadow)'
            else return 'var(--t3-key1-shadow)'
        }};
        --key2-shadow: ${({switchPos}) => {
            if (switchPos === 1) return 'var(--t1-key2-shadow)'
            else if (switchPos === 2) return 'var(--t2-key2-shadow)'
            else return 'var(--t3-key2-shadow)'
        }};
        --key3-shadow: ${({switchPos}) => {
            if (switchPos === 1) return 'var(--t1-key3-shadow)'
            else if (switchPos === 2) return 'var(--t2-key3-shadow)'
            else return 'var(--t3-key3-shadow)'
        }};

        --text-dark: ${({switchPos}) => {
            if (switchPos === 1) return 'var(--t1-text-dark)'
            else if (switchPos === 2) return 'var(--t2-text-dark)'
            else return 'var(--t3-text-dark)'
        }};
        --text-white: ${({switchPos}) => {
            if (switchPos === 1) return 'var(--t1-text-white)'
            else if (switchPos === 2) return 'var(--t2-text-white)'
            else return 'var(--t3-text-white)'
        }};
    }
`

export default GlobalStyles