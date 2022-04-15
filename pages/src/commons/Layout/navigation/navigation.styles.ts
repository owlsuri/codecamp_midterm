import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 200px;
  height: 708px;
  font-size: 18px;
  padding: 20px;
  font-family: "SUIT-ExtraBold.woff02";
  font-weight: 700;
`;

export const Title = styled.span`
  display: flex;
  flex-direction: row;
  height: 100px;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;
export const Name = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
`;
export const Content = styled.div`
padding-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  :hover{
    color: #6400FF;
  }
`;
export const Text = styled.div`
cursor: pointer;

`;
export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;