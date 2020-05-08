import * as React from  'react';
import { GreenAside } from "./styled";

export const GreenBlock:React.FC<{className?: string}> = ({className}) => {
    return (<GreenAside className={className}/>)
};
