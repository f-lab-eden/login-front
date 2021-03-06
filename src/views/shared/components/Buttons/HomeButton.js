import styled from 'styled-components';
import Link from 'next/link'
import {AiOutlineHome} from "react-icons/ai";

const HomeButton = () => {
    return (
        <Container>
            <Link href={"/"}>
                <a>
                    <AiOutlineHome/>
                </a>
            </Link>
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  bottom: 80px;
  right: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: rgb(137, 119, 173);
  font-size: 26px;
  color: #fff;
  border-radius: 50%;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: 0.3s;
  
  svg {
    fill: #fff;
  }

  &:hover {
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.35);
  }
  
`;

export default HomeButton;
