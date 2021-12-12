import styled from 'styled-components';
import axios from 'axios';

import SignInForm from "../components/SignInForm";
import {jwtDecode, setAccessToken, setRefreshToken} from "../../../lib/token";

const SignInContainer = () => {

    const signIn = async ({username, password}) => {

        try {
            const result = await axios({
                method: 'post',
                url: 'http://localhost:4000/auth/login',
                data: {
                    username,
                    password
                }
            })
            console.log(result)
            setAccessToken(result.data.accessToken)
            setRefreshToken(result.data.refreshToken)

            const user = jwtDecode(accessToken)

        } catch (e) {
            console.log('error', e)
            alert('아이디와 비밀번호를 확인해주세욥')
        }
    }

    return (
        <Container>
            <SignInForm signIn={signIn}/>
        </Container>
    )
}

const Container = styled.div`

`;
export default SignInContainer;
