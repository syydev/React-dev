import React from 'react';
import styled from 'styled-components';
import bg4 from '../../assets/img/bg-4.jpg';

const Vision: React.FC = () => {
  const visions = [
    { title: 'Sharing Economy', content: '\'공구\'라는 유휴 자산에 대한 새로운 분야의 공유 경제 비즈니스 모델을 제시하고, 무엇을 소비할 지가 아닌 어떻게 소비할 지에 대한 해답을 제시합니다.' },
    { title: 'Eco-friendly', content: '관리가 되지 않아 버려지는 공구들의 재활용 방안을 제시하고, 일회성으로 사용되는 공구의 소비를 충분히 대체할 수 있기 때문에 환경 친화적 입니다.' },
    { title: 'Service', content: '유휴 자산의 개념을 공구뿐 아니라, \'서비스\'에도 적용시켜 이용자 간의 서비스 제공에 대한 생산 및 소비가 가능하도록 하여 비용을 절감할 수 있게 합니다.' },
    { title: 'Community', content: '지역 별로 세분화된 통합 공구 관리 시스템을 구축하여 최종적으로는 지역 사회와의 연계를 통해 접근성을 높이고, 지역 경제 활성화에 기여할 것입니다.' },
  ];

  return (
    <Container>
      <div>
        <Img src={bg4} />
      </div>
      <Grid>
        <VisionTitle>
          <h1>Vision</h1>
          <p><strong>0-9 BOX는 다음과 같은 새로운 가치를 창출해 낼 것입니다.</strong></p>
        </VisionTitle>
        {visions.map((vision, index) => (
          <VisionContent key={index}>
            <h4>{vision.title}</h4>
            <p>{vision.content}</p>
          </VisionContent>
        ))}
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background: #F9F9FF;
  float: left;
  p {
    color: #566787;
  }
`;

const Img = styled.img`
  float: left;
  height: 100%;
  width: 40%;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  margin: 7% auto;
  width: 40%;
`;

const VisionTitle = styled.div`
  grid-area: 1/1/2/3;
  h1 {
    margin: -12px 0;
  }
`;

const VisionContent = styled.div`
  padding: 10px 30px;
  background: white;
`;

export default Vision;