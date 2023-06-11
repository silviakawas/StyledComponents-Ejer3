import { StyledCard, StyledNumber } from "./styles";

const CardBack = ({cvc})=>{

    return(
        <StyledCard>
            <StyledNumber>{cvc}</StyledNumber>
        </StyledCard>

    );

};

export default CardBack;
