import styled from 'styled-components';
import axios from 'axios';
import {useRecoilState} from 'recoil';

import SignInForm from "../components/SignInForm";
import {jwtDecode, setAccessToken, setRefreshToken} from "../../../lib/token";
import {auth} from "../../shared/recoil/atoms";
import {useRouter} from "next/router";

const SignInContainer = () => {

    const [userInfo, setUserInfo] = useRecoilState(auth)
    const router = useRouter()

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
            const {accessToken, refreshToken} = result.data
            setAccessToken(accessToken)
            setRefreshToken(refreshToken)
            const user = jwtDecode(accessToken);
            setUserInfo((user))
            router.push('/')

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
