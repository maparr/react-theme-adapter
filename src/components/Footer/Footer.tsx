import * as React from  'react';
import { FooterBlock } from './styled';

export const Footer: React.FC = ({children}) => {
    return (<FooterBlock>{children}</FooterBlock>)
};
