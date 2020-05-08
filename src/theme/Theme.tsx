import baseStyled, { ThemedStyledInterface } from 'styled-components';
import {Breakpoints, breakpointValues, breakpoints} from "./breakpoints";
import {createHelpers, Helpers} from "./helpers";
import { typography, Typography } from "./typography";
import { colors } from "./colors";


export interface ThemeInterface {
    colors: { [key in keyof typeof colors]: string },
    breakpointValues: Breakpoints,
    breakpoints: Breakpoints,
    helpers: Helpers,
    typography: Typography
}

export interface DefaultThemeInterface extends ThemeInterface {}


export const createTheme = ():ThemeInterface => ({
    colors,
    breakpointValues,
    breakpoints,
    helpers: createHelpers(),
    typography
});

export const theme: ThemeInterface = createTheme();


export const defaultStyled = baseStyled as ThemedStyledInterface<DefaultThemeInterface>;

