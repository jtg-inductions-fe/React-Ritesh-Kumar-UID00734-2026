import type { Components } from '@mui/material/styles';

import InterBoldWOFF2 from '@assets/fonts/inter/Inter-Bold.woff2';
import InterExtraBoldWOFF2 from '@assets/fonts/inter/Inter-ExtraBold.woff2';
import InterExtraLightWOFF2 from '@assets/fonts/inter/Inter-ExtraLight.woff2';
import InterLightWOFF2 from '@assets/fonts/inter/Inter-Light.woff2';
import InterMediumWOFF2 from '@assets/fonts/inter/Inter-Medium.woff2';
import InterRegularTTF from '@assets/fonts/inter/inter-regular.ttf';
import InterRegularWOFF2 from '@assets/fonts/inter/inter-regular.woff2';
import InterSemiBoldWOFF2 from '@assets/fonts/inter/Inter-SemiBold.woff2';
import InterThinWOFF2 from '@assets/fonts/inter/Inter-Thin.woff2';

const fontFaceDeclarations = `
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(${InterThinWOFF2}) format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url(${InterExtraLightWOFF2}) format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(${InterLightWOFF2}) format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${InterRegularWOFF2}) format('woff2'),
         url(${InterRegularTTF}) format('truetype');
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(${InterMediumWOFF2}) format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(${InterSemiBoldWOFF2}) format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${InterBoldWOFF2}) format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url(${InterExtraBoldWOFF2}) format('woff2');
  }
`;

export const components: Components = {
    MuiCssBaseline: {
        styleOverrides: {
            html: {
                fontSize: '62.5%',
            },
            fontFaceDeclarations,
        },
    },
};
