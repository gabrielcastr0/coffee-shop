import styled from 'styled-components';

export const HeaderArea = styled.div`
    height:100px;
    background-color:white;
    /* display:flex; */

.container{
    max-width:auto;
    display:flex;
    margin-left:15px;
    margin-right:15px;
}

a{
    text-decoration: none;
}

.logo{
    flex:1;
    display:flex;
    align-items:center;
    height: 100px;

    h1{
        color:#707070;
        font-size: 30px;
        display: flex;
        align-items:center;
    }

    span{
        color:#C17139;
    }
}

nav{
    padding-top:10px;
    padding-bottom:10px;

    ul, li{
        margin:0;
        padding:0;
        list-style:none;
    }

    ul{
        display:flex;
        align-items:center;
        height:80px;
    }

    img{
        margin-right:5px;
    }

    li{
        margin-left:15px;
        margin-right:15px;
        display:flex;
        align-items:center;

        a{
            color:#707070;
            font-size:20px;

            &:hover{
                color:#C17139;    
            }
        }
    }
}

`;