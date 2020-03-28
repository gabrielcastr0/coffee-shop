import styled from 'styled-components';
import image from './back.png';

export const PageArea = styled.div`

#area_box{
    height:380px;
    margin-bottom:90px;
    background-image: url(${image});
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
}

span{
    padding-left:60px;
    font-size: 20px;
    color:#707070;
    margin-bottom:40px; 
}

`;