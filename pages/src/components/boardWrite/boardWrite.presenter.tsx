import * as S from './boardWirte.styles'
import {v4 as uuidv4} from 'uuid'
import Uploads01 from '../../commons/Upload/Uploads01.container'

export default function BoardWriteUI(props){

    return(
        <S.Wrapper>
            <S.Main>{props.isEdit ? "게시물 수정" : "새글작성"}</S.Main>
            <S.TitleBox>
                <S.Label >제목</S.Label>
                <S.TitleInput onChange={props.onChangeTitle} 
                defaultValue={props.data?.fetchBoard.title} type="text"  />
            </S.TitleBox>
            <S.ContentsBox>
                <S.Label>내용</S.Label>
                <S.ContentsInput onChange={props.onChangContents} 
                defaultValue={props.data?.fetchBoard.contents}/>
            </S.ContentsBox>
            <S.ImgBox>
            <S.Label >이미지</S.Label>
                {props.fileUrls.map((el, index) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
            </S.ImgBox>
            <S.UserBox>
                <S.Writer>
                    <S.User >작성자</S.User>
                    <S.InputUser onChange={props.onChangeWriter}
                                defaultValue={props.data?.fetchBoard.writer}
                                readOnly={!!props.data?.fetchBoard.writer} type="text" />
                </S.Writer>
                <S.Password>
                    <S.User >비밀번호</S.User>
                    <S.InputUser onChange={props.onChangePassword} type="password" />
                </S.Password>
            </S.UserBox>        
            <S.MenuBox>
                <S.SubmitBtn onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}>
                    {props.isEdit ? "수정" : "등록"}</S.SubmitBtn>
                <S.CancelBtn>취소</S.CancelBtn>
            </S.MenuBox>    

        </S.Wrapper>
    )
}