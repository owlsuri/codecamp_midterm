import { ApolloClient } from '@apollo/client';
import styled from "@emotion/styled";

export const Wrapper=styled.div`
    font-family: "SUIT-Regular.woff2";
    font-weight: 700;

    width: 764px;

    background: #FFFFFF;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
border-radius: 10px;
padding: 50px;

`
export const Main=styled.div`
font-size: 18px;
padding-bottom: 30px;
border-bottom: 1px solid #6400FF;
`
export const TitleBox=styled.div`
padding-top: 30px;
display: flex;
flex-direction: row;
align-items: center;

`
export const Label=styled.div`
margin-right: 30px;

`
export const TitleInput=styled.input`
width: 604px;
height: 40px;
padding: 10px;
`
export const ContentsBox=styled.div`
margin-top: 20px;
display: flex;
flex-direction: row;
align-items: flex-start;
`
export const ContentsInput=styled.textarea`
width: 604px;
height: 240px;
padding: 10px;
`
export const ImgBox=styled.div`
margin-top: 20px;
display: flex;

`
export const UserBox=styled.div`
margin-top: 20px;
display: flex ;
align-items: center;
margin-bottom: 20px;
`
export const User=styled.span`
margin-right: 15px;

`
export const Writer=styled.div`
margin-right: 50px;

`
export const Password=styled.div`

`
export const InputUser=styled.input`
width: 242px;
height: 40px;
padding: 10px;
`
export const MenuBox=styled.div`
padding: 30px;
display: flex;
justify-content: center;
`
export const SubmitBtn=styled.button`
width: 80px;
height: 30px;
border-radius: 30px;
background-color: #6400FF;
color: white;
border: none;
`
export const CancelBtn=styled.button`
width: 80px;
height: 30px;
border-radius: 30px;
background-color: #999999;
color: white;
border: none;
margin-left: 20px;
`