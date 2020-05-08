import {rem} from "polished";
import {BASE_HTML_FONT_SIZE} from "./constants";

export interface Helpers {
    remCalc(value: string | number): string
}

export const remCalc = (value: string | number) => (
    rem(value, BASE_HTML_FONT_SIZE)
);

export const createHelpers = () => ({
    remCalc
});
