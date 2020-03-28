import styled from 'styled-components';

export const HeaderArea = styled.div`
    height:100px;
    background-color:#803d38;
    /* display:flex; */
    border-bottom: 2px solid black;

.container{
    max-width:1000px;
    display:flex;
    margin:auto;
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
        color:white;
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

    li{
        margin-left:20px;
        margin-right:20px;
        
        a{
            color:white;
            font-size:20px; 

            &:hover{
                color:#cecece;    
            }
        }
    }
}

`;