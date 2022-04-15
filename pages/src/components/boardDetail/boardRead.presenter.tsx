import * as S from './boardRead.styles' 

export default function BoardReadUI(props){
    return(
        <S.Container>
        <S.Wrapper>
            <S.Title>{props.data ? props.data.fetchBoard.title : "loading..."}</S.Title>
            <S.Images>
              {props.data?.fetchBoard.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <S.BoardImg
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}   
            </S.Images>
            <S.UserBox>
                <S.WriterBox>
                    <S.UserIcon src="/user.png"></S.UserIcon>
                    <S.Writer>{props.data ? props.data.fetchBoard.writer : "loading..."}</S.Writer>
                </S.WriterBox>
                <S.Contents>{props.data ? props.data.fetchBoard.contents : "loading..."}</S.Contents>
            </S.UserBox>
        </S.Wrapper>
            <S.MenuBox>
                <S.Btn onClick={props.onClickToList}>글목록</S.Btn>
                <S.Btn onClick={props.onClickToEdit}>수정</S.Btn>
                <S.Btn onClick={props.onClickDelete}>삭제</S.Btn>
            </S.MenuBox>
        </S.Container>
    )

}