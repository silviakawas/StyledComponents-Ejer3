import { StyledCard, StyledData, StyledDate, StyledDot1, StyledDot2, StyledDots, StyledMonth, StyledName, StyledNumbers, StyledYear } from "./styles";

const CardFront = ({number, name, month, year}) =>{

    return(
        <StyledCard>
            <StyledDots>
                <StyledDot1></StyledDot1>
                <StyledDot2></StyledDot2>
            </StyledDots>
            <StyledNumbers>{number}</StyledNumbers>
            <StyledData>
                <StyledName>{name}</StyledName>
                <StyledDate>
                    <StyledMonth>{month}/</StyledMonth>
                    <StyledYear>{year}</StyledYear>
                </StyledDate>
            </StyledData>
        </StyledCard>

    );

};

export default CardFront;