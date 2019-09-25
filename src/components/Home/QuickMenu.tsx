import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const QuickMenu: React.FC = () => {

  return (
    <Container>
      <Description>
        <h2>
          <span>0-9BOX</span>는 늘 준비되어 있습니다.<br />
          급하게 공구가 필요하더라도<br />
          <span>걱정 마세요.</span>
        </h2>
        <p>
          당신에게 집이란 어떤 공간이자 의미인가요?
          누군가에게는 그저 휴식을 취하기 위한 공간일 수도, 또는 개성을 표현하는 공간일 수도 있겠죠. 어떤 의미이든 내가 가장 편할 수 있고, 오랜 시간을 보내는 것에는 변함없을 것입니다.
          그 공간에 더욱 더 가치를 불어넣기 위해 필요하지만 구매하기에는 부담되는 공구들이 참 많았을 거에요. 아니면 거친 외모와 커다란 부피에 보관하는 것에 부담을 느꼈을 수도 있죠.
          하지만 이제는 [0-9 BOX]가 대신 빌려드리고, 대신 보관해 드리겠습니다.
        </p>
      </Description>
      <Menu>
        <div>
          <Button to=''>
            <span className='lnr lnr-enter-down' />
          </Button>
          <h4>Registration</h4>
          <p>사용하지 않는 공구가 있다면 ?</p>
        </div>
        <div>
          <Button to=''>
            <span className='lnr lnr-exit-up' />
          </Button>
          <h4>Reservation</h4>
          <p>필요한 공구가 있다면 ?</p>
        </div>
        <div>
          <Button to=''>
            <span className='lnr lnr-map-marker' />
          </Button>
          <h4>Search</h4>
          <p>BOX 가 어디에 있을 지 궁금하다면?</p>
        </div>
      </Menu>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
  padding: 80px 0;
  background: #F5F5F5;
  p {
    color: #566787;
  }
`;

const Description = styled.div`
  h2 {
    float: left;
    text-align: right;
    font-weight: 400;
    color: #686F72;
    width: 45%;
    margin: 0px 15px 30px 0px;
  }
  span {
    font-weight: bold;
    color: black;
  }
  p {
    float: left;
    text-align: left;
    font-size: 13px;
    width: 30%;
    margin: 5px 0px 30px 15px;
  }
`;

const Menu = styled.div`
  display: grid;
  grid-gap: 120px;
  grid-template-columns: repeat(3, 1fr);
  margin: auto;
  text-align: center;
  p {
    font-size: 12px;
    margin: -5px 0;
  }
`;

const Button = styled(Link)`
  text-decoration: none;
  span {
    font-size: 25px;
    color: #AFAFAF;
  }
`;

export default QuickMenu;