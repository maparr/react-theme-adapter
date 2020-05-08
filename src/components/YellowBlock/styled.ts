import {defaultStyled as styled} from "../../theme";

export const YellowAside = styled.aside`
   background-color: ${({theme}) => theme.colors.yellow20};
   height: 100%;
   
   ${({theme}) => theme.breakpoints.tablet} {
        width: 100%;
   }
`;
