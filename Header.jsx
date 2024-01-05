import styled from "styled-components"

export const Header = () => {
    return(
        <>
            <StyledHeader>
            <StyledHeaderp>Digitech Time</StyledHeaderp>
            <StyleHeaderbutton>
              <p>로그인</p>
            </StyleHeaderbutton>
            

            </StyledHeader>
            
        </>
    )
}

const StyledHeader = styled.div`
    
    width: 100%;
    height: 70px;
    background-color: #F3F3F3;
    display: flex;
    justify-content: space-between;
    padding-right: 50px;


`
const StyledHeaderp = styled.div`
    font-size: 30px;
    margin-top: 10px;
    padding-left: 50px;
    font-weight: 600;
`
const StyleHeaderbutton = styled.div`
     margin-top: 10px;
    width: 130px;
    height: 50px;
    border-radius: 100px;
    background-color: #5064CC;
    color: white;
    font-size: 23px;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Header;