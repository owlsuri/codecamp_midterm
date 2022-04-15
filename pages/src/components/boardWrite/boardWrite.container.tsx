import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BoardWriteUI from "./boardWrite.presenter";
import { CREATE_BOARD, FETCH_BOARD, UPDATE_BOARD } from "./boardWrite.queris";

export default function BoardWrite(props){

  
    const router=useRouter()

    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [fileUrls, setFileUrls] = useState(["", "", ""]);

    const [createBoard] = useMutation(CREATE_BOARD);
    const [updateBoard] = useMutation(UPDATE_BOARD);
    const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });



    const onChangeWriter = (event) => {
    setWriter(event.target.value);
    }
    const onChangeTitle = (event) => {
    setTitle(event.target.value);
    }
    const onChangePassword = (event) => {
    setPassword(event.target.value);
    }
    const onChangContents = (event) => {
    setContents(event.target.value);
    }
    const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };


    // 등록하기 버튼
    const onClickSubmit = async() =>{
        if(writer && title && contents && password){
            try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              images: fileUrls,
            },
          },
        });
        console.log(result)
        Modal.success({
              content: '게시물 등록이 완료되었습니다!',
        });
          router.push(`/boards/${result.data.createBoard._id}`);
        } catch (error) {
      if (error instanceof Error){
        Modal.error({
          content: error.message, 
      });
    }
  }

    }
}

  // 게시글 수정 버튼
  const onClickEdit = async () => {
    // 이미지 수정
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(data.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    if (
      !title &&
      !contents &&
      !isChangedFiles
    ){
      Modal.error({
        content: "수정한 내용이 없습니다.",
      });
      return;
    }
  
    const updateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (isChangedFiles) updateBoardInput.images = fileUrls;
    
  
 try {
      await updateBoard({
          variables: {
            boardId: router.query.boardId,
            password:password,
            image: fileUrls,
            updateBoardInput,
          },
        });
        Modal.success({
            content: '게시물 수정이 완료되었습니다!',
        });
        router.push(`/boards/${router.query.boardId}`);
  } catch (error) {
          if (error instanceof Error)
            Modal.error({
              content: error.message,
          });
        }
        console.log(fileUrls)
}



//이미지
  useEffect(() => {
    if (data?.fetchBoard.images?.length) {
      setFileUrls([...data?.fetchBoard.images]);
    }
  }, [data]);



    return(
        <BoardWriteUI 
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangePassword={onChangePassword}
        onChangContents={onChangContents}
        onClickSubmit={onClickSubmit}
        onChangeFileUrls={onChangeFileUrls}
        fileUrls={fileUrls}
        isEdit={props.isEdit}
        onClickEdit={onClickEdit}
        data={data}
            />
    )
}