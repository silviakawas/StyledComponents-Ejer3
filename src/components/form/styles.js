import styled from "styled-components";

const StyledForm = styled.form`
    width: 400px;
    display: flex;
    flex-direction: column;
`;

const StyledLabel = styled.label`
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 3px;
    margin-bottom: 5px;
`;

const StyledInput = styled.input`
    padding: 10px 15px;
    border: 1px solid lightgray;
    border-radius: 6px;
    margin-bottom: 20px;
    ::placeholder{
        font-size: 14px;
        color: lightgray;
        letter-spacing: 1.2px;
    }
`;

const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
`;

const StyledDate = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledInputs = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;


const StyledCvc = styled.div`
    display: flex;
    flex-direction: column;
`;


const StyledButton = styled.button`
    padding: 10px;
    border-radius: 6px;
    letter-spacing: 2px;
    background-color: #21092f;
    color: white;
    border: none;
`;


export {StyledForm, StyledLabel, StyledInput, StyledRow, StyledInputs, StyledDate, StyledCvc, StyledButton};