import type { Components } from '@mui/material/styles';

import InterBoldWOFF2 from '@assets/fonts/inter/Inter-Bold.woff2';
import InterMediumWOFF2 from '@assets/fonts/inter/Inter-Medium.woff2';
import InterRegularTTF from '@assets/fonts/inter/inter-regular.ttf';
import InterRegularWOFF2 from '@assets/fonts/inter/inter-regular.woff2';
import InterSemiBoldWOFF2 from '@assets/fonts/inter/Inter-SemiBold.woff2';

const fontFaceDeclarations = `
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
