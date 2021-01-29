import styled, {createGlobalStyle} from 'styled-components'
import {FaArrowAltCircleUp} from 'react-icons/fa'

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family: 'Roboto', sans-serif;
}
`

export const Container = styled.div`
z-index:1;
width:100%;
max-width:1300px;
margin-right:auto;
margin-left: auto;
padding-right: 50px;
padding-left:50px;

@media screen and (max-width:991px) {
    padding-right: 30px;
    padding-left: 30px;
}
`
export const Button = styled.button`
    border-radius: 4px;
    background: ${({primary}) => (primary ? '#4859F7' : '#0467FB')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px' )};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline:none;
    border:none;
    cursor: pointer;
    &:hover{
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${({primary}) => (primary ? '#4859F7' : '#0467FB')};        
    }
    @media screen and (max-width: 960px){
       width: 100%;
        
    }
`;

export const ScrollTop = styled(FaArrowAltCircleUp)`
position: fixed;
width:100%;
bottom: 20px;
height: 50px;
left: 45%;
z-index: 1000;
cursor: pointer;
animation: ease 0.3s;
transition: opacity 0.4s;
opacity: 0.5;
color: #545C6E;
&:hover{
    opacity:1;
}

@media screen and (max-width:820px){
    left: 40%;
    height: 30px
}
`;

export default GlobalStyle;