import styled from 'styled-components';
import {useRecoilState} from "recoil";

import Visual from "../components/Visual";
import List from "../components/List";
import axios from "axios";
import {useEffect, useState} from "react";
import {getAccessToken, getRefreshToken, jwtDecode, setAccessToken} from "../../../lib/token";
import {auth} from "../../shared/recoil/atoms";

const HomeContainer = () => {

    const [userInfo, setUserInfo] = useRecoilState(auth)

    const [data, setData] = useState()

    const axiosInstance = axios.create({

    })

    axiosInstance.interceptors.request.use(async (config) => {
        const token = config.headers.authorization.split(' ')[1]
        const {exp} = jwtDecode(token)
        const expireTime = exp * 1000;
        const now = Date.now()
        if(expireTime - now < 60 * 5 * 1000) {
           const result = await axios({
                url: 'http://localhost:4000/auth/refresh',
                method: 'post',
                data:{
                    refreshToken: getRefreshToken()
                }
            })
            const {accessToken} = result.data
            const user = jwtDecode(accessToken)
            setUserInfo(user)
            setAccessToken(accessToken)
        } else {
            console.log('아직까지는 accessToken 만료 안됨')
        }
        console.log(user)
        return config
    }, (err) => {
        console.log('error', err)
        return Promise.reject(err);
    })

    const getBlog = async () => {
        const token = getAccessToken()
        const config = {
            method: 'get',
            url: 'http://localhost:4000/blog',
            headers: {
                authorization: `bearer ${token}`
            }
        }
        const result = await axios(config)
        setData(result.data)
    }
    useEffect(() => {
        getBlog()
    }, [])

    return (
        <Container>
            <Visual/>
            <List data={data}/>
        </Container>
    )
}

const Container = styled.div`

`;
export default HomeContainer;
