import styled from 'styled-components';
import Item from "./Item";

const List = ({data=[]}) => {
    return (
        <Container>
            <Slogan>이거는 로그인 해야만 볼 수 있음</Slogan>
            {
                data.map((item, index) => <Item item={item} key={index}/>)
            }
        </Container>
    )
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const Slogan = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  background: rgb(18, 184, 134);
`;
export default List;
