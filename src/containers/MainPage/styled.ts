 import { defaultStyled as styled } from "../../theme";


import {
    SandBlock,
    GreenBlock,
    YellowBlock
} from '../../components';

export const Container = styled.div`
    main, aside, header { 
        margin-bottom: ${({theme}) => theme.helpers.remCalc(20)};
    } 
`;

export const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    ${({theme}) => theme.breakpoints.tablet} {
        flex-direction: column;
   }
`;

export const Main = styled(SandBlock)`
   ${({theme}) => theme.breakpoints.tablet} {
        margin: 0;
        margin-bottom: ${({theme}) => theme.helpers.remCalc(20)};    
        order: 1;
        min-height: ${({theme}) => theme.helpers.remCalc(645)};
   }
`;

export const AsideContainerLeft = styled.div`
    display: flex;
    flex-direction: column;

    > aside {
        min-height: ${({theme}) => theme.helpers.remCalc(275)};
        min-width: ${({theme}) => theme.helpers.remCalc(250)};
     }
     
   ${({theme}) => theme.breakpoints.tablet} {
        flex-direction: row;
        order: 2;
        width: 100%;

        > aside { 
            width: 50%;
            min-width: 0;

        }
   }
`;


export const AsideContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    > aside {
        min-height: ${({theme}) => theme.helpers.remCalc(245)};
        min-width: ${({theme}) => theme.helpers.remCalc(250)};
     }
     
    ${({theme}) => theme.breakpoints.tablet} {
        order: 3;
        width: 100%;
        
        > aside {
            width: 100%;
            min-height: ${({theme}) => theme.helpers.remCalc(645)};
        }
        
   }
`;

export const GreenAside = styled(GreenBlock)`
   ${({theme}) => theme.breakpoints.tablet} {
      margin-right: ${({theme}) => theme.helpers.remCalc(20)};
      height: ${({theme}) => theme.helpers.remCalc(300)};
   }
`;


export const YellowAside = styled(YellowBlock)`
   ${({theme}) => theme.breakpoints.tablet} {
        width: 100%;
        height: ${({theme}) => theme.helpers.remCalc(300)};

   }
`;

