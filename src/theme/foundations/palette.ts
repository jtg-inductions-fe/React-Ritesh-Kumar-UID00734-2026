import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constants';

/**
 * Application color palette mapped to MUI's semantic color system.
 *
 * Raw color values are maintained in the COLORS design tokens.
 * This file maps those tokens to the structure expected by MUI.
 */
export const palette: PaletteOptions = {
    mode: 'dark',

    primary: {
        main: COLORS.PRIMARY.MAIN,
        light: COLORS.PRIMARY.LIGHT,
        dark: COLORS.PRIMARY.DARK,
        contrastText: COLORS.PRIMARY.CONTRAST_TEXT,
    },

    secondary: {
        main: COLORS.SECONDARY.MAIN,
        light: COLORS.SECONDARY.LIGHT,
        dark: COLORS.SECONDARY.DARK,
        contrastText: COLORS.SECONDARY.CONTRAST_TEXT,
    },

    error: {
        main: COLORS.STATUS.ERROR,
        light: COLORS.STATUS.ERROR_LIGHT,
        dark: COLORS.STATUS.ERROR_DARK,
    },

    warning: {
        main: COLORS.STATUS.WARNING,
        light: COLORS.STATUS.WARNING_LIGHT,
        dark: COLORS.STATUS.WARNING_DARK,
    },

    info: {
        main: COLORS.STATUS.INFO,
        light: COLORS.STATUS.INFO_LIGHT,
        dark: COLORS.STATUS.INFO_DARK,
    },

    success: {
        main: COLORS.STATUS.SUCCESS,
        light: COLORS.STATUS.SUCCESS_LIGHT,
        dark: COLORS.STATUS.SUCCESS_DARK,
    },

    background: {
        default: COLORS.BACKGROUND.DEFAULT,
        paper: COLORS.BACKGROUND.PAPER,
    },

    text: {
        primary: COLORS.TEXT.PRIMARY,
        secondary: COLORS.TEXT.SECONDARY,
        disabled: COLORS.TEXT.DISABLED,
    },

    divider: COLORS.BORDER.DEFAULT,

    action: {
        active: COLORS.ACTION.ACTIVE,
        hover: COLORS.ACTION.HOVER,
        selected: COLORS.ACTION.SELECTED,
        focus: COLORS.ACTION.FOCUS,
        disabled: COLORS.ACTION.DISABLED,
        disabledBackground: COLORS.ACTION.DISABLED_BACKGROUND,
    },
};
