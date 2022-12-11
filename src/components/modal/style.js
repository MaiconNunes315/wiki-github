import styled from "styled-components";

export const ModalContainer = styled.div`

    width: 45%;
    min-width: 400px;
    height: 200px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 10px 10px 50px 500px  rgba(0,0,0, 0.9);
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 20%;
    bottom: 30%;

    p{
        color: black;
        width: 70%;
        font-size: 20px;
        margin-top: 30px;
    }

    .buttons>button{
        width: 60px;
        height: 40px;
        margin: auto;
        margin-top:5px;
        margin-left: 30px;
        margin-right: 30px;
        border-radius: 10px;
        border:none;
        font-size: 15px;
        color: white;
        cursor: pointer;
    }


    .userGithub{
        display: flex;
        flex-direction: column;
    }

    input{
        margin-top: 20px;
        border-radius: 20px;
        height: 18px;
        padding-left: 5px;
    }
    
    span{
        color: red;
        font-size: 10px;
    }
    

`