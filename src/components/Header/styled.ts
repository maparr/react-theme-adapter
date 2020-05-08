import {defaultStyled as styled} from "../../theme";

export const HeaderBlock = styled.header`
   background-color: ${({theme}) => theme.colors.green30};
   height: ${({theme}) => theme.helpers.remCalc(100)};
`;
