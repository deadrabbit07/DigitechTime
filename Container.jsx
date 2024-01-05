import styled from "styled-components";

const Container = () => {
  return (
    <StyledContainer>
      <StyledContainerBoxWrap>
        <StyledContainerBox>인공과</StyledContainerBox>
        <StyledContainerBox>게임과</StyledContainerBox>
      </StyledContainerBoxWrap>
      <StyledContainerMain>
        <StyledContainerMainTitle>전체글</StyledContainerMainTitle>
        <StyledContainerMainImage>
          <img src="img/pass.png" alt="" />
        </StyledContainerMainImage>
        <StyledContainerMainSubtitle>
          로그인 후 사용해주세요.
        </StyledContainerMainSubtitle>
      </StyledContainerMain>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
`;

const StyledContainerBox = styled.div`
  width: 200px;
  height: 70px;
  background-color: #00395a;
  margin-left: 50px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 35px;
`;

const StyledContainerBoxWrap = styled.div``;

const StyledContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f5f5;
  width: 1240px;
  height: 550px;
  margin-top: 20px;
`;

const StyledContainerMainTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 700;
  margin-top: 10px;
`;

const StyledContainerMainSubtitle = styled.div`
  display: flex;
  color: red;
  justify-content: center;
  font-weight: 500;
  margin-top: 50px;
  font-size: 25px;
`;

const StyledContainerMainImage = styled.div`
  margin-top: 10px;
  width: 350px;
  height: 350px;
`;

export default Container;
