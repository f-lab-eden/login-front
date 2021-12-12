import styled from 'styled-components';
import Link from 'next/link'
import {useRecoilState, useRecoilValue} from "recoil";

import {auth} from "../../recoil/atoms";
import {useRouter} from "next/router";
import {removeAccessToken, removeRefreshToken} from "../../../../lib/token";

const Header = () => {

    const userName = useRecoilValue(auth)
    console.log(userName)

    const [userInfo, setUserInfo] = useRecoilState(auth)

    const router = useRouter()

    const onClick = () => {
        setUserInfo(null)
        router.push('/signIn')
        removeAccessToken()
        removeRefreshToken()
    }

    return (
        <Container>
            {
                userName ? <UserInfo>
                        {userName.name} 님 안녕하세요!
                        <NavItem onClick={onClick}>로그아웃</NavItem>
                    </UserInfo> :
                    <NavBox>
                        <NavItem>
                            <Link href={"/signIn"}>
                                <a>로그인</a>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href={"/signUp"}>
                                <a>회원가입</a>
                            </Link>
                        </NavItem>
                    </NavBox>
            }
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

const NavBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

const NavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-right: 20px;
  border-radius: 7px;
  border: 1px solid #d1d1d1;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #d1d1d1;
    color: #fff;
  }
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Header;
