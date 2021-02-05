import { css } from 'styled-components';

//Lato
import LatoRegularLatinExt from '../fonts/Lato/LatoRegular_latin.woff2';
import LatoBoldLatinExt from '@src/fonts/Lato/LatoBold_latin_ext.woff2';

//Headline
import HeadlineWoff from '@src/fonts/Headline/HeadlineWoff.woff';
import HeadlineWoff2 from '@src/fonts/Headline/HeadlineWoff2.woff2';


const FontFaces = css`
    /* latin */
    @font-face {
        font-family: 'Cinzel';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/cinzel/v11/8vIU7ww63mVu7gtR-kwKxNvkNOjw-tbnfY3lC2xcZqTFUw.woff) format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2)
        format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
        U+2215, U+FEFF, U+FFFD;
  }

    @font-face {
        font-family: "Mono45";
        src: url(${HeadlineWoff2})
            format("woff2"),
            url(${HeadlineWoff})
            format("woff");
        font-style: normal;
        font-display: swap;
    }

        @font-face {
            font-family: "Lato";
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(${LatoRegularLatinExt}) format("woff2");
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    
    @font-face {
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(${LatoBoldLatinExt}) format("woff2");
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
        U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }

`;

export default FontFaces;