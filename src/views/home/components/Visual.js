import styled from 'styled-components';

const Visual = () => {
    return (
        <Container>
            <Slogan>이거는 로그인 안해도 볼 수 있음</Slogan>
        </Container>
    )
}

const Container = styled.div`
  position: relative;
  background: url('https://images.unsplash.com/photo-1607882589955-27facfb459c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2916&q=80') 50% / cover no-repeat;
  height: 600px;
`;

const Slogan = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 20px;
`;
export default Visual;
