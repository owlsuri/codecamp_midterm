import { getDate } from '../../commons/libraries/date'
import * as S from './boardList.styles'
import InfiniteScroll from "react-infinite-scroller";

export default function BoardListUI(props){

    return (

         <div style={{height:"500px", overflow:"auto"}}>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={props.onLoadMore}
                    hasMore={true}
                    useWindow={false}
                >
                 <S.Wrapper>
                    {props.data?.fetchBoards
                        .map((el:any, index:number) => (
                        <S.Row key={el._id}>
                            <S.ColumnTitle id={el._id} onClick={props.onClickDetail}>{el.title}</S.ColumnTitle>
                            <S.ColumnDate>{getDate(el.createdAt)}</S.ColumnDate>
                        </S.Row>
                        ))}

                    </S.Wrapper>
            </InfiniteScroll>
        </div> 
    )     

} 