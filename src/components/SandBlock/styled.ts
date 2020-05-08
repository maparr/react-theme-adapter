import {defaultStyled as styled} from "../../theme";

export const Main = styled.main`
   background-color: ${({theme}) => theme.colors.yellow10};
   flex: 1;
   min-width: ${({theme}) => theme.helpers.remCalc(300)};
   margin: 0 ${({theme}) => theme.helpers.remCalc(20)};
`;
