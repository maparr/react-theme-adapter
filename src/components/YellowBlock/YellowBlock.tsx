import * as React from  'react';
import { YellowAside } from './styled';

export const YellowBlock:React.FC<{className?: string}> = ({className}) => {
    return (<YellowAside className={className}/>)
};
