import 'styled-components';
import {ThemeInterface} from "./Theme";


declare module 'styled-components' {
    export interface DefaultTheme extends ThemeInterface {}
}
