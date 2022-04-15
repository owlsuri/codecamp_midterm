import styled from "@emotion/styled";

export const Container= styled.div`
width: 764px;
display: flex;
flex-direction: column;
align-items: center;
`

export const Wrapper = styled.div`
width: 764px;
background: #FFFFFF;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
border-radius: 10px;
font-family: "/font/SUIT-Medium.woff2";
padding: 20px;
`
export const Title = styled.div`
font-size: 18px;
font-weight: 700;
padding-bottom: 20px;
border-bottom: 1px solid #E5E5E5;
`
export const Images = styled.div`
margin: 20px 0 20px 0; 

`
export const BoardImg = styled.img`
  width: 220px;
`;
export const UserBox = styled.div`
display: flex;
`
export const Writer = styled.div`
margin-right: 30px;
font-weight: 600;
`
export const WriterBox = styled.div`
display: flex;
align-items: center;
`
export const UserIcon = styled.img`
width: 15px;
height: 15px;
margin-right: 5px;
`
export const Contents = styled.div`

`
export const MenuBox = styled.div`
padding-top: 20px;
`
export const Btn = styled.button`
color: white;
width: 80px;
grid-row-end: 30px;
background-color: #999999;
border: none;
border-radius: 30px;
margin: 10px;
font-size: 13px;
:hover{
    background-color: #6400FF;
}
`
