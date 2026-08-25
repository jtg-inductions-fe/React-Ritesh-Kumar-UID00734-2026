import type {
    TypographyOptions,
    TypographyUtils,
} from '@mui/material/styles/createTypography';

import { HTML_FONT_SIZE } from '@constants';

/* Custom px to rem function */
const typographyUtil: TypographyUtils = {
    /**
     * Converts a pixel value to rem units.
     * @param px - The pixel value to convert.
     * @returns The equivalent value in rem units as a string.
     */
    pxToRem: (px: number) => `${px / HTML_FONT_SIZE}` + 'rem',
};

/**
 * Creates a typography block with various styles
 * @param theme - Theme object to access the breakpoints.
 * @returns The function returns a TypographyOptions object, which includes various typography settings,
 */

const typographyStyle = (): TypographyOptions => ({
    fontFamily: 'Inter, sans-serif',

    /*
     * Browser default HTML font size used by MUI's typography
     * rem conversion.
     */
    htmlFontSize: HTML_FONT_SIZE,

    /*
     * MUI standard font-weight aliases.
     */
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    /*
     * Headings
     */
    h1: {
        fontSize: typographyUtil.pxToRem(32),
        fontWeight: 700,
        lineHeight: typographyUtil.pxToRem(40),
    },

    h2: {
        fontSize: typographyUtil.pxToRem(28),
        fontWeight: 700,
        lineHeight: typographyUtil.pxToRem(36),
    },

    h3: {
        fontSize: typographyUtil.pxToRem(24),
        fontWeight: 600,
        lineHeight: typographyUtil.pxToRem(32),
    },

    h4: {
        fontSize: typographyUtil.pxToRem(20),
        fontWeight: 600,
        lineHeight: typographyUtil.pxToRem(28),
    },

    h5: {
        fontSize: typographyUtil.pxToRem(18),
        fontWeight: 600,
        lineHeight: typographyUtil.pxToRem(26),
    },

    h6: {
        fontSize: typographyUtil.pxToRem(16),
        fontWeight: 600,
        lineHeight: typographyUtil.pxToRem(24),
    },

    /*
     * Body text
     */
    body1: {
        fontSize: typographyUtil.pxToRem(16),
        fontWeight: 400,
        lineHeight: typographyUtil.pxToRem(24),
    },

    body2: {
        fontSize: typographyUtil.pxToRem(14),
        fontWeight: 400,
        lineHeight: typographyUtil.pxToRem(20),
    },

    /*
     * Small supporting text.
     */
    caption: {
        fontSize: typographyUtil.pxToRem(12),
        fontWeight: 400,
        lineHeight: typographyUtil.pxToRem(18),
    },

    /*
     * Buttons / interactive text.
     */
    button: {
        fontSize: typographyUtil.pxToRem(14),
        fontWeight: 600,
        lineHeight: typographyUtil.pxToRem(20),
        textTransform: 'none',
    },

    /*
     * Overline / labels.
     */
    overline: {
        fontSize: typographyUtil.pxToRem(12),
        fontWeight: 600,
        lineHeight: typographyUtil.pxToRem(16),
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
    },
});

export const typography = { typographyStyle, typographyUtil };
