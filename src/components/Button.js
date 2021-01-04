import { Children } from 'react';
import styled, {css} from 'styled-components';

const ButtonStyle = styled.div `
    width: 7.5rem;
    height: 46px;
    height: 2.875rem;
    cursor: pointer;
    font-size: 1.1875rem;
    border-radius: 0.375rem;
    display: flex;
    align-items: center;
    justify-content: center;


    ${props =>
        props.primary ?
        css `
            background : #6c63ff;
            color: white;
        ` : css `
            background:  #f8f8f8;
            color: #6c63ff;
            border: 0.0625rem solid #6c63ff;
        `
    }
`

const Button = ({children, ...rest}) =>{
    return (
        <ButtonStyle {...rest}>
            {children}
        </ButtonStyle>
    );
}

export default Button;