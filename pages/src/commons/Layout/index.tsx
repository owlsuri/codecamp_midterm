// 레이아웃
import styled from "@emotion/styled"
import { useRouter } from "next/router";
import LayoutBanner from './banner/index.tsx'
import LayoutNavigation from "./navigation/navigation.container.tsx";

    const BodyWrapper=styled.div`

    `

    const Body=styled.div`

    `
        const Navi=styled.div`
        width: 200px;
        height: 780px;
        background: #FFFFFF;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
        border-radius: 10px;
        margin-right: 30px;
    `
    const Wrap=styled.div`
        display: flex;
        flex-direction: row;
    `
    const HIDDEN_HEADERS = [
        "/boards/new",
        "/edit"
    ]

export default function Layout(props){
    const router=useRouter();
    const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath)
    

    return(
        <>
        <Wrap>
            <Navi>
                <LayoutNavigation/>
            </Navi>
            <BodyWrapper> 
            {!isHiddenHeader && <LayoutBanner />}        
                <Body>{props.children}</Body>
        </BodyWrapper> 
        </Wrap>
        </>
    )
}