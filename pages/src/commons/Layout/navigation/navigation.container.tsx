// Navigation
import { useRouter } from 'next/router'
import { MouseEvent } from 'react';
import LayoutNavigationUI from './navigation.presenter'


export default function LayoutNavigation(){

    const router = useRouter();

    const onClickMenu = (event:MouseEvent<HTMLDivElement>) => {
        if(event.target instanceof Element) router.push(event?.target.id)
    }


    return(
        <LayoutNavigationUI onClickMenu={onClickMenu}/>
    )
}