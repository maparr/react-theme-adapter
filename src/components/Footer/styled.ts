import {defaultStyled as styled} from "../../theme";

export const FooterBlock = styled.footer`
   background-color: ${({theme}) => theme.colors.green10};
   height: ${({theme}) => theme.helpers.remCalc(250)};
`;
