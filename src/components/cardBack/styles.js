import styled from "styled-components";

const StyledCard = styled.div`
    width: 400px;
    height: 210px;
    background-image: url("./public/bg-card-back.png");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    box-shadow: 3px 3px 10px rgba(0,0,0,0.25);
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-left: 80px;
`;

const StyledNumber = styled.p`
    font-size: 14px;
    letter-spacing: 5px;
    color: white;
    margin-right: 20px;
`;

export {StyledCard, StyledNumber};