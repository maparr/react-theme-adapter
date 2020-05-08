import { defaultStyled } from '../../../theme'
import { darken } from 'polished';

export const Button = defaultStyled.button`
    background-image: linear-gradient(to right, ${({theme}) => darken(0.2, theme.colors.yellow30)}, ${({theme}) => theme.colors.yellow30});
    height: ${({theme}) => theme.helpers.remCalc(50)};
    width: ${({theme}) => theme.helpers.remCalc(175)};
    border-radius: ${({theme}) => theme.helpers.remCalc(16)};
    font-size: ${({theme}) => theme.typography.fontSize.small};
    font-weight: bold;
    border: 0;
    
    &:hover {
        cursor: pointer;
    }
    
`;

export const Container = defaultStyled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;
