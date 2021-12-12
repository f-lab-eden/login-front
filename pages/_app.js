import '../src/styles/reset.css'
import styled from 'styled-components';

import Header from "../src/views/shared/components/Header";
import HomeButton from "../src/views/shared/components/Buttons/HomeButton";

function MyApp({Component, pageProps}) {
    return (
        <Container>
            <Header/>
            <Component {...pageProps} />
            <HomeButton/>
        </Container>
    )
}

const Container = styled.div`

`;

export default MyApp
