import styled from 'styled-components';
import Link from 'next/link'

const Header = () => {
    return (
        <Container>
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
        </Container>
    )
}

const Container = styled.div`
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
export default Header;
