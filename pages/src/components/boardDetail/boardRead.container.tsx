import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardReadUI from "./boardRead.presenter";
import { DELETE_BOARD, FETCH_BOARD } from "./boardRead.queries";

export default function BoardRead(){
const router = useRouter();
    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.boardId },
    });
    const [deleteBoard] = useMutation(DELETE_BOARD);

    const onClickDelete = async() => {
       try {
        const result = await deleteBoard({
          variables: { boardId: router.query.boardId },
        });
        console.log(result);
        alert("삭제가 완료되었습니다.")
        router.push(`/boards`);
        console.log(result)

      } catch (error) {
          alert(error.message)
     };
      }
        
    
    const onClickToList = () => {
        router.push("/boards")
    }

    const onClickToEdit = () => {
        router.push(`/boards/${router.query.boardId}/edit`);
    }

    return(
        <BoardReadUI 
        data={data}
        onClickToList={onClickToList}
        onClickToEdit={onClickToEdit}
        onClickDelete={onClickDelete}
        />
    )

}