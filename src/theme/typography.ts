import {remCalc} from "./helpers";

export type FontFamily = string;

export interface FontWeight {
    light: number;
    regular: number;
    bold: number;
}

export interface FontSize {
    xxsmall: string;
    xsmall: string;
    small: string;
    medium: string;
    large: string;
}

export interface Typography {
    fontFamily: FontFamily;
    fontSize: FontSize;
    fontWeight: FontWeight;
}

export const typography: Typography = {
    fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif',
    fontSize: {
        xxsmall: remCalc(10),
        xsmall: remCalc(12),
        small: remCalc(14),
        medium: remCalc(16),
        large: remCalc(20),
    },
    fontWeight: {
        light: 300,
        regular: 400,
        bold: 600,
    },
};

