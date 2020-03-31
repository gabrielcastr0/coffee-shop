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

.categorias h2{
    margin-bottom: 40px;
    margin-left: 10px;
    color: #707070;
    font-size:30px;
}

.categorias-item h3{
    font-size:20px;
    line-height:1em;
    width: auto;
    text-align:center;
    font-weight:bold;
    box-shadow: 15px solid white;
    background-color:#252525;
    color:white;
    padding:10px 0 10px 0;
    position:relative;
    top:-30px;
    margin-bottom:50px;
}

.categorias-item img{
    height:200px;
    width:340px;
    border-radius:10px;
}

/* Produtos mais vendidos */

.produtos h2{
    margin-bottom: 40px;
    margin-left: 10px;
    color: #707070;
    font-size:30px;
}

.produto-item{
    height:350px;
    width:340px;
    background-color:#ffffff;
    border-radius:10px;
    margin-bottom:10px;
}

.produto-item h3{
    padding:20px;
    color: #707070;
}

.produto-item img{
    /* background-color:blue; */
    height:240px;
    position: relative;
    bottom:-20px;
}

.produto-item h4{
    color: #707070;
    /* background-color:blue; */
    display:flex;
    justify-content:flex-end;
    margin-right:40px;
    position:relative;
    top:-175px;
    /* margin-bottom:50px; */
}


`;