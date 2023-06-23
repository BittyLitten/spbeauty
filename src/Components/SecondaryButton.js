import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth;
    const Button = styled.div`
       
        border: 1px solid #64748B;
        box-shadow: inset 0px 1px 2px rgba(10, 15, 26, 0.08);
        min-width: ${minWidth};
        border-radius: 24px;
        color: #64748B;
        &:hover {
            background: #F4F6FA;
            border: 1px solid #F4F6FA;
            box-shadow: none;
        
        }
        &:active {
            background: #ECF1F5;
            color: #96A3B3;
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;