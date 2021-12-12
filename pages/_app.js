import '../src/styles/reset.css'
import styled from 'styled-components';
import {RecoilRoot} from "recoil";

import Header from "../src/views/shared/components/Header";
import HomeButton from "../src/views/shared/components/Buttons/HomeButton";

function MyApp({Component, pageProps}) {
    return (
        <RecoilRoot>
            <Container>
                <Header/>
                <Component {...pageProps} />
                <HomeButton/>
            </Container>
        </RecoilRoot>
    )
}

const Container = styled.div`

`;

export default MyApp
