import {
	StyledRow,
	StyledForm,
	StyledInput,
	StyledLabel,
	StyledDate,
	StyledCvc,
    StyledButton,
    StyledInputs
} from './styles';

const Form = ({
	labelName,
	placeholderName,
	labelCard,
	placeholderCard,
	placeholderMonth,
	placeholderYear,
	placeholderCvc, labelDate, labelCvc, setName, setNumber, setMonth, setYear, setCvc
}) => {
	return (
		<StyledForm onSubmit={e => e.preventDefault()}>
			<StyledLabel>{labelName}</StyledLabel>
			<StyledInput type='text' placeholder={placeholderName} onChange={(e)=>setName(e.target.value)}></StyledInput>
			<StyledLabel>{labelCard}</StyledLabel>
			<StyledInput type='text' placeholder={placeholderCard} onChange={(e)=>setNumber(e.target.value)}></StyledInput>
			<StyledRow>
				<StyledDate>
					<StyledLabel>{labelDate}</StyledLabel>
                    <StyledInputs>
                        <StyledInput type='text' placeholder={placeholderMonth} onChange={(e)=>setMonth(e.target.value)}></StyledInput>
					    <StyledInput type='text' placeholder={placeholderYear} onChange={(e)=>setYear(e.target.value)}></StyledInput>
                    </StyledInputs>
					
				</StyledDate>
				<StyledCvc>
                    <StyledLabel>{labelCvc}</StyledLabel>
					<StyledInput
						type='text'
						placeholder={placeholderCvc} onChange={(e)=>setCvc(e.target.value)}
					></StyledInput>
				</StyledCvc>
			</StyledRow>
            <StyledButton>Confirm</StyledButton>
		</StyledForm>
	);
};

export default Form;
