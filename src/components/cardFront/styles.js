import styled from "styled-components";

const StyledCard = styled.div`
    width: 400px;
    height: 210px;
    background-image: url("./public/bg-card-front.png");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    box-shadow: 3px 3px 10px rgba(0,0,0,0.25);
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StyledDots = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
    
`;

const StyledDot1 = styled.div`
    width: 47px;
    height: 47px;
    background-color: white;
    border-radius: 100%;

`;

const StyledDot2 = styled.div`
    width: 21px;
    height: 21px;
    border: 1px solid white;
    border-radius: 100%;

`;

const StyledNumbers = styled.p`
    font-size: 30px;
    font-weight: 500;
    color: white;
    letter-spacing: 5.6px;
    text-align: center;
    margin-top: 60px;
    margin-bottom: 0;
`;

const StyledData = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
`;

const StyledName = styled.p`
    font-size: 14px;
    color: white;
    margin-bottom: 0;
`;

const StyledDate = styled.p`
    font-size: 14px;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
`;

const StyledMonth = styled.p`
    letter-spacing: 1px;
    margin-bottom: 0;
`;

const StyledYear = styled.p`
    letter-spacing: 1px;
    margin-bottom: 0;
`;


export {StyledCard, StyledDots, StyledDot1, StyledDot2, StyledNumbers, StyledData, StyledName, StyledDate, StyledMonth, StyledYear};