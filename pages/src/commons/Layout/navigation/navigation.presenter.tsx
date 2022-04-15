import { useRouter } from 'next/router'
import { Fragment } from 'react'
import * as S from './navigation.styles.ts'
import { ILayoutUI } from './navigation.typse'


export default function LayoutNavigationUI(props:ILayoutUI){

    const router = useRouter();

    const onClickToList = () => {
        router.push('/boards')
    }

        const onClickToNew = () => {
        router.push('/boards/new')
    }

    return(
        <S.Wrapper>
            <S.Title>
                <S.Icon src='/talk.png' />
                <S.Name>TALKR</S.Name>
            </S.Title>
            <S.Content>
                <S.Icon  src='/ic_list.png' />
                <S.Text onClick={onClickToList}>전체글보기</S.Text>
            </S.Content>
            <S.Content>
            <S.Icon  src='/new.png' />
                <S.Text onClick={onClickToNew}>새글작성</S.Text>
            </S.Content>

        </S.Wrapper>
    )
}