
import { GlobalStyles } from "./styles/globalStyles";
import CardFront from "./components/cardFront/CardFront";
import Form from "./components/form/Form";
import CardBack from "./components/cardBack/CardBack";
import { useState } from "react";

const App = () => {
	const [name, setName] = useState('')
	const [number, setNumber] = useState('')
	const [month, setMonth] = useState('')
	const [year, setYear] = useState('')
	const [cvc, setCvc] = useState('')
	return(
		<>
			<GlobalStyles/>
			<div className="container">
				<div className="containerCards">
					<CardFront
						name={name}
						number={number}
						month={month}
						year={year}
					/>
					<CardBack
						cvc={cvc}
					/>
				</div>
				<div className="containerForm">
					<Form
						labelName='CARDHOLDER NAME'
						placeholderName='e.g. Jane Appleseed'
						labelCard='CARD NUMBER'
						placeholderCard='e.g. 1234 5678 9123 0000'
						labelDate='EXP. DATE (MM/YY)'
						labelCvc='CVC'
						placeholderMonth='MM'
						placeholderYear='YY'
						placeholderCvc='e.g. 123'
						setName={setName}
						setNumber={setNumber}
						setMonth={setMonth}
						setYear={setYear}
						setCvc={setCvc}	
					/>
				</div>
			</div>
		
		</>

	);
};

export default App;
