import styled from '@emotion/styled'

export const Wrapper = styled.div`

`;
export const Row = styled.div`
  height: 50px;
  width: 1300px;

  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  
  display: flex;

  align-items: center;  
  justify-content: space-around;
  :hover{
    color:#6400FF;
    font-weight: 600;
    cursor: pointer;
  }
  `
  export const ColumnTitle = styled.div`
  width: 500px;
  font-weight: 600;

  cursor: pointer;
`;
export const ColumnDate = styled.div`
  width: 200px;
  text-align: center;
`;