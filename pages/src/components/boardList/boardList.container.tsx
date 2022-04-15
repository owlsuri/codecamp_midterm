import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./boardList.presenter";
import { FETCH_BOARDS } from "./boardList.queries";

export default function BoardList(){

    const { data, fetchMore } = useQuery(FETCH_BOARDS)
    const router = useRouter();

    const onClickDetail = (event) =>{
      if (event.target instanceof Element)
        router.push(`/boards/${event.currentTarget.id}`);
    } 

    const onLoadMore = () => {
        if (!data) return;

        fetchMore({
        variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
        updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult?.fetchBoards)
            return { fetchBoards: [...prev.fetchBoards] };
            return {
            fetchBoards: [
                ...prev.fetchBoards,
                ...fetchMoreResult.fetchBoards,
            ],
            };
        },
        });
    };


    return (
        <BoardListUI 
        data={data}
        onClickDetail={onClickDetail}
        onLoadMore={onLoadMore}
        />
    )     

} 