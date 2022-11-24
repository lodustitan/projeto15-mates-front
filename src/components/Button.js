/* Tools */
import styled from "styled-components";

/* Hooks */

/* Components */

/* Others */


function Button({children, color, onClick}){
    return (
        <Style color={color} onClick={onClick}>
            {children}
        </Style>
    )
}

const Style = styled.div`
    background-color: ${({color}) => {
        if(color) return color;
        else return "#3C3C3C"
    }};

    padding: 1rem 1.5rem;
    color: white;
`;

export default Button;