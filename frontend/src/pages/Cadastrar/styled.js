import styled from 'styled-components';

export const PageArea = styled.div`

form{
    background-color: white;
    border-radius:3px;
    padding:10px;
    box-shadow:0px 0px 3px #999;

    .area{
        display:flex;
        align-items:center;
        padding:10px;
        max-width:500px;

        .area-title{
            width:130px;
            text-align:right;
            padding-right:20px;
            font-weight:bold;
            font-size:15px;
        }

        .area-input{
            flex:1;

            input{
                width:70%;
                font-size:15px;
                padding:5px;
                border:1px solid #ddd;
                border-radius:3px;
                outline:0;
                transition: all ease .4s;

                &:focus{
                    border:1px solid #333;
                    color:#333
                }
            }

            button{
                background-color:#803d38;
                height:40px;
                border:0;
                outline:0;
                padding:5px 10px;
                border-radius:4px;
                color:#fff;
                font-size:15px;
                cursor:pointer;

                &:hover{
                    background-color:#66302c;
                }
            }
        }
    }
}

`;