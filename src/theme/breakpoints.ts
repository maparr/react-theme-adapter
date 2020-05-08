
export interface BreakpointValues {
    mobile: string;
    tablet: string;
    desktop: string;
}

export interface Breakpoints {
    mobile: string;
    tablet: string;
    desktop: string;
}

export const breakpointValues: BreakpointValues = {
    mobile: `0px`,
    tablet: `900px`,
    desktop: `1025px`,
};

export const breakpoints: Breakpoints = {
    mobile: `@media (max-width: ${breakpointValues.mobile})`,
    tablet: `@media (max-width: ${breakpointValues.tablet})`,
    desktop: `@media (max-width: ${breakpointValues.desktop})`,
};
