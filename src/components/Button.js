import styled, {css} from 'styled-components';

const ButtonStyle = styled.div `
    max-width: 7.5rem;
    height: 2.875rem;
    padding: 0.875rem 2.8125rem;
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
            background: white;
            color: #6c63ff;
            border: 0.0625rem solid #6c63ff;
        `
    }
`

const Button = ({name,primary}) =>{
    return (
        <ButtonStyle primary = {primary}>
            {name}
        </ButtonStyle>
    );
}

export default Button;