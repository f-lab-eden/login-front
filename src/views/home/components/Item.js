import styled from 'styled-components';

const Item = ({item}) => {
    const {title, desc} = item
    return (
        <Container>
            <BlogItem>
                <Title>{title}</Title>
                <Desc>{desc}</Desc>
            </BlogItem>
        </Container>
    )
}

const Container = styled.div`
`;

const BlogItem = styled.div`
  background: #d1d1d1;
  padding: 20px;
`;

const Title = styled.div`
   color: #333;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
`;

const Desc = styled.div`
    color: rgb(137, 119, 173);
`;
export default Item;
