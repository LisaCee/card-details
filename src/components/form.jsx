import '../styles/style.css';
import {useState} from "react";

export function CardForm() {
	const [cardNumber, setCardNumber] = useState( '' )
	return (
		<form>
			<label>
				Cardholder Name
				<input type={"text"}></input>
			</label>
			<label>
				Card Number
				<input type={"number"}></input>
			</label>
			<fieldset id={"expDate"}>
				<legend>
					Exp. Date (mm/yy)
				</legend>
				<label>Month
					<input type={"number"}></input>
				</label>
				<label>Year
					<input type={"number"}></input>
				</label>
			</fieldset>
			<label>
				CVC
				<input></input>
			</label>

		</form>
	)
}
